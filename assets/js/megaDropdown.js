document.addEventListener('DOMContentLoaded', function() {
    const megaItems = document.querySelectorAll('.has-mega');
    const navItems = document.querySelector('.__nav_items');
    
    function closeAllDropdowns() {
        megaItems.forEach(item => {
            const dropdown = item.querySelector('.mega-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            }
        });
    }
    
    function openDropdown(item) {
        const dropdown = item.querySelector('.mega-dropdown');
        if (dropdown) {
            dropdown.style.display = 'grid';
            setTimeout(() => {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            }, 10);
        }
    }
    
    megaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            closeAllDropdowns();
            openDropdown(this);
        });
        
        const dropdown = item.querySelector('.mega-dropdown');
        if (dropdown) {
            dropdown.addEventListener('mouseenter', function() {
                openDropdown(item);
            });
        }
    });
    
    if (navItems) {
        navItems.addEventListener('mouseleave', function(e) {
            const toElement = e.relatedTarget;
            if (!toElement || !toElement.closest('.mega-dropdown')) {
                closeAllDropdowns();
            }
        });
    }
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.__nav_items')) {
            closeAllDropdowns();
        }
    });
    
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            closeAllDropdowns();
        }, 100);
    });
});
