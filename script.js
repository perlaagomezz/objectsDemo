'use strict'

console.log("hello world")

document.write("<h1> Objects Demo </h>")

const spaceship = {
    engine:"rocket" ,
    color: "green" ,
    room: "cockpit" ,
    flying: function (){
    return "My spaceship is powered by" + this. 
    engine + "" + "therefor it can fly !!!"
}
}
console.log("my spaceship is", spaceship.color);

console.log(spaceship.flying)


