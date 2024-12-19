// Toggle Menu per il mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Aggiungi o rimuovi una classe per la visibilità del menu
}

// Aggiungere un evento al clic dell'icona hamburger
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

// Scorrimento fluido per le ancore interne
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filtro progetti
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block'; // Mostra il progetto
        } else {
            project.style.display = 'none'; // Nascondi il progetto
        }
    });
}

// Validazione del modulo di contatto
document.querySelector('#contact form').addEventListener('submit', function(e) {
    let valid = true;
    
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    
    // Controllo del nome
    if (name.value.trim() === '') {
        valid = false;
        alert('Please enter your name.');
    }

    // Controllo dell'email
    if (email.value.trim() === '' || !email.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    // Controllo del messaggio
    if (message.value.trim() === '') {
        valid = false;
        alert('Please enter your message.');
    }

    if (!valid) {
        e.preventDefault(); // Impedisce l'invio del modulo se la convalida fallisce
    }
});

// Modal per immagini (Lightbox effect)
document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modal.appendChild(modalImg);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
            modal.remove(); // Rimuove il modal dalla pagina
        });

        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
    });
});
