const mongoClient= require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=function (done) {
    //    const url="mongodb://0.0.0.0:27017/"  // the local host
       const url = "mongodb+srv://adwaith:adwaithandhisshorestore@shoestore.kaoomxv.mongodb.net/test"
    // const url='mongodb://localhost:27017'
    // const url="localhost:2701"
    const dbname='Ecommerce'
    mongoClient.connect(url,(err,data)=>{
        if (err) {
            console.log("error!!!")
            return done(err)
        }
        state.db=data.db(dbname)
    })
    done()
}
module.exports.get=function () {
    return state.db
}