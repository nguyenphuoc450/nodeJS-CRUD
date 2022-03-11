module.exports = {
    mutipleMongoonseToObject (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseObject (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}