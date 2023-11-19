updateProjectsInfo(updateStyles);

window.addEventListener("resize", () => updateStyles());

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

async function updateProjectsInfo(callback) {
    const res = await fetch("./projects.json");
    const { data: projects } = await res.json();

    const projectsContainer = document.querySelector("#projects-container");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-card");
        projectElement.classList.add(`project-${project.color}`);
        projectElement.innerHTML = `
            <div id="${project.name}" class="project-card-overlay">
                <span class="project-description">${project.description}</span>
            </div>
            <div class="project-header">
                <h2 class="project-title">${project.name} -></h2>
            </div>
        `;
        // projectElement.innerHTML = `
        //     <div id="${project.name}" class="project-card-overlay">
        //         <span class="project-description">${project.description}</span>
        //     </div>
        //     <div class="project-header">
        //         <h2 class="project-title">${project.name} -></h2>
        //         <div class="project-card-image-container">
        //             <img class="project-card-image" src="${project.cover}" alt="no image" />
        //         </div>
        //     </div>
        // `;

        projectElement.addEventListener("click", () => {
            window.open(`${project.link}`, "_blank");
        });

        projectsContainer.appendChild(projectElement);
    });

    callback();
}

function updateStyles() {
    const projectElement = document.querySelector(".project-card");
    const projectOverlayElements = document.querySelectorAll(
        ".project-card-overlay"
    );
    projectOverlayElements.forEach(projectOverlayElement => {
        projectOverlayElement.style.width = `${projectElement.clientWidth}px`;
    });
}
