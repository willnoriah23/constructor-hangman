var letter = function letter(stuff, data){
	this.character = stuff;
	if (this.character === " ") {
		return this.character
	} else {
		if (data.indexOf(this.character) === -1) {
			this.appear = false;
		}
		else {
			this.appear = true;
		}
	}
	this.letterRender = function() {
		if (!this.appear ) {
			return "_";
		} else {return this.character}
	}
};

module.exports = {letter:letter};

// If user's guess is incorrect, leave underscore. If correct, replace underscore with letter