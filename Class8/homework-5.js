// Due date: Mon (July 18) eod
/*
Felipe J Ruiz (Phil)
homework-5  
//still troubleshooting git & github communication
/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
let sentence1 = 'have a great day';
let strlc1 = sentence1.toLowerCase().split(' ');
for (let index = 0; index < strlc1.length; index++) {
    strlc1[index] = strlc1[index].charAt(0).toUpperCase() + strlc1[index].slice(1)
    //console.log(strlc.join(' '));
}
console.log(strlc1.join(' '));

let sentence2 = 'YOu LIVe ONLY ONcE';
let strlc2 = sentence2.toLowerCase().split(' ');
for (let index = 0; index < strlc2.length; index++) {
    strlc2[index] = strlc2[index].charAt(0).toUpperCase() + strlc2[index].slice(1)
    //console.log(strlc.join(' '));
}
console.log(strlc2.join(' '));

let sentence3 = 'gooD mORNIng';
let strlc3 = sentence3.toLowerCase().split(' ');
for (let index = 0; index < strlc3.length; index++) {
    strlc3[index] = strlc3[index].charAt(0).toUpperCase() + strlc3[index].slice(1)
    //console.log(strlc.join(' '));
}
console.log(strlc3.join(' '));

let sentence4 = 'apple banana cherry';
let strlc4 = sentence4.toLowerCase().split(' ');
for (let index = 0; index < strlc4.length; index++) {
    strlc4[index] = strlc4[index].charAt(0).toUpperCase() + strlc4[index].slice(1)
    //console.log(strlc.join(' '));
}
console.log(strlc4.join(' '));
/**
ar:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
let sentance2a = 'have a great day';
let sent_splt2a = sentance2a.split(' ');
//console.log(sent_splt);
let sent_rev2a = sent_splt2a.reverse().join();
console.log(sent_rev2a);

let sentance2b = 'morning good';
let sent_splt2b = sentance2b.split(' ');
//console.log(sent_splt);
let sent_rev2b = sent_splt2b.reverse().join();
console.log(sent_rev2b);

let sentance2c = 'hello dear how are you doing';
let sent_splt2c = sentance2c.split(' ');
//console.log(sent_splt);
let sent_rev2c = sent_splt2c.reverse().join();
console.log(sent_rev2c);

let sentance2d = 'learn';
let sent_splt2d = sentance2d.split(' ');
//console.log(sent_splt);
let sent_rev2d = sent_splt2d.reverse().join();
console.log(sent_rev2d);
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
let numAdd_array1 = [1, 2, 3, 4, 5];
let num_total1 = 0;
for (i = 0; i < numAdd_array1.length; i++){
    num_total1 += numAdd_array1[i]
}
console.log(num_total1);

let numAdd_array2 = [1, 1, 1, 2, 3, 1, 2];
let num_total2 = 0;
for (i = 0; i < numAdd_array2.length; i++){
    num_total2 += numAdd_array2[i]
}
console.log(num_total2);

let numAdd_array3 = [1, -1];
let num_total3 = 0;
for (i = 0; i < numAdd_array3.length; i++){
    num_total3 += numAdd_array3[i]
}
console.log(num_total3);
/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
let numAvg_array1 = [1, 2, 3, 4, 5];
let numAvg_total1 = 0;
for (i = 0; i < numAvg_array1.length; i++){
    numAvg_total1 += numAvg_array1[i];
   //console.log(numAvg_total); //troubleshooting
}
let numAvg1 = numAvg_total1 / numAvg_array1.length;
console.log(numAvg1);

let numAvg_array2 = [1, 1, 1, 2, 3, 1, 2];
let numAvg_total2 = 0;
for (i = 0; i < numAvg_array2.length; i++){
    numAvg_total2 += numAvg_array2[i];
   //console.log(numAvg_total); //troubleshooting
}
let numAvg2 = numAvg_total2 / numAvg_array2.length;
console.log(numAvg2);

let numAvg_array3 = [1, -1];
let numAvg_total3 = 0;
for (i = 0; i < numAvg_array3.length; i++){
    numAvg_total3 += numAvg_array3[i];
   //console.log(numAvg_total); //troubleshooting
}
let numAvg3 = numAvg_total3 / numAvg_array3.length;
console.log(numAvg3);