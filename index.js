// FOR HOME

let homeEl = document.getElementById("home-el")

let homeCount = 0

function homeAdd1() {
	homeCount += 1
	homeEl.textContent = homeCount
}

function homeAdd2() {
	homeCount += 2
	homeEl.textContent = homeCount
}

function homeAdd3() {
	homeCount += 3
	homeEl.textContent = homeCount
}


// FOR GUEST

let guestEl = document.getElementById("guest-el")

let guestCount = 0

function guestAdd1() {
	guestCount += 1
	guestEl.textContent = guestCount
}

function guestAdd2() {
	guestCount += 2
	guestEl.textContent = guestCount
}

function guestAdd3() {
	guestCount += 3
	guestEl.textContent = guestCount
}

// FOR NEW GAME

function reset() {
	homeCount = 0
	homeEl.textContent = homeCount

	guestCount = 0
	guestEl.textContent = guestCount
}
