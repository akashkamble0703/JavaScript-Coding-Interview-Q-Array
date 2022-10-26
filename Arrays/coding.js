//    JavaScript Coding Interview Question-
// How will you reverse an array? Write your own implementation-

/* function reverse(array) {
            for (let i = 0; i < array.length; i++) {
                if(i > Math.floor((array.length - 1) / 2)){
                    break;
                }
                let temp = array[i];
                array[i] = array[array.length - 1 - i];
                array[array.length - 1 - i] = temp;
            }
            return array
        }
        console.log(reverse([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
        document.write(reverse([588,225,122,22,235,123,452]));
    */

//  Q.2) Let names = [ 'madhav', 'akash', 'faiz', 'vinod']
// 1: Add vaibhav at the end (CREATE)
// 2: Tell me the output of the that method(READ)
// 3: update akash to AKASH (UPDATE)
// 4: Delete vinod from an array. (DELETE)
// **DP IT BY ONLY ONE METHOD.
/*
let names = ["madhav", "akash", "faiz", "vinod"];
const newNames = names.splice(names.length, 0, "vaibhav");
const new1Names = names.splice(1, 1, "AKASH");
const new2Names = names.splice(3, 1);

document.write(names);
console.log(names);
console.log(newNames);
console.log(new1Names);
*/

//  Q.3)  find vs filter => search 
/*
const array1 = [5, 12, 8, 130, 44];
// find no > 12     // no > 300 ....this is undefined

const newArr = array1.find((elem) => {
    return elem > 12;
})
console.log(newArr);   // 130.

const new1Arr = array1.filter((elem) => {
    return elem > 12;
})
console.log(new1Arr);   // 130, 44
*/
