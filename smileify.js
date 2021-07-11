(() => {
	if (document.cookie.includes("smileify-today=no")) {
		return;
	}

	let makeButton = (text, primary, onClick) => {
		let button = document.createElement("span")
		button.classList.add("a-button", "a-button-base")
		if (primary) {
			button.classList.add("a-button-primary")
		}

		let buttonInner = document.createElement("span")
		buttonInner.classList.add("a-button-inner")

		let buttonText = document.createElement("a")
		buttonText.classList.add("a-button-text")
		buttonText.addEventListener("click", onClick)
		buttonText.innerText = text

		buttonInner.append(buttonText)
		button.append(buttonInner)

		return button;
	}

	let goToSmile = () => {
		let currentLocation = document.location.href
		document.location.href = currentLocation.replace("www", "smile")
	}

	let ignoreSmile = () => {
		document.cookie = "smileify-today=no";
	}

	let smile = document.createElement("div")
	smile.classList.add("smileify")

	let dialog = document.createElement("div")
	dialog.classList.add("smile-dialog")
	smile.append(dialog)

	let title = document.createElement("h1")
	title.classList.add("smile-dialog-title")
	title.textContent = "Go to smile?"
	dialog.append(title)

	let message = document.createElement("div")
	message.classList.add("smile-dialog-message")
	message.textContent = "Shopping at smile.amazon.com instead of amazon.com donates money to charity."
	dialog.append(message)

	let buttons = document.createElement("div")
	buttons.classList.add("smile-buttons")
	let smileButton = makeButton("Go to smile", true, goToSmile)
	let closeButton = makeButton("Next time", false, ignoreSmile)
	buttons.append(smileButton, closeButton)

	dialog.append(buttons)

	document.body.prepend(smile)
})();