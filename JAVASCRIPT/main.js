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



const gridItems = document.querySelectorAll('.grid-item');

const options = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.1  
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

gridItems.forEach(item => {
    observer.observe(item);
});

document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector('img.character-relation-diagram');
    if (!img) return;
    
    const imgContainer = img.parentElement;
    
    const reflectionContainer = document.createElement('div');
    reflectionContainer.className = 'reflection-container';
    
    const reflection = document.createElement('div');
    reflection.className = 'reflection';
    
    imgContainer.style.perspective = '400px';
    imgContainer.style.width = 'fit-content';
    imgContainer.style.margin = '0 auto';
    imgContainer.style.position = 'relative';
    
    reflectionContainer.style.width = '100%';
    reflectionContainer.style.height = '40px';
    reflectionContainer.style.margin = '0 auto';
    reflectionContainer.style.position = 'relative';
    reflectionContainer.style.transformStyle = 'preserve-3d';
    
    
    
    img.style.maxWidth = '90%';
    img.style.width = '80%';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.transition = 'transform 0.3s ease-out';
    img.style.transformStyle = 'preserve-3d';
    
    reflectionContainer.appendChild(reflection);
    
    img.parentNode.insertBefore(reflectionContainer, img.nextSibling);
    
    let isHovering = false;
    
    imgContainer.addEventListener('mouseenter', function() {
        isHovering = true;
        img.style.transform = 'translateZ(10px) scale(1.02)';
        
        reflection.style.opacity = '0.7';
    });
    
    imgContainer.addEventListener('mousemove', function(e) {
        if (!isHovering) return;
        
        const rect = imgContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRelative = (x / rect.width) * 2 - 1;
        const yRelative = (y / rect.height) * 2 - 1;
    
        
        img.style.transform = `rotateY(${xRelative * 10}deg) rotateX(${-yRelative * 10}deg) translateZ(20px) scale(1.03)`;
        
        reflection.style.transform = `rotateX(180deg) rotateY(${xRelative * 10}deg) rotateX(${yRelative * 10}deg) translateZ(-1px)`;
    });
    
    imgContainer.addEventListener('mouseleave', function() {
        isHovering = false;
        img.style.transition = 'transform 0.6s ease-out, box-shadow 0.6s ease-out';
        img.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)';
        
        reflection.style.opacity = '0.6';
        reflection.style.transform = 'rotateX(180deg) translateZ(-1px)';
    });
});