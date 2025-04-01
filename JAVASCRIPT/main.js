document.querySelectorAll('.highlight').forEach(el => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>${el.dataset.info}</p>`;
    
    // Set width and height from the data attributes
    const width = el.dataset.width || 'auto';  // Default to 'auto' if no width is provided
    const height = el.dataset.height || 'auto';  // Default to 'auto' if no height is provided

    popup.style.width = width;
    popup.style.height = height;

    if (el.dataset.img) {
        const img = document.createElement('img');
        img.src = el.dataset.img;
        img.alt = 'Popup Image';
        popup.appendChild(img);
    }
    
    document.body.appendChild(popup);

    el.addEventListener('mouseenter', (e) => {
        popup.style.display = 'block';
        popup.style.left = e.pageX + 'px';
        popup.style.top = e.pageY + 'px';
    });

    el.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const notes = document.querySelectorAll(".sticky-note");

    notes.forEach(note => {
        const x = parseInt(note.getAttribute("data-x"), 10) || 100;
        const y = parseInt(note.getAttribute("data-y"), 10) || 100;
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;

        let offsetX, offsetY, isDragging = false;

        note.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - note.offsetLeft;
            offsetY = e.clientY - note.offsetTop;
            note.style.zIndex = "10";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            note.style.left = `${e.clientX - offsetX}px`;
            note.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            note.style.zIndex = "1";
        });
    });
});


function positionStickyNotes() {
    const stickyNotes = document.querySelectorAll(".sticky-note");

    stickyNotes.forEach(stickyNote => {
        const targetSelector = stickyNote.getAttribute("data-target");
        const offsetX = stickyNote.getAttribute("data-offsetX");
        const offsetY = stickyNote.getAttribute("data-offsetY");
        const X = stickyNote.getAttribute("data-X");
        const Y = stickyNote.getAttribute("data-Y");

        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            
            // Position the sticky note next to its target element
            stickyNote.style.left = `${rect.right - offsetX}px`;
            stickyNote.style.top = `${rect.top -  offsetY}px`;
            stickyNote.style.position = "absolute";
        }else{
            const rect = targetElement.getBoundingClientRect();

            stickyNote.style.left = `${X}px`;
            stickyNote.style.top = `${Y}px`;
            stickyNote.style.position = "absolute";
        }
    });
}

// Run function on page load
window.addEventListener("DOMContentLoaded", positionStickyNotes);

// Update position when the window resizes
window.addEventListener("resize", positionStickyNotes);
