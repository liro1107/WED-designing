let person =
{
    name:"unnu",
    age:18,
    gender:"Female",
    eyecolour:"black",
    cars:{
        car1:"honda",
        car2:"BMW"
    }
}
for (i in person.cars){
    console.log(person.cars[i]);
}