// Ensure functions are globally accessible for onclick attributes
window.changeName = function(event) {
    const btn = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = (event.clientX - rect.left - ripple.offsetWidth / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - ripple.offsetHeight / 2) + 'px';
    btn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    
    setTimeout(() => {
        const nameElement = document.getElementById('nameText');
        const currentName = nameElement ? nameElement.textContent.replace('From ', '') : "Friend";
        const newName = prompt("Enter new name for Eid greetings:", currentName);
        if (newName) {
            if (nameElement) {
                nameElement.textContent = `From ${newName}`;
                nameElement.classList.add('name-updated');
                setTimeout(() => nameElement.classList.remove('name-updated'), 1000);
            }
        }
    }, 200);
};

window.shareGreeting = function(event) {
    const btn = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = (event.clientX - rect.left - ripple.offsetWidth / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - ripple.offsetHeight / 2) + 'px';
    btn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    
    setTimeout(() => {
        const nameElement = document.getElementById('nameText');
        const greetingName = nameElement ? nameElement.textContent : "From Friend";
        const greetingText = `Eid Mubarak 2025! ${greetingName}\n\n${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Eid Mubarak 2025',
                text: greetingText,
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
                fallbackShare(greetingText);
            });
        } else {
            fallbackShare(greetingText);
        }
    }, 200);
};

function fallbackShare(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Greeting copied to clipboard! You can now paste it to share.');
}

// Add click animations to buttons
document.querySelectorAll('.change-name-btn, .share-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        this.classList.add('button-clicked');
        setTimeout(() => this.classList.remove('button-clicked'), 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
     const nameElement = document.getElementById('nameText');
     if (nameElement && !nameElement.dataset.prompted) {
        const userName = prompt("Please enter your name for Eid greetings:", "Friend");
        if (userName) {
            nameElement.textContent = `From ${userName}`;
        } else {
            nameElement.textContent = `From Friend`;
        }
        nameElement.dataset.prompted = 'true';
    }
});

const islamicSymbols = [
    '🌙', '⭐', '🤲', '🕌', '🕋', '📿', '☪️', '🪔', '🌿', '🌸',
    '✨', '🫴', '🙏', '🛐', '🪷', '🌹', '🪔', '🕯️', '✋', '🫰'
];

// Create border elements
const borderElementCount = 40;
for (let i = 0; i < borderElementCount; i++) {
    const element = document.createElement('div');
    element.className = 'border-element';
    element.textContent = islamicSymbols[Math.floor(Math.random() * islamicSymbols.length)];
    
    const position = i / borderElementCount;
    let left, top;
    
    if (position < 0.25) {
        left = position * 4 * 100;
        top = 0;
    } else if (position < 0.5) {
        left = 100;
        top = (position - 0.25) * 4 * 100;
    } else if (position < 0.75) {
        left = 100 - (position - 0.5) * 4 * 100;
        top = 100;
    } else {
        left = 0;
        top = 100 - (position - 0.75) * 4 * 100;
    }
    
    element.style.left = `${left}vw`;
    element.style.top = `${top}vh`;
    element.style.animationDelay = `${i * 0.5}s`;
    element.style.opacity = Math.random() * 0.4 + 0.6;
    
    document.body.appendChild(element);
}

// Create floating Islamic elements
for (let i = 0; i < 20; i++) {
    const element = document.createElement('div');
    element.className = 'islamic-element';
    element.textContent = islamicSymbols[Math.floor(Math.random() * islamicSymbols.length)];
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${20 + Math.random() * 40}s`;
    element.style.animationDelay = `${Math.random() * 10}s`;
    element.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(element);
}

// Create stars
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
}
