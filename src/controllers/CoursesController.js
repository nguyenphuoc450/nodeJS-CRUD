const Course = require('../models/Course')
const { mongooseObject, mutipleMongoonseToObject } = require('../util/mongoose')

class CoursesController {
  // [GET] /courses/:slug
  show (req, res) {
    Course.findOne({ slug: req.params.slug })
        .then(course => {
            res.render('courses/show', { course: mongooseObject(course) })
        })
  }

  // [GET] /courses/create
  create (req, res) {
    res.render('courses/create')
  }

  // [POST] /courses/store
  store (req, res) {
    req.body.thumbnail = `https://i3.ytimg.com/vi/${formData.videoID}/hqdefault.jpg`
    const course = new Course(req.body)
    course.save()
        .then(() => res.redirect('/courses/list'))
        .catch((error) => {

        })
  }

  // [GET] /courses/list
  list (req, res) {
    Course.find({})
        .then(courses => {
            res.render('courses/list', { courses: mutipleMongoonseToObject(courses) })
        })
        .catch((error) => {

        })
  }

  // [GET] /courses/:id/edit
  edit (req, res) {
    Course.findOne({ _id: req.params.id })
        .then(course => {
            res.render('courses/edit', { course: mongooseObject(course) })
        })
  }

  // [PUT] /courses/:id
  update (req, res) {
    Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/courses/list'))
        .catch((error) => {

        })

  }

  // [DELETE] /courses/:id
  delete (req, res) {
    Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch((error) => {

        })
  }

}

module.exports = new CoursesController