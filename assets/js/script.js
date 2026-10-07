document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            
            if (mobileMenu.classList.contains('active')) {
                icon.className = 'ri-close-line';
            } else {
                icon.className = 'ri-menu-3-line';
            }
        });
        
        // Cierra el menú al presionar fuera o al hacer click en un link
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            }
        });
    }
});


// Temporizador regresivo para la oferta especial del Servicio 8
function startOfferCountdown() {
    const hoursEl = document.getElementById('offerHours');
    const minutesEl = document.getElementById('offerMinutes');
    const secondsEl = document.getElementById('offerSeconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    // Establecer un conteo regresivo ficticio de 24 horas recurrentes
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

document.addEventListener('DOMContentLoaded', () => {
    startOfferCountdown();
});

document.addEventListener('DOMContentLoaded', () => {
    // Control del Menú Móvil
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = mobileMenu.classList.contains('active') 
                    ? 'ri-close-line' 
                    : 'ri-menu-3-line';
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            }
        });
    }
});

// Pantalla de carga de 2 segundos (Splash Screen)
const loaderScreen = document.getElementById('loader-screen');
if (loaderScreen) {
    setTimeout(() => {
        loaderScreen.classList.add('hidden');
    }, 2000); // 2000 ms = 2 segundos
}