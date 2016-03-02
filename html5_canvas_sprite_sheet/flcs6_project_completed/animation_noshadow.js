(function(window) {
walkcycle = function() {
	this.initialize();
}
walkcycle._SpriteSheet = new SpriteSheet({images: ["animation_noshadow.png"], frames: [[0,0,171,263,0,108.5,123.5],[0,0,171,263,0,108.5,123.5],[171,0,171,248,0,101.5,113.5],[171,0,171,248,0,101.5,113.5],[342,0,113,257,0,84.5,127.5],[342,0,113,257,0,84.5,127.5],[455,0,162,267,0,104.5,137.5],[455,0,162,267,0,104.5,137.5],[617,0,169,263,0,105.5,125.5],[617,0,169,263,0,105.5,125.5],[0,267,174,254,0,117.5,112.5],[0,267,174,254,0,117.5,112.5],[174,267,113,264,0,80.5,126.5],[174,267,113,264,0,80.5,126.5],[287,267,165,274,0,107.5,136.5],[287,267,165,274,0,107.5,136.5]]});
var walkcycle_p = walkcycle.prototype = new BitmapAnimation();
walkcycle_p.BitmapAnimation_initialize = walkcycle_p.initialize;
walkcycle_p.initialize = function() {
	this.BitmapAnimation_initialize(walkcycle._SpriteSheet);
	this.paused = false;
}
window.walkcycle = walkcycle;
}(window));

