// Problem Num 01
// Mapping Array of Objects:
// Given an array of users with name and age, return an array of user names who are above 18.
const users = [
    { name: 'John', age: 17 },
    { name: 'Doe', age: 20 },
];
// Expected Output: ['Doe']
let username  = []
const temp_array = users.filter((item)=>{
    if(item.age>=18){
        username.push(item.name)
    };
})
console.log("username: ", username);

// Problem Num 02
// Transform Object Values:
// Write a function that takes an object and returns a new object with all values doubled.
const obj = { a: 2, b: 3, c: 4 };
// Expected Output: { a: 4, b: 6, c: 8 }
function doubleValue(obj){
    for(const [key, value] of Object.entries(obj)){
        obj[key] = value*2;
    }
    return obj;
}
console.log('doubleValue(obj): ', doubleValue(obj));