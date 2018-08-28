const imaString = "hi";
const age = 99;
const favoriteColor = "blue";
const favoriteAnimal = 'bear';
const pie = 'peach';
const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, 'aint');

if(age < 21) {
    console.log('stay away');
} 
else {
    console.log('partayyyyyyyyyy');
}

if(age >= 21) {
    console.log('call an uber');
}
else {
    console.log('bring your fake id next time');
}

if(favoriteAnimal === 'bear' && favoriteColor === 'blue') {
    console.log('welcome to the club');
}
else if(favoriteAnimal === 'cat' && favoriteColor === 'red') {
    console.log('$500 to join the club');
}
else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

console.log('pie length: ', pie.length);
console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat'));
console.log('index of pea', pie.indexOf('pea'));

console.log('newQuote', newQuote);