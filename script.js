const navbarLinks = document.querySelectorAll(".navbar-menu-link");

navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener("click", e => {
        if (e) console.error(e);

        // Add active class to link that was clicked
        navbarLink.classList.add("link-active");

        // Remove active class from all other links
        navbarLinks.forEach(navLink => {
            if (navLink.id === navbarLink.id) return;

            navLink.classList.remove("link-active");
        });
    });
});
