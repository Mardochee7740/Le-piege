let progress = 0;
let sizeOui = 1;
const musique = document.getElementById('musique');

function accepterDefi() {
    musique.play();
    showScreen('step-game');
}

const btnNon = document.getElementById('btnNon');
const btnOui = document.getElementById('btnOui');

const escape = (e) => {
    e.preventDefault();
    // Téléportation aléatoire
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    
    btnNon.style.position = 'fixed';
    btnNon.style.left = x + 'px';
    btnNon.style.top = y + 'px';

    // On fait progresser l'IA factice
    progress += 5;
    if(progress <= 100) {
        document.getElementById('bar').style.width = progress + '%';
        document.getElementById('status').innerText = `ANALYSE DE SINCÉRITÉ : ${progress}%`;
    }

    // Le bouton OUI devient énorme pour bloquer l'écran
    sizeOui += 0.5;
    btnOui.style.transform = `scale(${sizeOui})`;
    
    // Si il devient trop gros, il finit par recouvrir tout le bouton non
    if(sizeOui > 8) {
        btnOui.style.width = "100vw";
        btnOui.style.height = "100vh";
        btnOui.style.position = "fixed";
        btnOui.style.top = "0";
        btnOui.style.left = "0";
    }
};

// Événements pour mobile et ordi
btnNon.addEventListener('touchstart', escape);
btnNon.addEventListener('mouseover', escape);

function perdu() {
    showScreen('step-fail');
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}