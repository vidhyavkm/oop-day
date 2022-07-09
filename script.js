//object literal:

// let bike= {
//     name: "YAMAHA",
//     make:"2021",
//     price:"150000",
//     getBikeDetails:function() {
//         return(`The name of the bike is ${bike.name} with Price Rs.${bike.price} /-`)
//     }
// }
// // bike.name = "SUZUKI"
// console.log(bike.getBikeDetails());

//traditional way of calling an object

//2. Object constructor

//using constructor 

// function person (firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1Detail = new person ("Guvi1","Classes1");
// let person2Detail = new person ("Guvi2","Classes2");
// let person3Detail = new person ("Guvi3","Classes3");
// let person4Detail = new person ("Guvi4","Classes4");

// console.log(person4Detail.firstName, person1Detail.lastName);

//classes:
//classes as template
//objects as instance
//class constructor is generic
//values are dynamic

// class person {
//     constructor(firstName, lastName, age, place){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.place = place;
//     }
//     getDetails(){
//         return (`The name of a person is ${this.firstName} ${this.lastName} with age ${this.age} born at ${this.place}`)
//     }
// }
// let person1 = new person ("Guvi", "Geek", "10", "Chennai");
// let person2 = new person ("MS", "Dhoni", "41", "India");

// console.log(person1.getDetails());
// console.log(person1[firstName]);
// console.log(getDetails(person1));
// console.log(person1.firstName,person1.lastName);

//create a class Uber

class Uber {
        constructor(distance, rate, waitingperiod){
            this.distance = distance;
            this.rate = rate;
            this.waitingperiod = waitingperiod;
        }
    setDistance(dist){
        this.distance = dist;
    }
        getRideDetails(){
            return (`The distance of the ride is ${this.distance} and rate of ${this.rate} with waitingperiod of ${this.waitingperiod}`)
        }
           
getPrice(){
    let totalPrice = (this.rate * this.distance) + (this.waitingperiod * 5);
    return totalPrice;
}
 } // calculate price = (rate * distance ) + (waitingperiod * 5) 

let uber1 = new Uber (350, 20, 15);

console.log(uber1.getPrice());
uber1.setDistance(150);
console.log(uber1.getPrice());


