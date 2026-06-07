const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '42d6dd4ef6aaafcb8c8139016438a3d4';

$(document).ready(function () {
	weatherFn('Blantyre');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	// temperature rounded off to the nearest whole number
	$('#temperature').
		html(`${Math.round(data.main.temp)}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#humidity').
		html(`Humidity: ${data.main.humidity}%`);
	$('#visibility').
		html(`Visibility: ${data.visibility / 1000} km`);
	$('#pressure').
		html(`Pressure: ${data.main.pressure} hPa`);
	$('#weather-icon').
		attr('src',
			`...`);
	$('#weather-info').fadeIn();
}