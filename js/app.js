const apiKey = '5nyh4KPxJL3s4MeqJS15O0dUu5MuqHvbKcm82ZsR';
const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=';

async function getApod() {
    try {
        const response = await fetch(`${apiUrl}${apiKey}`);
        const data = await response.json();

        const imageElement = document.getElementById('image');
        const descriptionElement = document.getElementById('description');
        
        imageElement.src = data.url;
        descriptionElement.textContent = data.explanation;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
