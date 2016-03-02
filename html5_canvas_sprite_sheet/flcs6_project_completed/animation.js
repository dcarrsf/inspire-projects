(function(window) {
walkcycle = function() {
	this.initialize();
}
walkcycle._SpriteSheet = new SpriteSheet({images: ["animation.png"], frames: [[0,0,197,263,0,108.5,123.5],[0,0,197,263,0,108.5,123.5],[197,0,216,248,0,101.5,113.5],[197,0,216,248,0,101.5,113.5],[413,0,161,258,0,84.5,127.5],[413,0,161,258,0,84.5,127.5],[574,0,195,268,0,104.5,137.5],[574,0,195,268,0,104.5,137.5],[0,268,216,263,0,105.5,125.5],[0,268,216,263,0,105.5,125.5],[216,268,212,254,0,117.5,112.5],[216,268,212,254,0,117.5,112.5],[428,268,172,264,0,80.5,126.5],[428,268,172,264,0,80.5,126.5],[600,268,206,274,0,107.5,136.5],[600,268,206,274,0,107.5,136.5]]});
var walkcycle_p = walkcycle.prototype = new BitmapAnimation();
walkcycle_p.BitmapAnimation_initialize = walkcycle_p.initialize;
walkcycle_p.initialize = function() {
	this.BitmapAnimation_initialize(walkcycle._SpriteSheet);
	this.paused = false;
}
window.walkcycle = walkcycle;
}(window));

