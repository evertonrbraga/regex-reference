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
