function uploadProject() {
    const portfolio = document.getElementById('portfolio');

    const projectName = prompt("Enter your project's name:");
    const projectImageURL = prompt("Enter the image URL for your project:");

    if (projectName && projectImageURL) {
        const newProject = document.createElement('div');
        newProject.classList.add('project');

        newProject.innerHTML = `
            <img src="${projectImageURL}" alt="${projectName}">
            <h3>${projectName}</h3>
        `;

        portfolio.appendChild(newProject);
    } else {
        alert("Project name and image URL are required.");
    }
}
