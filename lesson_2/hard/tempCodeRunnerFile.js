let arr = ['333', '322', '444', '876', '777', '554', '244'];

arr.forEach((item) => {
	if (item.startsWith('3') || item.startsWith('7')) {
		console.log(item);
	}
});