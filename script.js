// Device Preview Functionality
document.addEventListener('DOMContentLoaded', function() {
    const deviceButtons = document.querySelectorAll('.device-btn');
    const website = document.getElementById('website');
    
    // Set initial device view
    website.classList.add('desktop');
    
    // Device button click handlers
    deviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const device = this.getAttribute('data-device');
            
            // Remove active class from all buttons
            deviceButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Remove all device classes
            website.classList.remove('desktop', 'laptop', 'tablet', 'mobile');
            
            // Add selected device class
            website.classList.add(device);
        });
    });
});