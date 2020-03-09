function cat (){
	this.bung = []
};
cat.prototype.eat = function (muos){
	this.bung.push(muos);
	muos.die();
}
module.exports = cat;