document.addEventListener('DOMContentLoaded', () => {

    // ===================== CONFIRMAR ASISTENCIA =====================
    window.confirmar = function () {

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background: rgba(255,255,255,0.12);
            backdrop-filter: blur(12px);
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            color: #FF6F00;
            font-family: 'Playfair Display', serif;
            box-shadow: 0 12px 35px rgba(0,0,0,0.5);
            max-width: 320px;
            width: 90%;
        `;

        modal.innerHTML = `
            <h2 style="margin-bottom:10px;">🍛 Confirmación</h2>
            <p style="color:#fff; margin-bottom:20px;">
                Gracias por confirmar tu asistencia<br>
                a la noche de <strong>Chaufa</strong> 🇵🇪
            </p>

            <button id="whatsappBtn" style="
                margin-bottom:10px;
                padding:12px;
                width:100%;
                border-radius:50px;
                border:none;
                background: linear-gradient(135deg,#FF6F00,#FF6F00);
                color:#fff;
                font-weight:bold;
                cursor:pointer;
            ">
                Confirmar por WhatsApp
            </button>

            <button id="cerrarBtn" style="
                padding:10px;
                width:100%;
                border-radius:50px;
                border:1px solid #FF6F00;
                background: transparent;
                color:#fff;
                cursor:pointer;
            ">
                Cerrar
            </button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById('cerrarBtn').onclick = () => overlay.remove();

        document.getElementById('whatsappBtn').onclick = () => {
            const mensaje = encodeURIComponent(
                'Hola 👋 Confirmo mi asistencia a la noche de Chaufa  🍛🇵🇪'
            );
            window.open(
                'https://wa.me/59177362339?text=' + mensaje,
                '_blank'
            );
        };
    };

    // ===================== ANIMACIÓN BOTONES =====================
    document.querySelectorAll('.map-btn, .card button').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    });

});
