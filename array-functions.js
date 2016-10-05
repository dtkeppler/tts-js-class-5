var students = [
    {name: 'Cam Newton', average: 90},
    {name: 'Ted Ginn', average: 58},
    {name: 'Greg Olsen', average: 82}
];


// Filter --------------------------------

var studentAces = students.filter(function (ace) {
	return ace.average >= 80;
});

console.log(studentAces);


// Find --------------------------------

var studentBums = students.find(function (bum) {
	return bum.average < 60;
})

console.log(studentBums);


// Map ---------------------------------

var studentGreetings = students.map(function (student) {
	return "Hello, my name is " + student.name + " and I got a " + student.average + " average!"
})

console.log(studentGreetings);


// Reduce -----------------------------

var avgTotal = students.reduce(function (prev, current) {
	return prev + current.average;
}, 0);

console.log(avgTotal);