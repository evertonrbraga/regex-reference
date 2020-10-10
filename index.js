//case sensitive example
const regex00 = /the/;
const content00 = 'the dog chased the cat';

//case sensitive example
const regex00 = /Coding/;
const content00 = "Extract the word 'Coding' from this string.";

//many words example
const regex00 = /dogs|cats|turtles|fishes/;
const content00 = 'James has many pets, like dogs, cats, turtles and fishes.';

//case insensitive using 'i' (insensitive)
const regex00 = /freecodecamp/i;
const content00 = 'freeCodeCamp';

//select the first one
const regex00 = /Repeat/;
const content00 = 'Repeat, Repeat, Repeat';

//select all of them using 'g' (global)
const regex00 = /Repeat/g;
const content00 = 'Repeat, Repeat, Repeat';

//select both of them using 'i' and 'g' (insensitive / global)
const regex00 = /twinkle/gi;
const content00 = 'Twinkle, twinkle, little star';

//select both of the words initializing with 'hu';
const regex00 = /hu./g;
const content00 = "I'll hum a song";
const content00 = 'Bear hug';

//select both of them using 'i' and 'g' (insensitive / global)
const regex00 = /.un/;
const content00 = "Let's have fun with regular expressions!";

//select both of them using 'i' and 'g' (insensitive / global)
const regex00 = /.un/;
const content00 = "Let's have fun with regular expressions!";

//select words starting with 'b' and finishing with 'g' containing any char between the brackets
const regex00 = /b[aou]g/;
const content00 = 'bug, bag';

//select all the vowels between the brackets
const regex00 = /[aeiou]/gi;
const content00 = 'James has many pets, like dogs, cats, turtles and fishes.';

//select all the letters of the alphabet
const regex00 = /[a-z]/gi;
const content00 = 'I am the complete alphabet!';

//select all the numbers
const regex00 = /[0-9]/g;
const content00 = '0123456789';

//select all '23' and '34'
const regex00 = /23|34/g;
const content00 = '122374334996';

//select everything except the defined pattern using '^' (negation)
const regex00 = /[^0-9aeiou]/gi;
const content00 = 'I am the complete alphabet! 122374334996';

//select what occurs 1+ times
const regex00 = /s+/g;
const content00 = 'Mississipi';

//select what occurs 0+ times (all the match or excluding the last char)
const regex00 = /gord*/gi;
const content00 = 'Gordon';
const content00 = 'Gorky';

//select the first 'i' until the last 'i'
const regex00 = /t[a-z]*?i/g;
const content00 = 'titanic';

//select all the text
const regex00 = /<.*>/;
const content00 = '<h1>Winter is coming</h1>';
