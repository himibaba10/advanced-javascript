const age = 0; //number er khetre 0 baade shob true;
const names = ""; //khali string chara sob string true;
let names2; //eta undefined, jeta falsy;
let names3 = null; //null jinish tao false;
let names4 = NaN; //NaN jinish tao false;
//"0", " " egula true;
let arr = []; // khali array true;
let obj = {}; //khali object true;
let other = false; //eta to must be false
if(age || age == 0){
    console.log("condition is true");
}
else {
    console.log("condition is false");
}