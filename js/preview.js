// js/preview.js

const data =
JSON.parse(localStorage.getItem("portfolioData"));

if(data){

  document.getElementById("previewName")
  .innerText = data.name;

  document.getElementById("previewRole")
  .innerText = data.role;

  document.getElementById("previewAbout")
  .innerText = data.about;

  const skillsList =
  document.getElementById("previewSkills");

  data.skills.split(",").forEach(skill => {

    const li = document.createElement("li");

    li.innerText = skill;

    skillsList.appendChild(li);
  });

  const projectList =
  document.getElementById("previewProjects");

  data.projects.split(",").forEach(project => {

    const li = document.createElement("li");

    li.innerText = project;

    projectList.appendChild(li);
  });

}