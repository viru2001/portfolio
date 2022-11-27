const projectsGrid = document.querySelector("#projects-grid");

const projects = [
  {
    image: "./media/projects/video-library-app.png",
    name: "GameTube",
    desc: "• This is video library app in which user can see explore page with all videos and filter them based on categories, implemented playlist and like-dislike management, also user can add video to watch later and also can track watch history. \n • Tech Stack : ReactJS, Material UI, mockBee (https://mockbee.netlify.app/)",
    liveLink: "https://gametube.netlify.app/",
    sourceLink: "https://github.com/viru2001/gametube",
  },
  {
    image: "./media/projects/ecom-app.png",
    name: "Gamers Zone",
    desc: "• This is ecom app where user can use product listing page with various filters like price range,category & rating and Implemented wishlist and cart management \n • Tech Stack : ReactJS, CSS, Cool UI (https://cool-ui.netlify.app/) , mockBee (https://mockbee.netlify.app/)",
    liveLink: "https://gamers-zone-ecom.netlify.app/",
    sourceLink: "https://github.com/viru2001/gamers-zone-ecom",
  },
  {
    image: "./media/projects/notes-app.png",
    name: "Keep Notes",
    desc: "• This is notes app where user can perform CRUD operations, user can use rich text editor, user can add colors to notes and also Implemented archive and trash notes management \n • Tech Stack : ReactJS, CSS, Cool UI (https://cool-ui.netlify.app/) , mockBee (https://mockbee.netlify.app/)",
    liveLink: "https://keep-notes-viresh.netlify.app/",
    sourceLink: "https://github.com/viru2001/keep-notes",
  },
  {
    image: "./media/projects/plan-your-day-extension.png",
    name: "Plan Your Day",
    desc: "• This is browser extension where user can set focus of the day and also set todos, user can see current weather. The background and quote keeps changing on refresh of the page. \n • Tech Stack : ReactJS, Material UI",
    liveLink: "https://addons.mozilla.org/en-US/firefox/addon/plan-your-day/",
    sourceLink: "https://github.com/viru2001/plan-your-day",
  },
  {
    image: "./media/projects/cool-ui.png",
    name: "Cool UI",
    desc: "• This is Pure CSS component library for creating beautiful UI consist of 10+ components \n • Tech Stack : HTML, CSS, JavaScript",
    liveLink: "https://cool-ui.netlify.app/",
    sourceLink: "https://github.com/viru2001/Cool-UI",
  },
  {
    image: "./media/projects/periodic-table.png",
    name: "Periodic Table",
    desc: "• This is periodic table made using HTML, CSS and JS which displays all properties of elements of periodic table and also classifies elements based on their properties.  \n • Tech Stack : HTML, CSS, JavaScript",
    liveLink: " https://viru2001.github.io/periodicTable/",
    sourceLink: "https://github.com/viru2001/periodicTable",
  },

  {
    image: "./media/projects/task-tracker.png",
    name: "Task Tracker",
    desc: "• In this app user can schedule his/her tasks to do with date and time. Also there are some stats , user can keep track of how many total tasks he/she has done and if user complete a task, level is increased  \n • Tech Stack : ReactJS, NodeJS, Firebase",
    liveLink: "https://viru2001.github.io/task-tracker/",
    sourceLink: "https://github.com/viru2001/task-tracker",
  },
  {
    image: "./media/projects/solecthon-website.png",
    name: "VCET Solecthon",
    desc: "• This is website of a driverless Solar Electric Car Team of VCET college.  \n • Tech Stack : HTML, CSS, JavaScript, Bootstrap and JQuery",
    liveLink: "https://vcet.edu.in/VcetSolecthon/index.html",
    sourceLink: "https://github.com/viru2001/SolecthonWebsite",
  },
];

projects.map(project => {
  let projectCardDiv = document.createElement("div");
  projectCardDiv.className = "project-card";

  let image = document.createElement("img");
  image.className = "project-image";
  image.src = project.image;
  image.alt = project.name + " scrrenshot";
  projectCardDiv.appendChild(image);

  let projectTitle = document.createElement("p");
  projectTitle.className = "project-title";
  projectTitle.innerText = project.name;
  projectCardDiv.appendChild(projectTitle);

  let projectDesc = document.createElement("p");
  projectDesc.className = "project-description";
  projectDesc.innerText = project.desc;
  projectCardDiv.appendChild(projectDesc);

  let liveDemoBtn = document.createElement("a");
  liveDemoBtn.className = "btn btn-primary";
  liveDemoBtn.style.color = "#fff";
  liveDemoBtn.style.textAlign = "center";
  liveDemoBtn.style.textDecoration = "none";
  liveDemoBtn.href = project.liveLink;
  liveDemoBtn.target = "_blank";
  liveDemoBtn.innerText = "Live Demo";
  liveDemoBtn.rel = "noopener";
  projectCardDiv.appendChild(liveDemoBtn);

  let sourceCodeBtn = document.createElement("a");
  sourceCodeBtn.className = "btn btn-secondary";
  sourceCodeBtn.style.color = "#6d28d9;";
  sourceCodeBtn.style.textAlign = "center";
  sourceCodeBtn.style.textDecoration = "none";
  sourceCodeBtn.href = project.sourceLink;
  sourceCodeBtn.target = "_blank";
  sourceCodeBtn.innerText = "Source Code";
  sourceCodeBtn.rel = "noopener";
  projectCardDiv.appendChild(sourceCodeBtn);

  projectsGrid.appendChild(projectCardDiv);
});
