const Course = require("../models/Course");

class SiteController {
  // [GET] /

  async index(req, res, next) {
    Course.find({})
      .then((docs) => {
        res.json(docs);
      })
      .catch(next);
  }

  // [GET] /search

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
