const sports = ['football', 'soccer', 'baseball', 'rugby'];
if (sports.includes('swimming')) {
    console.log((sports.indexOf('swimming')));
}
else {
    sports.push('swimming');
}
console.log(sports);

const sports1 = ['rugby', 'european football', 'football', 'basketball'];
if (sports1.includes('swimming')){
    console.log((sports.indexOf('swimming')));
}
else {
    sports1.unshift('swimming');
    console.log(sports1);
}