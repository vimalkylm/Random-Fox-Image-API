const btnGetImage = document.getElementById('btn-get-image');
const foxImage = document.getElementById('fox-image');

function getRandomFoxImage() {
    axios.get('https://randomfox.ca/floof/')
        .then(response => {
            const imageUrl = response.data.image;
            foxImage.innerHTML = `<img src="${imageUrl}" alt="Random Fox Image">`;
        })
        .catch(error => {
            console.log(error);
        });
}

btnGetImage.addEventListener('click', getRandomFoxImage);