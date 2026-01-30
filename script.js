const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
}

// --- Scroll To Top Functionality ---
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() { if(scrollBtn) scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if(scrollBtn) scrollBtn.style.display = "flex";
    } else {
        if(scrollBtn) scrollBtn.style.display = "none";
    }
}
if(scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// --- TABLE SELECTION LOGIC (New) ---
const seats = document.querySelectorAll('.table-seat');
const displayTable = document.getElementById('displayTable');
const inputTable = document.getElementById('selectedTableInput');

if (seats.length > 0) {
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // 1. If table is reserved, do nothing
            if (seat.classList.contains('reserved')) {
                return;
            }

            // 2. Remove 'selected' class from all other tables
            seats.forEach(s => s.classList.remove('selected'));

            // 3. Add 'selected' class to clicked table
            seat.classList.add('selected');

            // 4. Update the text and the hidden input form
            const tableID = seat.getAttribute('data-id');
            displayTable.innerText = tableID;
            inputTable.value = tableID;
        });
    });
}

// Run Navbar
navSlide();