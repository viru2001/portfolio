const projectsGrid = document.querySelector("#projects-grid");

const projects = [
  {
    image: "./images/projects/stock-profit-loss.png",
    name: "Stock Profit or Loss",
    desc: "Stock Profit Loss app built using Vanilla JS, HTML and CSS tells how much profit or loss you have made.",
    mark: "mark14",
    liveLink: "https://stock-profit-or-loss-viresh.netlify.app",
    sourceLink:"https://github.com/viru2001/stock-profit-or-loss-calculator"
  },
  {
    image: "./images/projects/pallindrome-bday.png",
    name: "Palindrome Birthday",
    desc: "Palindrome Birthday App which tells whether your birthday is a plaindrome or not which is Built using Vanilla JS, HTML and CSS",
    mark: "mark13",
    liveLink: "https://pallindrome-birthday-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/pallindrome-birthday"
  },
  {
    image: "./images/projects/fun-with-triangles.png",
    name: "Fun with Triangles",
    desc: "A web app has fun quizzes on triangles. It allows you to calculate area, hypotenuse, find third angle, and take a quick quiz to test your knowledge of triangles. Built using Vanilla JS, HTML and CSS.",
    mark: "mark12",
    liveLink: "https://fun-with-triangles-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/fun-with-triangles"
  },
  {
    image: "./images/projects/lucky-bday.png",
    name: "Lucky Birthday",
    desc: "A web app which which takes your birthdate and lucky number, performs calculations and tells if your birthdate is lucky or not.",
    mark: "mark11",
    liveLink: "https://lucky-birthday-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/lucky-birthday"
  },
  {
    image: "./images/projects/cash-register.png",
    name: "Cash Register",
    desc: "A web app which takes the bill amount and the cash paid as the input and gives the minimum number of notes of each denomination to be returned. Built using Vanilla JS, HTML and CSS.",
    mark: "markTen",
    liveLink: "https://cash-register-viresh.netlify.app/",
    sourceLink: "https://github.com/viru2001/cash-register"
  },
  {
    image: "./images/projects/goodshows.png",
    name: "Good Shows",
    desc: "A web app which gives a list of movies & TV shows and  their ratings from IMDB based on chosen genre. Built using React.js",
    mark: "marknNine",
    liveLink: "https://goodshows.netlify.app",
    sourceLink: "https://github.com/viru2001/goodshows"
  },
  {
    image: "./images/projects/animal-emoji.png",
    name: "Animal Emoji Interpreter",
    desc: "A web app which tells the name of the animal upon entering its emoji. Built using React.js",
    mark: "markEight",
    liveLink: "https://animal-emoji-interpreter-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/animal-emoji-interpreter"
  },
  {
    image: "./images/projects/ferb-latin-talk.png",
    name: "Ferb-Latin Talk",
    desc: "A web app which converts English to ferb latin language using vanila JS and fun tranlsations API.",
    mark: "markSeven",
    liveLink: "https://ferb-latin-talk-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/ferb-latin-talk"
  },
  {
    image: "./images/projects/banana-talk.png",
    name: "Minion Speak",
    desc: "A web app which converts English to minions language using vanila JS and fun tranlsations API.",
    mark: "markSix",
    liveLink: "https://minion-banana-talk-viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/minion-banana-speak"
  },
  {
    image: "./images/projects/portfolio.png",
    name: "Portfolio",
    desc: "Personal portfolio website which showcases my projects, blogs and skills.",
    mark: "markThree, markFour, markFive",
    liveLink: "https://viresh.netlify.app",
    sourceLink: "https://github.com/viru2001/portfolio-neog"
  },
  {
    image: "./images/projects/capitals.png",
    name: "Know Capitals ?",
    desc: "Do you know capitals of different countries CLI quiz built using Node.js,readlineSync and CHALK dependencies",
    mark: "markTwo",
    liveLink: "https://replit.com/@vireshfegade/markTwo?embed=1&output=1",
    sourceLink: "https://github.com/viru2001/CLI-app-know-capitals"
  },
  {
    image: "./images/projects/know-me.png",
    name: "Know Me ?",
    desc: "How well do you know me CLI quiz built using Node.js,readlineSync and CHALK dependencies",
    mark: "markOne",
    liveLink: "https://replit.com/@vireshfegade/markOne?embed=1&output=1",
    sourceLink: "https://github.com/viru2001/CLI-App-know-me"
  },
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
  
  let projectMark = document.createElement("p");
  projectMark.className = "mark";
  projectMark.innerText = project.mark;
  projectCardDiv.appendChild(projectMark);

  let projectDesc = document.createElement("p");
  projectDesc.className = "project-description";
  projectDesc.innerText = project.desc;
  projectCardDiv.appendChild(projectDesc);



  // let liveDemoBtn = document.createElement("button");
  // liveDemoBtn.className = "btn btn-primary";
  // liveDemoBtn.innerHTML = "<a href="+project.liveLink+" target='_blank'>Live Demo </a>";
  // projectCardDiv.appendChild(liveDemoBtn);
  let liveDemoBtn = document.createElement("a");
  liveDemoBtn.className = "btn btn-primary";
  liveDemoBtn.style.color = "#fff";
  liveDemoBtn.style.textAlign = "center";
  liveDemoBtn.style.textDecoration = "none";
  liveDemoBtn.href = project.liveLink;
  liveDemoBtn.target = "_blank";
  liveDemoBtn.innerText = "Live Demo";
  projectCardDiv.appendChild(liveDemoBtn);

  // let sourceCodeBtn = document.createElement("button");
  // sourceCodeBtn.className = "btn btn-secondary";
  // sourceCodeBtn.innerHTML = "<a href="+project.sourceLink+" target='_blank'>Source Code </a>";
  // projectCardDiv.appendChild(sourceCodeBtn);

  let sourceCodeBtn = document.createElement("a");
  sourceCodeBtn.className = "btn btn-secondary";
  sourceCodeBtn.style.color = "#6d28d9;";
  sourceCodeBtn.style.textAlign = "center";
  sourceCodeBtn.style.textDecoration = "none";
  sourceCodeBtn.href = project.sourceLink;
  sourceCodeBtn.target = "_blank";
  sourceCodeBtn.innerText = "Source Code";
  projectCardDiv.appendChild(sourceCodeBtn);


  projectsGrid.appendChild(projectCardDiv);
});

