const searchSidebar = document.querySelector('.__search-sidebar');
const closeBtn = document.getElementById('closeBtn');
const searchBtnDesktop = document.getElementById('searchBtn');
const searchBtnMobile = document.getElementById('searchBtnMobile');

function openSearchSidebar() {
    if (searchSidebar) {
        searchSidebar.classList.add('activeSearch');
        document.body.style.overflow = 'hidden';
    }
}

function closeSearchSidebar() {
    if (searchSidebar) {
        searchSidebar.classList.remove('activeSearch');
        document.body.style.overflow = '';
    }
}

// Close button
if (closeBtn) {
    closeBtn.addEventListener('click', closeSearchSidebar);
}

// Desktop search button (right side, >992px)
if (searchBtnDesktop) {
    searchBtnDesktop.addEventListener('click', openSearchSidebar);
}

// Mobile search button (left side, ≤992px)
if (searchBtnMobile) {
    searchBtnMobile.addEventListener('click', openSearchSidebar);
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    if (!searchSidebar) return;
    
    const isClickInsideSidebar = searchSidebar.contains(event.target);
    const isClickOnDesktopBtn = searchBtnDesktop && searchBtnDesktop.contains(event.target);
    const isClickOnMobileBtn = searchBtnMobile && searchBtnMobile.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnDesktopBtn && !isClickOnMobileBtn && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});

// Close sidebar with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});