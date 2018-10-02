function greaterNum(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log(greaterNum(2,1))


//Write a function named helloWorld that returns English.
//1) If greeted in Spanish, German, or English, return "Hello, World."
function helloWorld(a) {
  if (a == "es" || a == "de" || a == "en") {
    return "Hello, World"
    //2) if any other greeting, also return, "Hello, World."
  } else {
    return "Hello, World"
  }
}

console.log(helloWorld(""))

function helloWorld(a) {
    if (a == "es"){
      return "Hola"
  } else if (a == "de"){
      return "Guten tag"
  } else if (a == "en"){
      return "Hello world"
  } else {
      return "Hello World"
  }
}

console.log(helloWorld("fr"))


//write a function named assignGrade that takes one number score and returns a grade
//1. breakdown for grades - 100-90 A ,etc.
//2. return respected grades

function assignGrade(num) {
  if (num >= 90) {
    return "A"
  } else if (num >= 80) {
    return "B"
  } else if (num >= 70) {
    return "C"
  } else if (num >= 60) {
    return "D"
  } else {
    return "F"
  }
}

console.log(assignGrade(80))

//Write a function named pluralize that takes a noun and a number and returned the plural of the noun
//1) Choose nouns
//2) Figure the plural of each noun
//3) Return the pluralized form of each nouns

function pluralizer(num, noun){
  if (num != 1) {
    return noun + "s"
  } else {
    return noun
  }
}

console.log(pluralizer(0, "dog"))

function marco() {
  return "polo"
}

function greeter(name){
  return "Hello " + name
}

console.log(greeter("Erik"))

function oddOrEven(num) {
  if (num % 2 > 0) {
    return "odd"
  } else {
    return "even"
  }
}

console.log(oddOrEven(15))

function triple(num){
  return num * 3
}

console.log(triple(10))

function multiply(num1, num2){
  return num1 * num2
}

console.log(multiply(6, 7))

function divisibleBy (num1, num2) {
  if (num1 % num2 === 0) {
    return num1 + " is evenly divisible by " + num2
  } else {
    return num1 + " is NOT evenly divisible by " + num2
  }
}

console.log(divisibleBy(11, 5))

var groceryList1 = ["apples", "carrots", "oatmeal"]
groceryList1.push("granola")
console.log(groceryList1)

var groceryList2 = ["chips", "dip", "cookies"]
groceryList2.push("soda")
console.log(groceryList2)

var numbers1 = [1,2,3,4,5]
numbers1.unshift(0)
console.log(numbers1)

var numbers2 = [2, 4, 6, 8, 10]
numbers2.unshift(0)
console.log(numbers2)

var numbers3 = [2, 13, 6, 8, 4, 2]
console.log(numbers3[0])

var groceryList2 = ["chips", "dip", "cookies"]
var updatedGrocery = groceryList2.concat(["soda"])
console.log(updatedGrocery)


var numbers3 = [2, 13, 6, 8, 4, 2]
console.log(numbers3.indexOf(2));

console.log(numbers3.indexOf(2,2))

var chars = ["y", "a", "r", "r", "a"]
console.log(chars.join(''))

var chars = ["y", "a", "r", "r", "a"]
var charsReversed = chars.reverse()
console.log(charsReversed)

function describeProduct(name, price) {
  return "The product is a " + name + ". It costs $" + price

}

console.log(describeProduct("chair", 14.99))


function message(product, inBudget){
  if(inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}
// And consider this variable:
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
var inBudget = budget - price
console.log(message(product, budget))


var price = 300

var inBudget = budget - price

function checkBudget(product, inBudget, message) {
  if (inBudget > 0) {
    return message
  }
}
console.log(inBudget)
 console.log(message())
 console.log(checkBudget())

 function checkBudget(budget,price){

 }
console.log(checkBudget())

var checkBudget = budget - price

if(inBudget >= 0){
return true
} else {
  return false
}

 console.log(message())
