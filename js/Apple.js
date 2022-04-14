class Apple {
    constructor() {
        this.weight = 10;
    }
    decrease(){
        this.weight --;
    }
    getWeight(){
        console.log(`Apple weight: ${this.weight}`)
        return this.weight;
    }
    isEmpty (){
        return this.weight <= 0;
    }



}