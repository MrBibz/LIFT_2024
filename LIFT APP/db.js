const { MongoClient } = require('mongodb');

let dbConnection
let uri = 'mongodb+srv://yoshi:test1234@cluster0.ssvve2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}