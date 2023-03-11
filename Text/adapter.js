
export class Adapter{

    constructor(search) {
        this.search = search
    }

    adaptMeth(){
        return this.search.word()
    }

}

let searchAdapter = new Adapter(search);

console.log(searchAdapter.adaptMeth())