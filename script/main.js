// Prac 1-3

const plushBall = {
    color: "multi-colored",
    fuzzy: true,
}

const hockeyPuck = {
    color: "balck",
    fuzzy: false
}

// made my pet object for prac 1
const myPet = {
    name: "Todd",
    species: "Cat",
    nickname: "Toddy, T-Dogg, Tyga",
    age: 1.5,
    // made some keys with functions that describe my pets behavior and performs them
    meow: function(){
        alert("MEOW!!");
    },
    pur: function(){
        alert("PURRRRRRR!!")
    },
    bite: function(){
        alert("Todd dont bite people!!")
    },
    favoriteToys: [],
    play: function (toy){
        if(toy.fuzzy === true){
            this.favoriteToys.push(toy);
            alert("Todd - 'I love this toy!'")
            console.log(this.favoriteToys);
        } else {
            alert("Todd - 'Get this toy outta here!'")
        }
    }
}

myPet.meow();
myPet.pur();
myPet.bite();
myPet.play(plushBall)
myPet.play(hockeyPuck)