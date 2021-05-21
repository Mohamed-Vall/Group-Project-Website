class UI {
	constructor() {
		this.uiContainer = document.getElementById("content");
		this.city;
		this.defaultCity = "London";
	}
	populateUI(data) {
		var currentTempCelcius = Math.round(data.main.temp-273.15);
		var minTempCelcius = Math.round(data.main.temp_min-273.15);
		var maxTempCelcius = Math.round(data.main.temp_max-273.15);
		var weatherDescription = (data.weather[0].description).toUpperCase();
		const li = document.createElement("li");
		const markup = 
			`<div class="ui-design">
				<h><h2>${data.name}</h2>
				Currently ${currentTempCelcius} °C<br/>
				High of ${minTempCelcius} °C<br/>
				Low of ${maxTempCelcius} °C<br/>
				${weatherDescription}</h>
			</div>`;
		li.innerHTML = markup;
		this.uiContainer.appendChild(li);
	}

	saveToLS(data) {
		localStorage.setItem("city", JSON.stringify(data));
	}

	getFromLS() {
		if (localStorage.getItem("city" == null))
			return this.defaultCity;
		else
			this.city = JSON.parse(localStorage.getItem("city"));
		return this.city;
	}
	
	clearLS() {
		localStorage.clear();
	}
}