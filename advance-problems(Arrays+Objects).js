// Problem Num: 01
// Flatten Nested Arrays:
// Write a function to flatten a deeply nested array.
const nested = [1, [2, [3, 4]], 5];
// Expected Output: [1, 2, 3, 4, 5]

let flatArray = nested.flat(3)

console.log('flatArray', flatArray)

// Problem Num: 02
// Group by Property:
// Given an array of objects, group them by a specific property.
const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
];
// Expected Output: { fruit: ['apple', 'banana'], vegetable: ['carrot'] }
function ExtractingDifferentTypes (array){
    const types = []
    array.map((item)=>{
        if (!types.includes(item.type)){
            types.push(item.type)
        }
    })
    return types;
}
const output_obj = {};
ExtractingDifferentTypes(items).map((item)=>{
    var temp_array = []
    items.map((i)=>{
        if (i.type === item){
            temp_array.push(i.name)
        }
    })
    output_obj[item] = temp_array;
})
console.log('ExtractingDifferentTypes(items)', ExtractingDifferentTypes(items));
console.log('output_obj', output_obj)