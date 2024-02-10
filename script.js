function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let Randomstring = "";
	for(let i=0;i<l;i++){
		let randomIndex = Math.floor(Math.random() * characters.length);
		Randomstring+= characters.charAt(randomIndex);
	}
	return Randomstring;
}

// Do not change the code below
const l = prompt("Enter a number.");
alert(makeid(l));
