const delayExtra = 3000; // delay between sections
const delayLong = 1700; // delay between sections
const delayLonger = 2000; // delay between sections
const delayShort = 1000; // delay between sections

let scrollDelay = false; // initial state, i.e., no scroll delay

let timeoutId;
let animationIsFinished = false;

// fullpage.js initialization
new fullpage("#fullpage", {
	/* responsiveWidth: 766, */
	scrollingSpeed: 700,
	scrollBar: true, // disabling βscrollBar: trueβΒ will allow using scrollable section
	fitToSection: false,

	// onLeave - perfoming a function when leaving a section, i.e. going from one section to another
	onLeave: function (origin, destination, direction, trigger) {
		console.log("origin: " + origin.index); // debugging; check the console for the section

		let curTime = new Date().getTime();

		var origin = this;

		//leave animation: 0β1 ππ»
		if (origin.index == 0 && direction == "down") {
			console.log("s-0-down β 0β1 β π Hero β’ SoV ");
			document.querySelector(".s-0-down").click();
			/* document.querySelector('.s-1-down-test').click(); */

			clearTimeout(timeoutId);

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayLong);
			return scrollDelay;
		}

		//leave animation: 1β0 ππ»
		else if (origin.index == 1 && direction == "up") {
			console.log("s-1-up β 1β0 β π Intro (sticky) β’ SoV (p1/2)");
			document.querySelector(".s-1-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 1β2 ππ»
		else if (origin.index == 1 && direction == "down") {
			console.log("s-1-down βΒ 1β2 β π Intro (sticky) β’ Switch (p1β2)");
			document.querySelector(".s-1-down").click();
		}

		//leave animation: 2β1 ππ»
		else if (origin.index == 2 && direction == "up") {
			console.log("s-2-up β 2β1 βΒ π Intro (sticky) β’ Switch (p2β1)");
			document.querySelector(".s-2-up").click();
		}

		//leave animation: 2β3
		else if (origin.index == 2 && direction == "down") {
			console.log("s-2-down β 2β3Β βΒ π Intro (sticky) β’ SoV (p1/2)");
			document.querySelector(".s-2-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 3β2
		else if (origin.index == 3 && direction == "up") {
			console.log("s-3-up βΒ 3β2 β π Transition β’ SoV");
			document.querySelector(".s-3-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 3β4
		else if (origin.index == 3 && direction == "down") {
			console.log("s-3-down β 3β4 βΒ π Transition β’ Lottie SoV");
			document.querySelector(".s-3-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayExtra);
			return scrollDelay;
		}

		//leave animation: 4β3
		else if (origin.index == 4 && direction == "up") {
			console.log("s-4-up β 4β3 β π¦ Lottie β’ Map (p1) SoV");
			document.querySelector(".s-4-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 4β5
		else if (origin.index == 4 && direction == "down") {
			console.log("s-4-down");
			document.querySelector(".s-4-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 5β4
		else if (origin.index == 5 && direction == "up") {
			console.log("s-5-up");
			document.querySelector(".s-5-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 5β6
		else if (origin.index == 5 && direction == "down") {
			console.log("s-5-down");
			document.querySelector(".s-5-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 6β5
		else if (origin.index == 6 && direction == "up") {
			console.log("s-6-up");
			document.querySelector(".s-6-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 6β7
		else if (origin.index == 6 && direction == "down") {
			console.log("s-6-down");
			document.querySelector(".s-6-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 7β6
		else if (origin.index == 7 && direction == "up") {
			console.log("s-7-up");
			document.querySelector(".s-7-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 7β8
		else if (origin.index == 7 && direction == "down") {
			console.log("s-7-down");
			document.querySelector(".s-7-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 8β7
		else if (origin.index == 8 && direction == "up") {
			console.log("s-8-up");
			document.querySelector(".s-8-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 8β9
		else if (origin.index == 8 && direction == "down") {
			console.log("s-8-down");
			document.querySelector(".s-8-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 9β8
		else if (origin.index == 9 && direction == "up") {
			console.log("s-9-up");
			document.querySelector(".s-9-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 9β10
		else if (origin.index == 9 && direction == "down") {
			console.log("s-9-down");
			document.querySelector(".s-9-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 10β9
		else if (origin.index == 10 && direction == "up") {
			console.log("s-10-up");
			document.querySelector(".s-10-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}
	},

	// afterLoad β perfoming a function when the section is centered or full viewport height
	afterLoad: function (origin, destination, direction, trigger) {
		console.log("origin: " + origin.index); // debugging; check the console for the section

		var origin = this;

		//load animation: 0β1 ππ»
		if (origin.index == 0 && direction == "down") {
			console.log("s-1-center β 0β1 β π Intro (sticky) β’ SiV (p1)");
			document.querySelector(".s-1-center").click();
		}

		//load animation: 1β0 ππ»
		if (origin.index == 1 && direction == "up") {
			console.log("s-0-center β 1β0 β π Hero β’ SiV");
			document.querySelector(".s-0-center").click();
		}

		//load animation: 2β3
		if (origin.index == 2 && direction == "down") {
			console.log("s-3-center-up β 2β3 β π Transition β’ SiV");
			document.querySelector(".s-3-center-up").click();
		}

		//load animation: 3β2 ππ»
		if (origin.index == 3 && direction == "up") {
			console.log("s-2-center β 3β2 β π Intro (sticky) β’ SiV (p2)");
			document.querySelector(".s-2-center").click();
		}

		//load animation: 3β4
		if (origin.index == 3 && direction == "down") {
			console.log("s-4-center-up β 3β4 β π¦ Lottie β’ Map (p1) SiV");
			document.querySelector(".s-4-center-up").click();
		}

		//load animation: 4β3
		if (origin.index == 4 && direction == "up") {
			console.log("s-3-center-down β 4β3 β π Transition β’ Lottie SiV");
			document.querySelector(".s-3-center-down").click();
		}

		//load animation: 4β5
		if (origin.index == 4 && direction == "down") {
			console.log("s-5-center β 4β5 β");
			document.querySelector(".s-5-center").click();
		}

		//load animation: 5β4
		if (origin.index == 5 && direction == "up") {
			console.log("s-4-center-down β 5β4 β");
			document.querySelector(".s-4-center-down").click();
		}

		//load animation: 5β6
		if (origin.index == 5 && direction == "down") {
			console.log("s-6-center β 5β6 β");
			document.querySelector(".s-5-center").click();
		}

		//load animation: 6β5
		if (origin.index == 6 && direction == "up") {
			console.log("s-5-center β 6β5 β");
			document.querySelector(".s-5-center").click();
		}

		//load animation: 6β7
		if (origin.index == 6 && direction == "down") {
			console.log("s-7-center β 6β7 β");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 7β6
		if (origin.index == 7 && direction == "up") {
			console.log("s-6-center β 7β6 β");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 7β8
		if (origin.index == 7 && direction == "down") {
			console.log("s-8-center β 7β8");
			document.querySelector(".s-8-center").click();
		}

		//load animation: 8β7
		if (origin.index == 8 && direction == "up") {
			console.log("s-7-center β 8β7 β");
			document.querySelector(".s-7-center").click();
		}

		//load animation: 8β9
		if (origin.index == 8 && direction == "down") {
			console.log("s-9-center β 8β9 β");
			document.querySelector(".s-9-center").click();
		}

		//load animation: 9β8
		if (origin.index == 9 && direction == "up") {
			console.log("s-8-center β 9β8 β");
			document.querySelector(".s-8-center").click();
		}

		//load animation: 9β10
		if (origin.index == 9 && direction == "down") {
			console.log("s-10-center β 9β10 β");
			document.querySelector(".s-10-center").click();
		}

		//load animation: 10β9
		if (origin.index == 10 && direction == "up") {
			console.log("s-9-center β 10β9 β");
			document.querySelector(".s-9-center").click();
		}
	}
});
