

let x = (function(){
	//private variable
	let message = 'this is an immediately invoked function expression';
	return { 
		// public method
		greetings: function(firstName){
			// using closure
			return (message + ' ' + firstName + '!');;
		} 
	}
})();

console.log(x.greetings('Aaron'));
