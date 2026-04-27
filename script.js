// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Wedding Date (Dummy: 1 year from now)
const weddingDate = new Date("April 27, 2026 08:00:00").getTime();

// Countdown Timer Logic
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "HARI BAHAGIA TELAH TIBA";
    }
}, 1000);

// Open Invitation Logic
const openBtn = document.getElementById('openInvitation');
const mainContent = document.getElementById('mainContent');
const hero = document.getElementById('hero');
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');

openBtn.addEventListener('click', function() {
    // Show main content
    mainContent.classList.remove('hidden');
    
    // Smooth scroll to opening section
    document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
    
    // Play music
    bgMusic.play();
    
    // Refresh AOS
    setTimeout(() => {
        AOS.refresh();
    }, 500);
});

// Music Control Logic
let isPlaying = false;
musicControl.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.innerHTML = '<i class="fas fa-compact-disc fa-spin"></i>';
    } else {
        bgMusic.pause();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
});

// RSVP Form Logic
const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(rsvpForm);
    const name = formData.get('name');
    
    alert(`Terima kasih ${name}, konfirmasi kehadiran Anda telah kami terima.`);
    rsvpForm.reset();
});

// Copy to Clipboard Logic
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}
