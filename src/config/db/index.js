const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
        console.log('connected')
    } catch (error) {
        console.log('failed')
    }
}

module.exports = { connect }