var together = new Date();
together.setFullYear(2020,11,1);//最后一页的时间 年,月,
together.setHours(0);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);
timeElapse(together);
setInterval(function () {
	timeElapse(together);
}, 500);