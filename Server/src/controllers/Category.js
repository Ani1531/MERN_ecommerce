const Category = require("../models/Category");
const slugify = require("slugify");

exports.addCategory = (req, res, next) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ message: error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};
