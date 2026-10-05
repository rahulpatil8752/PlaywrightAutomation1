
var marks= new Array(20,40,35,12,37,100)

var marks= [20,40,35,12,37,100]
console.log(marks)

subMarks=marks.slice(2,5);
console.log(subMarks);

console.log(marks[4]) //Get the value 

marks[3]=14
console.log(marks) //updating array

console.log(marks.length) //length of array6

marks.push(93.27)
console.log(marks) //[20,40,35,12,37,100,93.27] adds  array at end

marks.pop()   //Remove last number from array
console.log(marks)

marks.unshift(4)
console.log(marks) //Adds no at first

console.log(marks.indexOf(100)); //to find number from index

console.log(marks.includes(120));  // to find weather no is included in array

var sum=0
for(let i=0; i<marks.length; i++)
{
    //console.log(marks[i]);
    sum=sum + marks[i];
}
console.log(sum);

//reduce filter map
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total);

//Create a new array with even number of scores array []
var scores = [12,13,14,16]
var evenScores = []
for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores);         //[ 12, 14, 16 ]

//Another way to print even numbers
let newFilterEvenScores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScores);                       //[ 12, 14, 16 ]

//Multiply each even number with 3

let mappedArray=newFilterEvenScores.map(score=>score*3)
console.log(mappedArray);                              //[ 36, 42, 48 ]

let totalVal= mappedArray.reduce((sum,val)=>sum+val,0) //sum
console.log(totalVal);

let fruits = ["banana","mango","pomegrante","apple"]
fruits.sort();                                      // sort can sort only string and not numbers
console.log(fruits);

var scores1 = [12,16,13,19,5,04]
console.log(scores1.sort());
