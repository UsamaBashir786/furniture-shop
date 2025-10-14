const searchsidebar = document.querySelector(".search-sidebar");
const closebtn = document.getElementById("close-btn");
const searchbtndesktop = document.getElementById("search-btn");
const searchbtnmobile = document.getElementById("search-btn-mobile");

function opensearchsidebar() {
    if (searchsidebar) {
        searchsidebar.classList.add("activeSearch");
        document.body.style.overflow = "hidden";
    }
}

function closesearchsidebar() {
    if (searchsidebar) {
        searchsidebar.classList.remove("activeSearch");
        document.body.style.overflow = "";
    }
}

if (closebtn) {
    closebtn.addEventListener("click", closesearchsidebar);
}

if (searchbtndesktop) {
    searchbtndesktop.addEventListener("click", opensearchsidebar);
}

if (searchbtnmobile) {
    searchbtnmobile.addEventListener("click", opensearchsidebar);
}

document.addEventListener("click", function (event) {
    if (!searchsidebar) return;

    const isClickInsideSidebar = searchsidebar.contains(event.target);
    const isClickOnDesktopBtn = searchbtndesktop && searchbtndesktop.contains(event.target);
    const isClickOnMobileBtn = searchbtnmobile && searchbtnmobile.contains(event.target);

    if (
        !isClickInsideSidebar &&
        !isClickOnDesktopBtn &&
        !isClickOnMobileBtn &&
        searchsidebar.classList.contains("activeSearch")
    ) {
        closesearchsidebar();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchsidebar.classList.contains("activeSearch")) {
        closesearchsidebar();
    }
});
