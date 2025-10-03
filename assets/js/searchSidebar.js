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

if (closeBtn) {
    closeBtn.addEventListener('click', closeSearchSidebar);
}

if (searchBtnDesktop) {
    searchBtnDesktop.addEventListener('click', openSearchSidebar);
}

if (searchBtnMobile) {
    searchBtnMobile.addEventListener('click', openSearchSidebar);
}

document.addEventListener('click', function(event) {
    if (!searchSidebar) return;
    
    const isClickInsideSidebar = searchSidebar.contains(event.target);
    const isClickOnDesktopBtn = searchBtnDesktop && searchBtnDesktop.contains(event.target);
    const isClickOnMobileBtn = searchBtnMobile && searchBtnMobile.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnDesktopBtn && !isClickOnMobileBtn && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});