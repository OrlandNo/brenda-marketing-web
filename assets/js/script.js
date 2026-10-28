document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. AÑO AUTOMÁTICO PARA EL FOOTER
    // =========================================================
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // =========================================================
    // 2. CONTROL DEL MENÚ MÓVIL (DESPLEGABLE / HAMBURGUESA)
    // =========================================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileToggle && mobileMenu) {
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

        // Cierra el menú al hacer clic en un enlace interno
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            });
        });

        // Cierra el menú si se hace clic fuera de él
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-3-line';
            }
        });
    }

    // =========================================================
    // 3. TEMPORIZADOR REGRESIVO (OFERTA ESPECIAL)
    // =========================================================
    startOfferCountdown();

    // =========================================================
    // 4. PANTALLA DE CARGA (SPLASH SCREEN - 2 SEGUNDOS)
    // =========================================================
    const loaderScreen = document.getElementById('loader-screen');
    if (loaderScreen) {
        setTimeout(() => {
            loaderScreen.classList.add('hidden');
        }, 2000);
    }

    // =========================================================
    // 5. CONTROL DEL POP-UP EMERGENTE DE HALLOWEEN
    // =========================================================
    const halloweenOverlay = document.getElementById('halloween-popup-overlay');
    const closeHalloweenBtn = document.getElementById('closeHalloweenPopup');

    if (halloweenOverlay && closeHalloweenBtn) {
        // Despliega automáticamente tras 3 segundos
        setTimeout(() => {
            halloweenOverlay.classList.add('active');
        }, 3000);

        // Botón de cerrar (X)
        closeHalloweenBtn.addEventListener('click', () => {
            halloweenOverlay.classList.remove('active');
        });

        // Cierra al hacer clic en el fondo oscuro
        halloweenOverlay.addEventListener('click', (e) => {
            if (e.target === halloweenOverlay) {
                halloweenOverlay.classList.remove('active');
            }
        });
    }

});

// Función para la cuenta regresiva del temporizador
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


document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // LÓGICA DEL CONTADOR REGRESIVO A HALLOWEEN
    // =========================================================
    function startTopBarCountdown() {
        const daysEl = document.getElementById('c-days');
        const hoursEl = document.getElementById('c-hours');
        const minutesEl = document.getElementById('c-minutes');
        const secondsEl = document.getElementById('c-seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        // Fecha objetivo: 31 de Octubre a las 23:59:59
        const currentYear = new Date().getFullYear();
        let halloweenTarget = new Date(currentYear, 9, 31, 23, 59, 59).getTime();

        const nowCheck = new Date().getTime();
        // Si la fecha objetivo de este año ya pasó, calcula para el próximo año
        if (nowCheck > halloweenTarget) {
            halloweenTarget = new Date(currentYear + 1, 9, 31, 23, 59, 59).getTime();
        }

        function updateCountdown() {
            const now = new Date().getTime();
            const diff = halloweenTarget - now;

            if (diff <= 0) {
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    startTopBarCountdown();

});