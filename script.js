// --- 1. Sistema di filtraggio dinamico del Menu ---
function filtraMenu(categoria) {
    // Aggiorna lo stato visivo dei bottoni
    const bottoni = document.querySelectorAll('.filter-btn');
    bottoni.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostra/Nascondi i piatti
    const piatti = document.querySelectorAll('.menu-item');
    piatti.forEach(piatto => {
        if (categoria === 'tutti') {
            piatto.style.display = 'block';
            setTimeout(() => piatto.style.opacity = '1', 50);
        } else {
            if (piatto.classList.contains(categoria)) {
                piatto.style.display = 'block';
                setTimeout(() => piatto.style.opacity = '1', 50);
            } else {
                piatto.style.opacity = '0';
                setTimeout(() => piatto.style.display = 'none', 400); // attende l'animazione CSS
            }
        }
    });
}

// --- 2. Gestione Form Prenotazioni ---
// Impedisce di selezionare una data passata nel form
document.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('data-prenotazione');
    if (dataInput) {
        let oggi = new Date().toISOString().split('T')[0];
        dataInput.setAttribute('min', oggi);
    }
});

// Simulazione invio prenotazione
function inviaPrenotazione(event) {
    event.preventDefault();
    alert("Richiesta di prenotazione inviata con successo.\nRiceverà a breve un'email o un SMS di conferma dal nostro staff.");
    event.target.reset();
}