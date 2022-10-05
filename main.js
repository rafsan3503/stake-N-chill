const imgContainer = document.getElementById("img-container");
const modal = document.getElementById("my-modal-5");
const header = document.getElementById('header');

document.getElementById("tokenomics").addEventListener('click', () => {
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
  header.innerText = 'Tokenomics';
});

document.getElementById("overview").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
  header.innerText = "Overview";
});

document.getElementById("roadmap").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
  header.innerText = "Roadmap";
});

document.getElementById("team").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  header.innerText = 'Team';
});

const showTokenomics = () => {
  // document.getElementById("tokenomics").checked = true;
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
  header.innerText = "Tokenomics";
};

const showOverview = () => {
  // document.getElementById('overview').checked = true;
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
  header.innerText = "Overview";
}

const showRoadmap = () => {
  // document.getElementById("roadmap").checked = true;
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
  header.innerText = "Roadmap";
};

const showTeam = () => {
  // document.getElementById('team').checked = true;
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  header.innerText = "Team";
}
// const showModal = () => {
//   document.getElementById("my-modal-5").checked = true;
// }


