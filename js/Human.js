class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    setWeight (weight){
        return this.weight = weight;
    }
    getWeight (){
        return this.weight;
    }
    eatApple(apple){
        apple.decrease();
        console.log(`${this.name} dang an ${apple}`)
    }
    say(string){
        console.log(`${this.name} say: ${string}`);
    };
    checkApple(apple){
        return apple.getWeight();
    };
};