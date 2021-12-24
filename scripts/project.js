const projectsGrid = document.querySelector("#projects-grid");

const projects = [
  {
    image: "./media/projects/periodic-table.png",
    name: "Periodic Table",
    desc: "This is periodic table made using HTML, CSS and JS which displays all properties of elements of periodic table and also classifies elements based on their properties.",
    liveLink: "  https://viru2001.github.io/periodicTable/",
    sourceLink:"https://github.com/viru2001/periodicTable"
  },

  {
    image: "./media/projects/task-tracker.png",
    name: "Task Tracker",
    desc: "This app is made using ReactJS and Firebase where user can schedule his/her tasks to do with date and time. Also there are some stats , user can keep track of how many total tasks he/she has done and if user complete a task, level is increased",
    liveLink: "https://viru2001.github.io/task-tracker/",
    sourceLink:"https://github.com/viru2001/task-tracker"
  },
  {
    image: "./media/projects/weather.png",
    name: "Weather App",
    desc: "This app is made using ReactJS and openWeather API where we can see current temperature of various cities around the world along with sunset and sunrise time,humidity,pressure and visibility",
    liveLink: "  https://viru2001.github.io/weather-app/",
    sourceLink:"https://github.com/viru2001/weather-app"
  },
  {
    image: "./media/projects/solecthon-website.png",
    name: "VCET Solecthon",
    desc: "This is website of a driverless Solar Electric Car Team of VCET college built using HTML, CSS, JS , Bootstrap and JQuery.",
    liveLink: "https://vcet.edu.in/VcetSolecthon/index.html",
    sourceLink:"https://github.com/viru2001/SolecthonWebsite"
  },
  {
    image: "./media/projects/stock-profit-loss.png",
    name: "Stock Profit or Loss",
    desc: "Stock Profit Loss app built using Vanilla JS, HTML and CSS tells how much profit or loss you have made.",
    liveLink: "https://stock-profit-or-loss-viresh.netlify.app",
    sourceLink:"https://github.com/viru2001/stock-profit-or-loss-calculator"
  },
  {
    image: "./media/projects/pallindrome-bday.png",
    name: "Palindrome Birthday",
    desc: "Palindrome Birthday App which tells whether your birthday is a plaindrome or not which is Built using Vanilla JS, HTML and CSS",
    liveLink: "https://pallindrome-birthday-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/pallindrome-birthday"
  },
  {
    image: "./media/projects/cash-register.png",
    name: "Cash Register",
    desc: "A web app which takes the bill amount and the cash paid as the input and gives the minimum number of notes of each denomination to be returned. Built using Vanilla JS, HTML and CSS.",
    liveLink: "https://cash-register-viresh.netlify.app/",
    sourceLink: "https://github.com/viru2001/cash-register"
  },
  {
    image: "./media/projects/animal-emoji.png",
    name: "Animal Emoji Interpreter",
    desc: "A web app which tells the name of the animal upon entering its emoji. Built using React.js",
  
    liveLink: "https://animal-emoji-interpreter-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/animal-emoji-interpreter"
  },
  {
    image: "./media/projects/ferb-latin-talk.png",
    name: "Ferb-Latin Talk",
    desc: "A web app which converts English to ferb latin language using vanila JS and fun tranlsations API.",
  
    liveLink: "https://ferb-latin-talk-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/ferb-latin-talk"
  }
];

projects.map((project) => {
  let projectCardDiv = document.createElement("div");
  projectCardDiv.className = "project-card";

  let image = document.createElement("img");
  image.className="project-image";
  image.src = project.image;
  image.alt = project.name + " scrrenshot"
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
  liveDemoBtn.rel="noopener";
  projectCardDiv.appendChild(liveDemoBtn);

  let sourceCodeBtn = document.createElement("a");
  sourceCodeBtn.className = "btn btn-secondary";
  sourceCodeBtn.style.color = "#6d28d9;";
  sourceCodeBtn.style.textAlign = "center";
  sourceCodeBtn.style.textDecoration = "none";
  sourceCodeBtn.href = project.sourceLink;
  sourceCodeBtn.target = "_blank";
  sourceCodeBtn.innerText = "Source Code";
  sourceCodeBtn.rel="noopener";
  projectCardDiv.appendChild(sourceCodeBtn);


  projectsGrid.appendChild(projectCardDiv);
});

