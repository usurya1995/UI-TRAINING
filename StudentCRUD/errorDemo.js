var obj = {
    "x":10,
    "y":20
}

console.log(obj.x);
console.log(obj.y);

if(obj.x){
    console.log("HCL TECHNOLOGIES");
}

if(!obj.z){
    obj.z =30;
}

obj.print = function(){
    console.log(this.x+","+this.y+","+this.z);
}
console.log(obj);
obj.print();
try{
    obj.z();
}

catch(err){
    console.log("Error");
}


try{
    f1();
}

catch(err){
    console.log(err);
}

console.log("-------------------");
//obj.doSomething();

//f1();