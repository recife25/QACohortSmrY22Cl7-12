// Due date: Fri (Jul 15) eod
//Felipe J Ruiz (Phil)
//conditional - if else ... switch...


/**
 *Q1 create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */
let studentScore = 40;
let maxScore = 50;
let studentPercentage = (studentScore / maxScore) * 100;
console.log('Q1 - If & Else if & Else conditions');
if (studentPercentage >= 91 && studentPercentage <= 100) {
    console.log('A');
}
else if(studentPercentage >= 81 && studentPercentage <= 90.99){
    console.log('B');
}
else if(studentPercentage >= 71 && studentPercentage <= 80.99){
    console.log('C');
}
else if(studentPercentage >= 61 && studentPercentage <= 70.99){
    console.log('D');
}
else if(studentPercentage >= 51 && studentPercentage <= 60.99){
    console.log('E');
}
else if(studentPercentage >=51) {
    console.log('F');
}
else {
    console.log('invalid student score')
}    
/**
 * Q2 Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */

myNumber = 15;
console.log('Q2 - (%) remaider operator mod');
    if( (myNumber%5) === 0 ) {
        console.log( 'divisible by 5' );
    } else if ((myNumber % 3) === 0) {
        console.log( 'divisible by 3' );
    } else if( (myNumber%3) === 0 && (myNumber%5) === 0 ) {
        console.log( 'divisible by 5 and 3' );
    }
    else {
        console.log( myNumber );
    }


/**
 * Q3 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

let planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
console.log(`Q3 - unshift method to add first index of array : ${planets}`);
if (planets.includes('Earth')) {
    console.log(planets.indexOf('Earth'));
}
    else {
        planets.unshift('Earth');
}
console.log(planets);

/**
 * Q4 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */
const sports3 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
if (sports3[2].toUpperCase !== 'BASKETBALL' && sports3.includes('BASKETBALL'))
{
    console.log('BASKETBALL is mentioned in the sports array');
}
else if (sports3[2].toUpperCase === 'BASKETBALL') {
    console.log('BASKETBALL is present at index-2')
}
else {
    sports3[2].push('BASKETBALL')
    console.log(sports3)
}





