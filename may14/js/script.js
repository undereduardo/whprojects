let person1 = {
firstName :'John',
lastName : 'Wick',
age:41,
eyeColor:'brown'
};
	let person2 ={
		firstName :'Jane',
		lastName :'Doe',
		age:38,
		eyeColor:'green'
	};
	let People = function(fn, ln, a, ec){
		this.firstName =fn;
		this.lastName =ln;
		this.age = a;
		this.eyeColor = ec;
		this.greeting = function(ufn){
		return	`It's nice to meet you ${ufn} ! My name is  ${this.firstName}`;
		}
	}
	let matt = new People("matt", "higley", 21, "green");
	let chuck = new People("Proffessor", "X", 109, "red"); 
	console.log(matt);
	// People.prototype.nationality = "American" ;
console.log(matt);
console.log(matt.greeting('storm'));
console.log(chuck.greeting('nightcrawler'));