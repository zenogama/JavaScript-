/* const CountLabel = document.getElementById("count-label");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const DecreaseBtn = document.getElementById("DecreaseBtn");

let count = 0;

IncreaseBtn.onclick = function(){
    count++;
    CountLabel.textContent= count;
}
DecreaseBtn.onclick = function(){
    count--;
    CountLabel.textContent= count;
}
ResetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent= count;
}
function hello(callback){
    console.log("hello");
    callback()
}
function goodbye(){
    console.log("goodbye!")
}

hello(goodbye);


* Map() It runs a callback function on every item to transform it, pushing the result into a brand new array
const number =[1,2,3,4,5];
const squares = number.map(square);

function square(x){
    return Math.pow(x,2)
}
console.log(squares)


* .filter() can do condtions in array
let number = [1,2,3,4,5,6,7];
let evennumbers = number.filter(IsEven);

function IsEven(x){
    return x%2===0;
}
console.log(evennumbers)*

* reduce() it reduce the whole array into one element
const Price = [5,30,10,15,25,20];
const totalPrice =Price.reduce(Sum);

function Sum(x,y){
    return x+y
}
console.log(totalPrice)

const hello= [1,2,3,4,5,6,7,8,9]; 
const hello1 = hello.reduce((x,y)=>x+y);
console.log(hello1)


function car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color; 
}
const car1 = new car("Ford","Mustang","2026", "red");

console.log(car1.make);


class product{
    constructor(name,price){
        this.name=name;
        this.price =price
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price}`);
    }
}

const product1 = new product("shirt",19.99);
product1.displayProduct()

class mathsutil{
    static PI=3.14159;
    static getDiameter(radius){
        return radius*2
    }
    static getcircumfrience(radius){
        return 2*this.PI*radius
    }
}

console.log(mathsutil.PI);
console.log(mathsutil.getDiameter(12345678));
console.log(mathsutil.getcircumfrience(12345678))

class Rectangle{
    constructor(width,length){
        this.width = width;
        this.length= length;
    }
    set width(newwidth){
        if(newwidth>0){
            this._width=newwidth;
            return this._width;
        }
        else{
            console.error("width must be positive");
        }       
    }
    set length(newwlength){
        if(newwlength>0){
            this._length=newwlength;
        }
        else{
            console.error("length must be positive");
        }       
    }
    get length(){
        return this._length;
    }
    get width(){
        return this._width;
    }

}

const Rectangle1 = new Rectangle(1234,7654);

Rectangle1.length = -7654;
Rectangle1.width = "pizza";

console.log(Rectangle1.width);
console.log(Rectangle1.length);


let a =1;
let b =2;
[a,b]=[b,a];

console.log(a);
console.log(b);

const colors = ["Red","Blue","Green"];

[colors[0],colors[2]] = [colors[1],colors[0]];

console.log(colors);
console.log(colors[2]);

const colors =["Red","Blue","Green"];
const [firstcolor , secondcolor , thirdcolor] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

const person1= {
    FirstName = 'a',
    LastName = 'b',
    age = 20,
    job = 'fry cook',
}
const person2 = {
    FirstName : 'c',
    LastName :'d',
    age : 78,
    job : 'fry cheif',
}

const {FirstName, LastName ,age, job} = person2;

console.log(FirstName)

function displayperson({FirstName,LastName,job}){
    console.log(`first name of this perosn is ${FirstName}`);
    console.log(`last name of this perosn is ${LastName}`);
    console.log(`job of this perosn is ${job}`);
}
const person2 = {
    FirstName : 'c',
    LastName :'d',
    age : 78,
    job : 'fry cheif',
}

displayperson(person2);

let fruits = ["Apple","Banana", "pineaaple", "Coconut", "Grapes"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);

! this code about array shuffle is not yet complelety understood yet
const cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

shuffle(cards);

console.log(cards)

function shuffle(array){
    for(i= array.length-1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        // [Array[i], Array[random]]= [Array[random], Array[i]];
        console.log(array[i])
    }
}


const date = new Date();
const month = date.getMonth();
console.log(month);*/

function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    const time2 = hours >= 12 ? "PM":"AM";
    hours = hours%12||12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds}  ${time2}`;
    document.getElementById("Clock").textContent= time;
}

updateclock();
setInterval(updateclock,500)


