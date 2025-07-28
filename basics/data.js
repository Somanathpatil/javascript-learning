const myDate = new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleString());

myDate.toLocaleString('default',{
    calendar:"calendar"
})