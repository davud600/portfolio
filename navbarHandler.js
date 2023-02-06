const menuButtonElem = document.querySelector("#menu-button");

menuButtonElem.addEventListener("click", () => {
    const navbarMenuListElem = document.querySelector(
        ".navbar-menu-links-list"
    );

    navbarMenuListElem.style.display =
        navbarMenuListElem.style.display === "none" ||
        navbarMenuListElem.style.display === ""
            ? "flex"
            : "none";
});
