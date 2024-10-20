function getTimezone() {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const apiKey = '32bcd4a6e4b548968e7afcdb682ac679';
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${long}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('timezoneInfo').innerHTML = `Временная зона: ${data.timezone}<br>Местное время: ${data.date_time_txt}`;
            })
            .catch(error => console.error('Ошибка:', error));
    });
}