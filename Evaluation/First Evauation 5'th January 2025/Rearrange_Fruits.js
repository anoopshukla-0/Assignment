function rearrangeFruits (fruits) {
    const removeFruits =  fruits.splice(-4)
    fruits.unshift(...removeFruits);
    return fruits;
} 


const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));