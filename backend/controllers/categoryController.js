const Category = require('../models/CategoryModel');

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: 'asc' }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send('Category info is required.');
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      res.status(400).send('Category already exists.');
    } else {
      const categoryCreated = await Category.create({ name: category });
      res.status(201).json(categoryCreated);
    }
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    if (!category) {
      res.status(400).send('Category info is required.');
    }
    if (category === 'Select category') {
      console.log('Select category is not allowed to be deleted.');
    }
    if (category !== 'Select category') {
      const categoryDeleted = await Category.findOneAndDelete({
        name: decodeURIComponent(category),
      }).orFail();
      res.status(200).json(categoryDeleted);
    }
  } catch (error) {
    next(error);
  }
};

// chatGPTs refactor of my code 82 lines of code vs 55, but much easier to read
const saveAttributes = async (req, res, next) => {
  const { attributeKey, attributeValue, category } = req.body;

  // Check if category, attributeKey and attributeValue exist
  if (!category || !attributeKey || !attributeValue) {
    res.status(400).send('Category and Attribute info is required.');
    return;
  }

  try {
    // Extract the first category from the provided string
    const rootCategory = category.split('/')[0];

    // Check if the root category exists in the database
    const categoryExists = await Category.findOne({ name: rootCategory });
    if (!categoryExists) {
      res.status(404).send('Category not found.');
      return;
    }

    // Check if the category has attributes
    if (categoryExists.attributes.length > 0) {
      // Check if the attribute key already exists
      let attributeExists = false;
      categoryExists.attributes.forEach((attr) => {
        if (attr.key === attributeKey) {
          attributeExists = true;
          // Check if the attribute value already exists
          if (attr.value.includes(attributeValue)) {
            res.status(400).send('Attribute value already exists.');
            return;
          } else {
            addAttributeValueToExistingAttribute(
              categoryExists,
              attributeKey,
              attributeValue
            );
            res.status(201).json('New value added to existing key');
            return;
          }
        }
      });

      // If the key doesn't exist, add a new key-value pair
      if (!attributeExists) {
        addNewAttribute(categoryExists, attributeKey, attributeValue);
        res.status(201).json('New key-value added to existing category');
      }
    } else {
      // If the category doesn't have any attributes, create a new attribute array
      addNewAttribute(categoryExists, attributeKey, attributeValue);
      res.status(201).json('New key-value added to new category');
    }
  } catch (error) {
    next(error);
  }
};

// Helper function to add a new attribute to the category
const addNewAttribute = (categoryDoc, attributeKey, attributeValue) => {
  categoryDoc.attributes.push({
    key: attributeKey,
    value: [attributeValue],
  });
  categoryDoc.save();
};

// Helper function to add a value to an existing attribute
const addAttributeValueToExistingAttribute = (
  categoryDoc,
  attributeKey,
  attributeValue
) => {
  const index = categoryDoc.attributes.findIndex(
    (attr) => attr.key === attributeKey
  );
  categoryDoc.attributes[index].value.push(attributeValue);
  categoryDoc.attributes[index].value = Array.from(
    new Set(categoryDoc.attributes[index].value)
  );
  categoryDoc.save();
};

// my original code 55 lines of code, not much white space
// const saveAttributes = async (req, res, next) => {
//   const { attributeKey, attributeValue, category } = req.body;
//   if (!category || !attributeKey || !attributeValue) {
//     res.status(400).send('Category and Attribute info is required.');
//   }
//   try {
//     console.log('trying');
//     firstCategory = category.split('/')[0];
//     const categoryExists = await Category.findOne({
//       name: firstCategory,
//     });
//     if (categoryExists.attributes.length > 0) {
//       console.log('category exists and has attributes');
//       var keyExists = false;
//       // if key exists and attribute is valid add a value to the key
//       categoryExists.attributes.map((item, index) => {
//         if (item.key === attributeKey) {
//           keyExists = true;
//           if (item.value.includes(attributeValue)) {
//             res.status(400).send('Attribute value already exists.');
//           } else {
//             var currentAttributeValues = [
//               ...categoryExists.attributes[index].value,
//             ];
//             currentAttributeValues.push(attributeValue);
//             var newAttributeValues = [...new Set(currentAttributeValues)];
//             categoryExists.attributes[index].value = newAttributeValues;
//             categoryExists.save();
//             res.status(201).json('new value added to existing key');
//             return;
//           }
//         }
//       });
//       // otherwise key does not exist and add a new key and value
//       if (!keyExists) {
//         categoryExists.attributes.push({
//           key: attributeKey,
//           value: [attributeValue],
//         });
//         res.status(201).json('new key and value added to existing category');
//       }
//     } else {
//       // category has no attributes and push to the array
//       console.log('trying to push new key and value to array');
//       categoryExists.attributes.push({
//         key: attributeKey,
//         value: [attributeValue],
//       });
//       await categoryExists.save();
//       res.status(201).json(categoryExists);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = { getCategories, newCategory, deleteCategory, saveAttributes };
