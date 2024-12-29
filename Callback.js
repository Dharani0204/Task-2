function example(fact, callback) {
	let myFact = "live a life, " + fact;
	callback(myFact); // 2
}

function logFact(fact) {
	console.log(fact);
}
example("create beautiful memories", logFact);
