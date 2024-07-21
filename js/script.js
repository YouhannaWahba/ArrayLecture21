//String Method
// var x = "Hello World";

// console.log(x);
// console.log(x.length); //returns number of characters in string
// console.log(x.indexOf("W")); //returns positon of character
// console.log(x.indexOf("l")); //returns 1st occurence of character
// console.log(x.indexOf("hi")); //returns start position of word
// console.log(x.indexOf("world")); //returns -1 if not found
// console.log(x.indexOf("World")); //Case Sensitive
// console.log(x.indexOf("l", 5)); //skips first 5 characters, starts from 1, skips in search only, but index from start
// console.log(x.lastIndexOf("l")); //returns last occurence of char
// console.log(x.lastIndexOf("l", 4)); //skips last 4 characters
// console.log(x.search("l")); //same as indexof, but with no skip
// console.log(x.slice(6, 11)); //(inclusive,exclusive)
// console.log(x.substring(6, 11)); //same as slice but +ve index only
// console.log(x.substr(6, 5));
// console.log(x.toUpperCase()); //converts string to uppercase
// console.log(x.toLowerCase()); //converts string to lowercase
// console.log(x.trim()); //reomves spaces at start and end of text
// console.log(x.replace("World", "Yo7")); //Replacment . 1st occurence
// console.log(/world/i), "Yo&"; //case insensitive RegEx
// console.log(/world/gi), "Yo&"; //case insensitive RegEx , global to replace all occurnces
// console.log(x.charAt(5)); //returns char at certain index

function validate() {
	var user = document.getElementById("user").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;
	var result = document.getElementById("result");

	// result.style.color = "white";
	// result.style.backgroundColor = "red";
	// result.style.textAlign = "center";
	// result.style.padding = "10px";

	result.setAttribute("class", "alert alert-danger text-center p-3");
	result.style.transition = "all 1s linear";

	if (user == "" && email == "" && pass == "" && confirm == "") {
		result.innerHTML = "Enter Data In Form";
		return false;
	} else if (user.length < 5 || user.length > 15) {
		result.innerHTML = "Enter 5-15 Characters In User Name";
		return false;
	} else if (email.indexOf("@") == -1) {
		result.innerHTML = "Enter Valid Email";
		return false;
	} else if (pass.length < 8) {
		result.innerHTML = "Enter At least 8 Characters In Passowrd";
		return false;
	} else if (pass != confirm) {
		result.innerHTML = " Passwords Do Not Match";
		return false;
	} else {
		return true;
	}
}
