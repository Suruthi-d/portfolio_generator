// js/builder.js

const form = document.getElementById("portfolioForm");

const nameInput = document.getElementById("name");

const roleInput = document.getElementById("role");

const aboutInput = document.getElementById("about");

const skillsInput = document.getElementById("skills");

nameInput.addEventListener("input", () => {
  document.getElementById("liveName").innerText =
  nameInput.value || "Your Name";
});

roleInput.addEventListener("input", () => {
  document.getElementById("liveRole").innerText =
  roleInput.value || "UI/UX Designer";
});

aboutInput.addEventListener("input", () => {
  document.getElementById("liveAbout").innerText =
  aboutInput.value || "Your portfolio preview appears here.";
});

skillsInput.addEventListener("input", () => {

  const container = document.getElementById("liveSkills");

  container.innerHTML = "";

  const skills = skillsInput.value.split(",");

  skills.forEach(skill => {

    if(skill.trim() !== ""){

      const span = document.createElement("span");

      span.innerText = skill;

      container.appendChild(span);
    }
  });

});

form.addEventListener("submit", function(e){

  e.preventDefault();

  const data = {

    name:nameInput.value,

    role:roleInput.value,

    about:aboutInput.value,

    skills:skillsInput.value,

    projects:document.getElementById("projects").value,

    theme:document.getElementById("theme").value
  };

  localStorage.setItem(
    "portfolioData",
    JSON.stringify(data)
  );

  window.location.href = "preview.html";
});