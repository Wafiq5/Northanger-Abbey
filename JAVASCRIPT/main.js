function createAnimationObserver({
    selector, 
    elements = null,
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = null,
    animationStyles = null,
    staggerDelay = 0,
    callback = null,
    unobserve = true
}) {
    const targets = elements || document.querySelectorAll(selector);
    
    if (animationStyles && animationStyles.initial) {
        targets.forEach(el => {
            Object.assign(el.style, animationStyles.initial);
        });
    }
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const index = Array.from(targets).indexOf(element);
                const delay = staggerDelay > 0 ? index * staggerDelay : 0;
                
                setTimeout(() => {
                    // Apply animation class if provided
                    if (animationClass) {
                        element.classList.add(animationClass);
                    }
                    
                    if (animationStyles && animationStyles.visible) {
                        Object.assign(element.style, animationStyles.visible);
                    }
                    
                    if (callback) {
                        callback(element, index);
                    }
                }, delay);
                
                if (unobserve) {
                    observer.unobserve(element);
                }
            } else if (callback && !unobserve) {
                callback(entry.target, Array.from(targets).indexOf(entry.target), false);
            }
        });
    }, { threshold, rootMargin });
    
    targets.forEach(el => observer.observe(el));
    
    return observer;
}

// Highlight popup functionality
document.querySelectorAll('.highlight').forEach(el => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>${el.dataset.info}</p>`;
    
    const width = el.dataset.width || 'auto';
    const height = el.dataset.height || 'auto';
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

createAnimationObserver({
    selector: '.grid-item',
    animationClass: 'slide'
});

document.addEventListener("DOMContentLoaded", function() {
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
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    if (timelineEntries.length > 0) {
        createAnimationObserver({
            elements: timelineEntries,
            staggerDelay: 50,
            animationClass: 'visible',
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
    }
    const img = document.querySelector('img.character-relation-diagram');
    if (img) {
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
    }

    const exploreBar = document.querySelector('.explore-bar');
    const creatorsSection = document.querySelector('.creators-container');
    
    if (exploreBar && creatorsSection) {
        createAnimationObserver({
            elements: [creatorsSection],
            callback: (element, index, isIntersecting = true) => {
                if (isIntersecting) {
                    exploreBar.classList.add('visible');
                } else {
                    exploreBar.classList.remove('visible');
                }
            },
            unobserve: false
        });
    }

    const exploreItems = document.querySelectorAll('.explore-bar-li');
    
    exploreItems.forEach(item => {
        const itemText = item.getAttribute('data-hover-text') || 'Explore';
        
        const originalIcon = item.innerHTML;
        
        item.innerHTML = `
            <span class="explore-icon">${originalIcon}</span>
            <span class="explore-text">${itemText}</span>
        `;
        
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        item.style.transition = 'width 0.4s ease-in-out';
        item.style.width = '40px';
        
        const iconElement = item.querySelector('.explore-icon');
        const textElement = item.querySelector('.explore-text');
        
        iconElement.style.position = 'absolute';
        iconElement.style.left = '50%';
        iconElement.style.top = '50%';
        iconElement.style.transform = 'translate(-50%, -50%)';
        iconElement.style.opacity = '1';
        iconElement.style.transition = 'opacity 0.5s ease-in-out';
        
        textElement.style.position = 'absolute';
        textElement.style.left = '50%';
        textElement.style.top = '50%';
        textElement.style.transform = 'translate(-50%, -50%)';
        textElement.style.opacity = '0';
        textElement.style.whiteSpace = 'nowrap';
        textElement.style.transition = 'opacity 0.5s ease-in-out';
        
        item.addEventListener('mouseenter', function() {
            const textWidth = textElement.offsetWidth;
            item.style.width = (textWidth + 70) + 'px';
            
            iconElement.style.opacity = '0';
            textElement.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            item.style.width = '40px'; // Return to icon width
            iconElement.style.opacity = '1';
            textElement.style.opacity = '0';
        });
    });

    const characterPlotBackgroundImage = document.querySelector('.character-plot-introduction-background');
    if (characterPlotBackgroundImage) {
        let lastScrollY = window.scrollY;
        let ticking = false;
        let fadeStartPosition = 100;
        let fadeDistance = 400;
        
        characterPlotBackgroundImage.style.position = 'fixed';
        characterPlotBackgroundImage.style.top = '0';
        characterPlotBackgroundImage.style.left = '0';
        characterPlotBackgroundImage.style.width = '100%';
        characterPlotBackgroundImage.style.height = '100vh';
        characterPlotBackgroundImage.style.objectFit = 'cover';
        characterPlotBackgroundImage.style.zIndex = '-1';
        characterPlotBackgroundImage.style.opacity = '.4';
        characterPlotBackgroundImage.style.transition = 'opacity 0.3s ease-out';
        
        function updateBackgroundOpacity() {
            // Calculate opacity based on scroll position
            const scrollPosition = window.scrollY;
            
            if (scrollPosition <= fadeStartPosition) {
                characterPlotBackgroundImage.style.opacity = '.4';
            } else if (scrollPosition >= fadeStartPosition + fadeDistance) {
                characterPlotBackgroundImage.style.opacity = '0';
            } else {
                const fadeProgress = (scrollPosition - fadeStartPosition) / fadeDistance;
                characterPlotBackgroundImage.style.opacity = (1 - fadeProgress).toFixed(2);
            }
            
            lastScrollY = scrollPosition;
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateBackgroundOpacity();
                });
                ticking = true;
            }
        });
        
        updateBackgroundOpacity();
        
    }
    
    const timelineBackgroundImage = document.querySelector('.timeline-section-background');
    if (timelineBackgroundImage) {
        let lastScrollY = window.scrollY;
        let ticking = false;
        let fadeStartPosition = 100;
        let fadeDistance = 400;
        
        timelineBackgroundImage.style.position = 'fixed';
        timelineBackgroundImage.style.top = '0';
        timelineBackgroundImage.style.left = '0';
        timelineBackgroundImage.style.width = '100%';
        timelineBackgroundImage.style.height = '75vh';
        timelineBackgroundImage.style.objectFit = 'cover';
        timelineBackgroundImage.style.zIndex = '-1';
        timelineBackgroundImage.style.opacity = '1';
        timelineBackgroundImage.style.transition = 'opacity 0.3s ease-out';
        
        function updateBackgroundOpacity() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition <= fadeStartPosition) {
                timelineBackgroundImage.style.opacity = '.5';
            } else if (scrollPosition >= fadeStartPosition + fadeDistance) {
                timelineBackgroundImage.style.opacity = '0';
            } else {
                const fadeProgress = (scrollPosition - fadeStartPosition) / fadeDistance;
                timelineBackgroundImage.style.opacity = (1 - fadeProgress).toFixed(2);
            }
            
            lastScrollY = scrollPosition;
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateBackgroundOpacity();
                });
                ticking = true;
            }
        });
        
        updateBackgroundOpacity();
    }

    const analysisBackgroundImage = document.querySelector('.analysis-page-background');
    if (analysisBackgroundImage) {
        let lastScrollY = window.scrollY;
        let ticking = false;
        let fadeStartPosition = 100;
        let fadeDistance = 400;
        
        analysisBackgroundImage.style.position = 'fixed';
        analysisBackgroundImage.style.top = '0';
        analysisBackgroundImage.style.left = '0';
        analysisBackgroundImage.style.width = '100%';
        analysisBackgroundImage.style.height = '75vh';
        analysisBackgroundImage.style.objectFit = 'cover';
        analysisBackgroundImage.style.zIndex = '-1';
        analysisBackgroundImage.style.opacity = '.4';
        analysisBackgroundImage.style.transition = 'opacity 0.3s ease-out';
        
        function updateBackgroundOpacity() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition <= fadeStartPosition) {
                analysisBackgroundImage.style.opacity = '.4';
            } else if (scrollPosition >= fadeStartPosition + fadeDistance) {
                analysisBackgroundImage.style.opacity = '0';
            } else {
                const fadeProgress = (scrollPosition - fadeStartPosition) / fadeDistance;
                analysisBackgroundImage.style.opacity = (1 - fadeProgress).toFixed(2);
            }
            
            lastScrollY = scrollPosition;
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateBackgroundOpacity();
                });
                ticking = true;
            }
        });
        
        updateBackgroundOpacity();
    }

    const familySections = document.querySelectorAll('.family');
    
    createAnimationObserver({
        elements: familySections,
        staggerDelay: 150,
        animationStyles: {
            initial: {
                opacity: '0',
                transform: 'translateY(50px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            },
            visible: {
                opacity: '1',
                transform: 'translateY(0)'
            }
        }
    });
        
    const accordionLists = document.querySelectorAll('.accordion-expandable-list');
    
    accordionLists.forEach(list => {
        list.addEventListener('click', function(e) {
            // Find the clicked accordion item by traversing up from the click target
            const item = e.target.closest('.accordion-expandable-item');
            if (!item) return; // Click wasn't on an accordion item
            
            const body = item.querySelector('.accordion-expandable-body');
            if (!body) return;
            
            console.log('Accordion clicked:', item); // Add for debugging
            
            // Toggle active state
            if (!item.classList.contains('active')) {
                // First close any other open accordions in this list
                const openItems = list.querySelectorAll('.accordion-expandable-item.active');
                openItems.forEach(openItem => {
                    if (openItem !== item) {
                        const openBody = openItem.querySelector('.accordion-expandable-body');
                        openBody.style.height = '0';
                        openItem.classList.remove('active');
                    }
                });
                
                // Get accurate content height before animation
                body.style.height = 'auto';
                const height = body.scrollHeight;
                body.style.height = '0';
                
                // Force reflow before changing properties
                body.offsetHeight;
                
                // Animate open
                item.classList.add('active');
                body.style.height = height + 'px';
                
            } else {
                // Animate closed
                body.style.height = body.scrollHeight + 'px';
                body.offsetHeight; // Force reflow
                body.style.height = '0';
                
                // Remove active class after animation completes
                setTimeout(() => {
                    item.classList.remove('active');
                }, 300);
            }
        });
    });
    
    // Remove any onclick handlers from HTML
    document.querySelectorAll('.accordion-expandable-item[onclick]').forEach(item => {
        item.removeAttribute('onclick');
    });
});