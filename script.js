// Membuat Ucapan Doa Muncul Seperti Diketik
const prayerText = "/n Semoga panjang umur, sehat selalu.
    /n makin sayang sama aku";
let prayerIndex = 0;

function typePrayer() {
    if (prayerIndex < prayerText.length) {
        document.getElementById('prayer-message').innerHTML += prayerText.charAt(prayerIndex);
        prayerIndex++;
        setTimeout(typePrayer, 100);
    }
}

// Fungsi Bunga Mekar
const flower = document.getElementById('flower');
function bloomFlower() {
    flower.classList.add('flower-bloom');
}

// Video Play Event
const video = document.getElementById('birthday-video');
video.addEventListener('ended', function() {
    // Setelah video selesai diputar, buat bunga mekar
    bloomFlower();
    // Mulai ucapan doa
    typePrayer();

    // Setelah video selesai, pindahkan video ke folder foto
    document.getElementById('photos').appendChild(video);
});

// Menampilkan Foto Secara Bergiliran
let photoIndex = 0;
const photos = document.getElementsByClassName('gallery-photo');
function showNextPhoto() {
    photos[photoIndex].style.display = 'none';
    photoIndex = (photoIndex + 1) % photos.length;
    photos[photoIndex].style.display = 'block';
}
setInterval(showNextPhoto, 3000); // Ganti foto setiap 3 detik
