document.addEventListener('DOMContentLoaded', () => {
    // Bottom Navigation Active State Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset all icons to outlined (FILL 0) and text to secondary
            navButtons.forEach(btn => {
                const icon = btn.querySelector('.material-symbols-outlined');
                if (icon) icon.style.fontVariationSettings = '"FILL" 0';
                
                btn.classList.remove('text-primary', 'dark:text-on-surface', 'font-bold');
                btn.classList.add('text-secondary', 'dark:text-on-secondary-fixed-variant');
            });
            
            // Set clicked element to filled (FILL 1) and text to primary
            const icon = button.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = '"FILL" 1';
            
            button.classList.remove('text-secondary', 'dark:text-on-secondary-fixed-variant');
            button.classList.add('text-primary', 'dark:text-on-surface', 'font-bold');
            
            // Optional: You can implement smooth scrolling to sections here based on indices
            const index = Array.from(navButtons).indexOf(button);
            if(index === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Email button interaction
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            window.location.href = 'mailto:hello@example.com?subject=Hello%20Minjun';
        });
    }
});
