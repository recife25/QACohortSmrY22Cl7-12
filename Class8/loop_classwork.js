const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * Print values present on even-index
 * 
 * eg: 
 * Football
 * BASKETBALL
 * Rugby
 */

// console.log(sports[0]);
// console.log(sports[2]);
// console.log(sports[4]);
 
// for (let i = 0; i <= sports.lenght - 1; count++) 
// {
//     if (counter % 2 == 0) {
//         console.log(sports[counter]);
// }
// }

/**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */

// let statement = 'have a great day';
// let abbr = ' ';
// let split_result = statement.toUpperCase().split(' ');
// for (let i = 0; i <= split_result.length - 1; i++)
// {
//     abbr = abbr + split_result[i].substring(0, 1);

// }
//console.log(abbr);

const sports1 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
let sports1_r = sports1.reverse();
console.log(sports1_r);
for (let i = 0; i <= sports1_r.length - 1; i++) 
{
    console.log(`${sports1_r[i]}`);
}


