const {MongoClient} = require("mongodb")

const mongodb = new MongoClient('mongodb://localhost:27017/Movies');

class MongoDB{


    async connectionMongoDB(){

        await mongodb.connect()
            .then(()=>{
                console.log('mongoDB: Connected succesfuly')
            }).catch(()=>{
                console.log('mongoDB: Connected unsuccesfuly')
            })

         await mongodb.close()

    }

}

let a  = new MongoDB();
console.log(a.connectionMongoDB())