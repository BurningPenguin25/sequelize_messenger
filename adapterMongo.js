const { MongoClient } = require('mongodb');


const client = new MongoClient('mongodb://localhost:27017/Movies');

class AdapterMongo {

    constructor(document) {
        this.document = document
    }


    async Create(){

        console.log(this.document)

        // await client
        //     .db('Movies')
        //     .collection('MovieCollection')
        //     .insertOne(this.document)
        //     .then(()=>{
        //         console.log('Добавлено успешно')
        //     }).catch((err)=>{
        //         console.log('Ошибка при добавлении', err)
        //     })

        await client.close()
    }

    // async update(){
    //     await client
    //         .db('Movies')
    //         .collection('MovieCollection')
    //         .insertOne(newDocument)
    //         .then(()=>{
    //             console.log('Добавлено успешно')
    //         }).catch((err)=>{
    //             console.log('Ошибка при добавлении', err)
    //         })
    //     await client.close()
    // }
    //
    // async find(){
    //     await client
    //         .db('Movies')
    //         .collection('MovieCollection')
    //         .insertOne(newDocument)
    //         .then(()=>{
    //             console.log('Добавлено успешно')
    //         }).catch((err)=>{
    //             console.log('Ошибка при добавлении', err)
    //         })
    //
    //     await client.close()
    // }
    //
    // async delete(){
    //     await client
    //         .db('Movies')
    //         .collection('MovieCollection')
    //         .insertOne(newDocument)
    //         .then(()=>{
    //             console.log('Добавлено успешно')
    //         }).catch((err)=>{
    //             console.log('Ошибка при добавлении', err)
    //         })
    //
    //     await client.close()
    // }
}

// let a = new AdapterMongo();
// console.log(a.Create())

module.exports ={
    AdapterMongo
}