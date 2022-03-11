const Course = require('../models/Course')
const { mutipleMongoonseToObject } = require('../util/mongoose')

class SiteController {
  // [GET] /
  index (req, res, next) {
    Course.find({})
        .then(courses => {
            res.render('home', { courses: mutipleMongoonseToObject(courses) })
        })
        .catch(error => next(error))
  }

  // [GET] /search
  search (req, res) {
    res.render('search')
  }

  // [GET] /api
  api (req, res) {
    Course.find({})
    .then(courses => {
        res.json({ courses: mutipleMongoonseToObject(courses) })
    })
    .catch(error => next(error))
  }
}

module.exports = new SiteController