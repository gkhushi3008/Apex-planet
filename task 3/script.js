async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  const apiKey = "b46ce6a2ebccbb5226a137663c232ba7"; // Replace with your OpenWeatherMap API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  resultDiv.innerHTML = "🔄 Fetching weather...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultDiv.innerHTML = "❌ City not found. Please try again.";
    } else {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const name = data.name;
      resultDiv.innerHTML = `📍 <strong>${name}</strong><br>🌡 Temp: ${temp}°C<br>🌥 Condition: ${desc}`;
    }
  } catch (error) {
    resultDiv.innerHTML = "⚠️ Error fetching data. Please try again later.";
    console.error(error);
  }
}