var flkty;

window.onload = function() {
	flkty = new Flickity(".carousel", {
		initialIndex: 0,
		accessibility: false
	});

	flkty.on('cellSelect', function( event ) {
		$("video").each(function () {
      this.pause();
		});
		$(flkty.selectedElement).find("video").each(function () {
      this.play();
		});
	});
};

$(document).keydown(function(e) {
	var LEFT = 37;
	var RIGHT = 39;
	if (e.keyCode === LEFT) {
		flkty.previous();
	}
	else if (e.keyCode === RIGHT) {
		flkty.next();
	}
});

// window.addEventListener("click", function() {
// 	flkty.next();
// });
// window.addEventListener("contextmenu", function() {
// 	flkty.previous();
// });
