// Due date: Thu (July 21) eod

/**Felipe J Ruiz (Phil) - Q3 output is troublesome
 * create functions - working here
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
function Titlecase(sentence) {
    //let sentence = '';
    let strlc = sentence.toLowerCase().split(' ');
    for (let i = 0; i < strlc.length; i++) {
        strlc[i] = strlc[i].charAt(0).toUpperCase() + strlc[i].slice(1)
        Titlecase = strlc.join('')
    }
    //console.log(strlc.join(' '));
    return Titlecase;
      
}
let call_Titlecase = Titlecase('YOu lIVe ONLy ONcE');
console.log(call_Titlecase);
 
/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
function ReverseStr(sentence) {
 //let sentance = '';
 let sent_splt = sentence.split(' ');
 //console.log(sent_splt);
 let sent_rev = sent_splt.reverse().join();
 //console.log(sent_rev);
    return sent_rev;
}
let call_ReverseStr = ReverseStr('hello dear how are you doing');
console.log(call_ReverseStr);

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
function TotalNumb() {  
 let numAdd_array = [1,2,3,4,5];
 let num_total = 0;
 for (i = 0; i < numAdd_array.length; i++){
     num_total += numAdd_array[i]
     return num_total;
    } 
 //console.log(num_total);
}
let call_TotalNumb = TotalNumb();
console.log(call_TotalNumb);
/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
function avg() {
    let num_Array = [1, -1];
    let num_Total = 0;
    for (i = 0; i < num_Array.length; i++){
        num_Total += num_Array[i];
       //console.log(numAvg_total); //troubleshooting
    }
    let numAvg = num_Total / num_Array.length;
    //console.log(numAvg);   
    return numAvg;
}
let avg_arr = avg();
console.log(avg_arr);