/*Loops or 'iterators' are used to perform operations on lists. Say we have an array of people and we want to `console.log` all their names. We could do it two ways:
The not so great way:
*/
var people = ["Alexander", "George", "Eliza", "Angelica"];
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[3]);

//Or we could use a `for` loop, which is waaaaaay better:
var people = ["Alexander", "George", "Eliza", "Angelica"];

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//We could even reverse the order in which we log starting from the end of the array:
var people = ["Alexander", "George", "Eliza", "Angelica"];

for (var i = people.length - 1; i >= 0; i--) {
  console.log(people[i]);
}
