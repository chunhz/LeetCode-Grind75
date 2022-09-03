var floodFill = function (image, sr, sc, color) {
	// [0,0] [0,1] [0,2]
	// [1,0] [1,1]
	// [2,0]
	const oriColor = image[sr][sc];
	if (oriColor !== color) helperFunc(image, sr, sc, color, oriColor);
	return image;
};

const helperFunc = (image, sr, sc, color, centerColor) => {
	if (image[sr][sc] === centerColor) {
		image[sr][sc] = color;
		if (sr >= 1) helperFunc(image, sr - 1, sc, color, centerColor);
		if (sc >= 1) helperFunc(image, sr, sc - 1, color, centerColor);
		if (sr + 1 < image.length)
			helperFunc(image, sr + 1, sc, color, centerColor);
		if (sc + 1 < image[0].length)
			helperFunc(image, sr, sc + 1, color, centerColor);
	}
};
//Input:
const image = [
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	],
	sr = 1,
	sc = 1,
	color = 2;
console.log(floodFill(image, sr, sc, color));
//Output: [[2,2,2],[2,2,0],[2,0,1]]