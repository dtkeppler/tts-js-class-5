// Class Exercise #1 ++++++++++++++++++++++++++++++++++++++++++++++

var superHeroes = [
	["Batman", "Bruce Wayne"],
	["Spiderman", "Peter Parker"],
	["The Flash", "Barry Allen"]
]

var secretIdentity = superHeroes.map(function (revealArray) {
	return revealArray[0] + " is " + revealArray[1];
})

console.log(secretIdentity.join("\n"));



// Class Exercise #2 ++++++++++++++++++++++++++++++++++++++++++

var players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];


// get the first player named "Mike"

var mike = players.find(function (player) {
	return player.firstName === "Mike";
});

console.log("A player named Mike")
console.log(mike);


// get all RB's

var rb = players.filter(function (player) {
	return player.position === "RB";
});

console.log("All RB's")
console.log(rb);


// get all players' last names

var lastName = players.map(function (player) {
	return player.lastName;	
})

console.log("All players' last names");
console.log(lastName);	


// get all RB's who scored 5+ touchdowns

var rb5TD = players.filter(function (player) {
	return 	player.position === "RB" &&  player.touchdowns >= 5 ;
})

var rbNames = rb5TD.map(function (player) {
	return player.firstName + " " + player.lastName;
})

console.log("Running backs with 5+ touchdowns");
console.log(rbNames.join("\n"));


// get total number of TD's scored by RB's

var rb = players.filter(function (player) {
	return player.position === "RB";
})

var rbTotalTD = rb.reduce(function (total, add) {
	return total + add.touchdowns;
}, 0);

//67 

console.log("Total touchdowns scored by RB's");
console.log(rbTotalTD);