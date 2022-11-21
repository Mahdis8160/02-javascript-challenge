
// Assignment Code

function generatePasswordOptions() {
	var input = prompt(
		"How many characters would you like your password to contain?"
	);
	var length = parseInt(input);

	if (Number.isNaN(length)) {
		alert("Password length must be provided as a number");
		return null;
	}

	if (length < 8) {
		alert("Password length must be at least 8 characters");
		return null;
	}

	if (length > 128) {
		alert("Password length must less than 129 characters");
		return null;
	}

	var hasspecChars = confirm(
		"Click OK to confirm including special characters."
	);

	var hasNumericCharacters = confirm(
		"Click OK to confirm including numeric characters."
	);

	var hasLowerCasedCharacters = confirm(
		"Click OK to confirm including lowercase characters."
	);

	var hasUpperCasedCharacters = confirm(
		"Click OK to confirm including uppercase characters."
	);

	if (
		hasspecChars === false &&
		hasNumericCharacters === false &&
		hasLowerCasedCharacters === false &&
		hasUpperCasedCharacters === false
	) {
		alert("Must select at least one character type");
		return null;
	}

	var passwordOptions = {
		length: length,
		hasspecChars: hasspecChars,
		hasNumericCharacters: hasNumericCharacters,
		hasLowerCasedCharacters: hasLowerCasedCharacters,
		hasUpperCasedCharacters: hasUpperCasedCharacters,
	};

	return passwordOptions;
}

function generatePassword() {
	var mustChars = [];
	var availableChars = [];
	var options = generatePasswordOptions();
	var result = [];

	if (options === null) {
		return null;
	}

	if (options.hasspecChars) {
		var specChars = [
			"!",
			"@",
			"#",
			"$",
			"%",
			"^",
			"&",
			"*",
			"(",
			")",
			"_",
			"-",
			"+",
			"=",
			"{",
			"}",
		];
		availableChars = availableChars.concat(specChars);
		var randIndex = Math.floor(Math.random() * specChars.length);
		var randElement = specChars[randIndex];
		mustChars.push(randElement);
	}

	if (options.hasNumericCharacters) {
		var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		availableChars = availableChars.concat(numericCharacters);
		var randIndex = Math.floor(Math.random() * 10);
		mustChars.push(randIndex);
	}

	if (options.hasLowerCasedCharacters) {
		// get list of all lowercase letters
		var lowerCasedCharacters = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		];
		availableChars = availableChars.concat(lowerCasedCharacters);
		var randIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
		var randElement = lowerCasedCharacters[randIndex];
		mustChars.push(randElement);
	}

	if (options.hasUpperCasedCharacters) {
		var upperCasedCharacters = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		];
		availableChars = availableChars.concat(upperCasedCharacters);
		var randIndex = Math.floor(Math.random() * upperCasedCharacters.length);
		var randElement = upperCasedCharacters[randIndex];
		mustChars.push(randElement);
	}

	for (var i = 0; i < options.length; i++) {
		var randIndex = Math.floor(Math.random() * availableChars.length);
		var randElement = availableChars[randIndex];
		var possibleCharacter = randElement;

		result.push(possibleCharacter);
	}

	for (var i = 0; i < mustChars.length; i++) {
		result[i] = mustChars[i];
	}

	return result.join("");
}

function displayPassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#passwordText");
	passwordText.value = password;
}

document
	.querySelector("#generatedPassword")
	.addEventListener("click", displayPassword);
