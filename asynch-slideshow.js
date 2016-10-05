var slideshow = {
	photoList: ["Munich_day_1", "Salzburg_day_2", "Neuschwannstein_day_3", "Prague_day_4"],
	currentPhotoIndex: 0,
	playInterval: "",
	play: function () {
		var self = this;
		playInterval = setInterval(function () {
			if (self.currentPhotoIndex < self.photoList.length) {
				console.log(self.photoList[self.currentPhotoIndex]);
				self.currentPhotoIndex += 1;
			} else {
				console.log("End of slideshow");
				self.pause();
			}
		}, 1000);
	},
	pause: function () {
		clearInterval(playInterval);
	}
}


slideshow.play();