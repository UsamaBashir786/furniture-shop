const searchSidebar = document.querySelector('.__search-sidebar');
const closeBtn = document.getElementById('closeBtn');
const searchOpenBtn = document.querySelector('[data-search-open]');

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

if (searchOpenBtn) {
    searchOpenBtn.addEventListener('click', openSearchSidebar);
}

document.addEventListener('click', function(event) {
    if (!searchSidebar) return;
    const isClickInsideSidebar = searchSidebar.contains(event.target);
    const isClickOnSearchBtn = searchOpenBtn && searchOpenBtn.contains(event.target);
    if (!isClickInsideSidebar && !isClickOnSearchBtn && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && searchSidebar.classList.contains('activeSearch')) {
        closeSearchSidebar();
    }
});
