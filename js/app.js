// =====================================
// PANTHEOS V10 APP.JS
// =====================================

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search System
const searchInput = document.querySelector(
    '.search-container input'
);

if (searchInput) {

    searchInput.addEventListener(
        'keyup',
        function () {

            const filter =
                this.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    '.game-card, .service-card'
                );

            cards.forEach(card => {

                const text =
                    card.innerText.toLowerCase();

                if (
                    text.includes(filter)
                ) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }

            });

        }
    );

}

// Fade In Animation
const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            'show'
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );

document
.querySelectorAll(
'.game-card,.service-card,.trust-card,.why-card,.community-card,.faq-item'
)
.forEach(el => {
    observer.observe(el);
});

// Console Branding
console.log(
    "Pantheos Global Store V10 Loaded"
);
