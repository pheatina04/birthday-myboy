const birthdayVideo = document.getElementById('birthdayVideo');
const flower = document.getElementById('flower');
const prayers = document.getElementById('prayers');
const musicSelect = document.getElementById('musicSelect');
const audioPlayer = document.getElementById('audioPlayer');
const photosContainer = document.getElementById('photos');
const messageInput = document.getElementById('messageInput');

birthdayVideo.onended = function() {
    flower.style.display = 'block';
    setTimeout(() => {
        flower.style.transition = 'all 2s';
        flower.style.opacity = '1';
    }, 500);
    displayPrayers();
    startPhotoSlideshow();
};

function displayPrayers() {
    const prayersText = "Semoga hari ini penuh kebahagiaan dan cinta!";
    let index = 0;
    prayers.innerHTML = '';
    const interval = setInterval(() => {
        if (index < prayersText.length) {
            prayers.innerHTML += prayersText[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

musicSelect.onchange = function() {
    audioPlayer.src = musicSelect.value;
    audioPlayer.play();
};

let photoIndex = 0;
function startPhotoSlideshow() {
    const photos = [
        'images/photo1.jpeg',
        'images/photo2.jpeg',
        'images/photo3.jpeg',
        'images/photo4.jpeg',
        'images/photo5.jpeg'
    ];
    
    setInterval(() => {
        if (photosContainer.children.length > 0) {
            photosContainer.removeChild(photosContainer.children[0]);
        }
        
        const img = document.createElement('img');
        img.src = photos[photoIndex];
        photosContainer.appendChild(img);
        
        photoIndex = (photoIndex + 1) % photos.length;
    }, 2000);
}
