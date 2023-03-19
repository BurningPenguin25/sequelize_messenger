const { MongoClient } = require('mongodb');
const AdapterMongo = require('./adapterMongo.js').AdapterMongo


const newDocument =   {
    title: "test",
    director: "test",
    year: 2023,
    genre: "test",
    rating: 10
}


class Movies{

    constructor(movier) {
        this.movier = movier
    }

    classCreate(){
    return this.movier
    }

}

let a = new Movies(newDocument)
let b = new AdapterMongo(a)

a.classCreate()
console.log(b.Create())