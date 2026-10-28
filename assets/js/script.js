document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. CONTROL DEL MENÚ MÓVIL (DESPLEGABLE / HAMBURGUESA)
    // =========================================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileToggle && mobileMenu) {
        // Toggle abrir/cerrar menú al hacer clic en el botón de tres líneas
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            
            if (icon) {
                icon.className = mobileMenu.classList.contains('active') 
                    ? 'ri-close-line' 
                    : 'ri-menu-3-line';
            }
        });

        // Cierra el menú automáticamente al hacer clic en cualquier enlace interno
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            });
        });

        // Cierra el menú si se hace clic en cualquier parte fuera de él
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            }
        });
    }

    // =========================================================
    // 2. TEMPORIZADOR REGRESIVO FICTICIO (24 HORAS RECURRENTES)
    // =========================================================
    startOfferCountdown();

    // =========================================================
    // 3. PANTALLA DE CARGA (SPLASH SCREEN - 2 SEGUNDOS)
    // =========================================================
    const loaderScreen = document.getElementById('loader-screen');
    if (loaderScreen) {
        setTimeout(() => {
            loaderScreen.classList.add('hidden');
        }, 2000);
    }

});

// Función auxiliar para la cuenta regresiva del temporizador
function startOfferCountdown() {
    const hoursEl = document.getElementById('offerHours');
    const minutesEl = document.getElementById('offerMinutes');
    const secondsEl = document.getElementById('offerSeconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    let totalSeconds = 24 * 3600;

    setInterval(() => {
        totalSeconds--;
        if (totalSeconds < 0) totalSeconds = 24 * 3600;

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        hoursEl.textContent = String(h).padStart(2, '0');
        minutesEl.textContent = String(m).padStart(2, '0');
        secondsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
}