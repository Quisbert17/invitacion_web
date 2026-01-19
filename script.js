// ===================== CONFIRMAR ASISTENCIA =====================
function confirmar() {
    // Creamos un pop-up elegante
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 1000;

    const modal = document.createElement('div');
    modal.style.background = 'rgba(255,255,255,0.1)';
    modal.style.backdropFilter = 'blur(10px)';
    modal.style.padding = '30px';
    modal.style.borderRadius = '20px';
    modal.style.textAlign = 'center';
    modal.style.color = '#FFD700';
    modal.style.fontFamily = "'Playfair Display', serif";
    modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    modal.innerHTML = `
        <h2>🎉 Confirmado! 🎉</h2>
        <p>¡Gracias por confirmar tu asistencia!</p>
        <button id="cerrarBtn" style="
            margin-top:20px;
            padding:10px 20px;
            border-radius:50px;
            border:none;
            cursor:pointer;
            font-weight:bold;
            background: linear-gradient(135deg,#FFD700,#FFB800);
            color:#043915;
            font-size:1rem;
            transition: transform 0.3s ease;
        ">Cerrar</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Confetti simple
    lanzarConfetti();

    // Cerrar modal
    document.getElementById('cerrarBtn').addEventListener('click', () => {
        overlay.remove();
    });
}

// ===================== CONFETTI =====================
function lanzarConfetti() {
    const confettiCount = 100;
    for(let i=0;i<confettiCount;i++){
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
        confetti.style.top = '-10px';
        confetti.style.left = `${Math.random()*100}vw`;
        confetti.style.opacity = 0.9;
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = 999;
        document.body.appendChild(confetti);

        // Animación caída
        confetti.animate([
            { transform: `translateY(0px) rotate(0deg)` },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random()*720}deg)` }
        ], {
            duration: 3000 + Math.random()*2000,
            iterations: 1,
            easing: 'ease-out'
        });

        setTimeout(() => confetti.remove(), 5000);
    }
}

// ===================== ANIMACIÓN BOTONES =====================
document.querySelectorAll('.map-btn, .card button').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.08)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});
