class Articles {
    constructor(id_item,name,quantity,purchased) {
        this.id_item = id_item;
        this.name = name;
        this.quantity = quantity;
        this.purchased = purchased;
  
    }
}

//exporter cette classe pour etre importer dans les autres js
module.exports = Articles;