const ftc = new Fetch();
const ui = new UI();
const search = document.getElementById("searchUser");
const buttonSubmit = document.getElementById("submit");
const buttonClear = document.getElementById("clear");
this.uiContainer = document.getElementById("content");
buttonSubmit.addEventListener("click", () => {
	const val = search.value;
	ftc.getData(val).then((data) => {
		ui.populateUI(data);
		ui.saveToLS(data);
	});
});

buttonClear.addEventListener("click", () => {
	uiContainer.innerHTML = "";
	console.log("data cleared.");
});

window.addEventListener("DOMContentLoaded", () => {
	const dataSaved = ui.getFromLS();
	ui.populateUI(dataSaved);
});