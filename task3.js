function showInfo() {
    const infoDiv = document.getElementById('info');
    const width = window.innerWidth;
    const height = window.innerHeight;

    navigator.geolocation.getCurrentPosition(
        (position) => {
            infoDiv.innerHTML = `Ширина: ${width}, Высота: ${height}<br>Координаты: ${position.coords.latitude}, ${position.coords.longitude}`;
        },
        () => {
            infoDiv.innerHTML = `Ширина: ${width}, Высота: ${height}<br>Информация о местоположении недоступна`;
        }
    );
}