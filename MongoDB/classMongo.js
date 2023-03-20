// const { MongoClient } = require('mongodb');
const AdapterMongo = require('./adapterMongo.js').AdapterMongo




class Movies{

    constructor(title, director, year, genre, rating) {
        this.title = title
        this.director = director
        this.year = year
        this.genre = genre
        this.rating = rating
    }

    classCreate(){
    return this.title, this.director, this.year, this.genre, this.rating
    }


    classFind(){
        return this.title, this.director, this.year, this.genre, this.rating
    }

}

// let a = new Movies("title", "director", 2022, "genre", 10)
// let b = new AdapterMongo(a)
//
// console.log(b.Create())



let c = new Movies('Chernobyl', 'Johan Renck', 2019, "drama", 8.8)
let d = new AdapterMongo(c)

console.log(c.classFind())
console.log(d.Find())
