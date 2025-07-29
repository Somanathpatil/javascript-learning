// const myArry = [1,2,3,4,5];
// console.log(myArry)
// console.log(myArry[0])

// myArry.push(6);
// console.log(myArry);

// myArry.pop()
// console.log(myArry);

// console.log(myArry.includes(4))
// console.log(myArry.indexOf(4))

// const newArry = myArry.join()

// console.log(newArry)
// console.log(typeof newArry)

const marvel_heros = ["ironma","thor","spiderman"]
console.log(marvel_heros);

const de_heros = ["Superman","flash","Hulk"]
console.log(de_heros);

 marvel_heros.push(de_heros);
 console.log(marvel_heros)

 const allHeros = marvel_heros.concat(de_heros);
 console.log(allHeros);


 const  another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

 const usefull_array = another_array.flat(Infinity);
 console.log(usefull_array);