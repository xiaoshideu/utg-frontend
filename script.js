// UTG Frontend JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

let actionCounter = 0;

function initializeApp() {
    updateLastUpdated();
    setupNavigation();
    
    // Update timestamp every minute
    setInterval(updateLastUpdated, 60000);
    
    console.log('UTG Frontend System initialized successfully');
}

function updateLastUpdated() {
    const now = new Date();
    const timestamp = now.toLocaleString();
    const lastUpdatedElement = document.getElementById('last-updated');
    
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = timestamp;
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Update active nav item
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            console.log(`Navigated to ${targetId}`);
        });
    });
}

function performAction(actionType) {
    actionCounter++;
    
    const counterElement = document.getElementById('stat-counter');
    if (counterElement) {
        counterElement.textContent = actionCounter;
    }
    
    // Show feedback to user
    showNotification(`Action "${actionType}" performed successfully!`);
    
    // Simulate action processing
    if (actionType === 'generate') {
        console.log('Generating report...');
        setTimeout(() => {
            showNotification('Report generated successfully!');
        }, 1500);
    } else if (actionType === 'refresh') {
        console.log('Refreshing data...');
        updateLastUpdated();
        setTimeout(() => {
            showNotification('Data refreshed successfully!');
        }, 1000);
    }
    
    console.log(`Performed action: ${actionType}, Total actions: ${actionCounter}`);
}

function changeTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        showNotification('Switched to dark theme');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        showNotification('Switched to light theme');
    }
    
    console.log(`Theme changed to: ${theme}`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const themeSelect = document.getElementById('theme');
        if (themeSelect) {
            themeSelect.value = 'dark';
        }
    }
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', loadSavedTheme);

// Add some interactive features for demonstration
function addInteractiveFeatures() {
    // Add click effects to dashboard cards
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Initialize interactive features
document.addEventListener('DOMContentLoaded', addInteractiveFeatures);

// Utility function to simulate API calls
function simulateApiCall(endpoint, callback) {
    console.log(`Making API call to: ${endpoint}`);
    
    // Simulate network delay
    setTimeout(() => {
        const mockData = {
            status: 'success',
            timestamp: new Date().toISOString(),
            data: {
                message: `Data from ${endpoint}`,
                version: '1.0.0'
            }
        };
        
        callback(mockData);
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
}

// Export functions for external use if needed
window.UTG = {
    performAction,
    changeTheme,
    showNotification,
    simulateApiCall
};