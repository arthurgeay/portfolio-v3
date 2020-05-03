const loadBtn = document.querySelector('#load-project');
const projectsContainer = document.querySelector('#projects-container');

const allProjects = document.querySelector('#all-projects');
const schoolProjects = document.querySelector('#school-projects');
const proProjects = document.querySelector('#pro-projects');

const data = [
    {
        img: "assets/img/projects/salty.png",
        type: "school",
        title: "Salty - Logiciel de chiffrement de fichier",
        description: "Développement logiciel",
        technos: [
            {
                img: "assets/img/svg/skills-icon/python.svg"
            }
        ],
        github: "https://github.com/arthurgeay/salty",
        site: "",
        loaded: false
    },
    {
        img: "assets/img/projects/tricycle.png",
        type: "school",
        title: "Tricycle - Application mobile & API",
        description: "Développement backend",
        technos: [
            {
                img: "assets/img/svg/skills-icon/Ionic.svg"
            },
            {
                img: "assets/img/svg/skills-icon/nodejs.svg"
            },
            {
                img: "assets/img/svg/skills-icon/mongodb.svg"
            }
        ],
        github: "",
        site: "https://app-tricycle.com/",
        loaded: false
    }
]

/**
 * Add a project in DOM
 */
const addProject = (project) => {
    const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.classList.add(project.type);

            const imgProject = document.createElement('img');
            imgProject.src = project.img;
            const overlayProject = document.createElement('div');
            overlayProject.classList.add('overlay-project');
            const title = document.createElement('h3');
            title.innerText = project.title;
            const description = document.createElement('p');
            description.innerText = project.description;
            const technologiesContainer = document.createElement('div');
            technologiesContainer.classList.add('technologies');
            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttons');

            for(let tech of project.technos) {
                const imgTechno = document.createElement('img');
                imgTechno.src = tech.img;
                technologiesContainer.appendChild(imgTechno);
            }

            if(project.github) {
                const github = document.createElement('a');
                github.href = project.github;
                github.innerHTML = 'Github <img src="assets/img/svg/github.svg" />'
                github.classList.add('btn', 'white', 'small');
                buttonsContainer.appendChild(github);
            }

            if(project.site) {
                const site = document.createElement('a');
                site.href = project.site;
                site.innerHTML = 'Projet <img src="assets/img/svg/circle-arrow-right.svg" />'
                site.classList.add('btn', 'white', 'small');
                buttonsContainer.appendChild(site);
            }

            overlayProject.appendChild(title);
            overlayProject.appendChild(description);
            overlayProject.appendChild(technologiesContainer);
            overlayProject.appendChild(buttonsContainer)
            projectItem.appendChild(overlayProject);
            projectItem.appendChild(imgProject);
            projectsContainer.appendChild(projectItem);
}

/* Display or none elements */
const displayBlockElements = (elm, displayMode) => {
    for(el of elm) {
        el.style.display = displayMode;
    }
};


const addOrRemoveClass = (activeElement, elementsPassive) => {
    activeElement.classList.add('blue');
    activeElement.classList.remove('outline-inverse');

    elementsPassive[0].classList.remove('blue');
    elementsPassive[0].classList.add('outline-inverse');

    elementsPassive[1].classList.remove('blue');
    elementsPassive[1].classList.add('outline-inverse');
};


/* Load new project in dom */
loadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let count = 0;

    for(let project of data) {
        if(!project.loaded && count < 3) {
            addProject(project);
            project.loaded = true;
            count++;
        }
    }

    if(!data.find(x => x.loaded == false)) {
        loadBtn.style.display = "none";
    }

});

/* Filter the type of project */

allProjects.addEventListener('click', (e) => {
    e.preventDefault();
    addOrRemoveClass(allProjects, [schoolProjects, proProjects]);

    const proElements = document.querySelectorAll('.pro');
    for(elm of proElements) {
        elm.style.display = 'block';
    }

    const schoolElm = document.querySelectorAll('.school');
    for(elm of schoolElm) {
        elm.style.display = 'block';
    }

});

schoolProjects.addEventListener('click', (e) => {
    e.preventDefault();
    addOrRemoveClass(schoolProjects, [allProjects, proProjects]);

    const proElements = document.querySelectorAll('.pro');
    displayBlockElements(proElements, 'none');

    const schoolElm = document.querySelectorAll('.school');
    displayBlockElements(schoolElm, 'block');
})

proProjects.addEventListener('click', (e) => {
    e.preventDefault();
    addOrRemoveClass(proProjects, [schoolProjects, allProjects]);

    const proElements = document.querySelectorAll('.pro');
    displayBlockElements(proElements, 'block');

    const schoolElm = document.querySelectorAll('.school');
    displayBlockElements(schoolElm, 'none');
})