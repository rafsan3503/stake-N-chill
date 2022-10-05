const imgContainer = document.getElementById("img-container");
const modal = document.getElementById("my-modal-5");

document.getElementById("tokenomics").addEventListener('click', () => {
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
});

document.getElementById("overview").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
});

document.getElementById("roadmap").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
});

document.getElementById("team").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
});

const showTokenomics = () => {
  // document.getElementById("tokenomics").checked = true;
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
};

const showOverview = () => {
  // document.getElementById('overview').checked = true;
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
}

const showRoadmap = () => {
  // document.getElementById("roadmap").checked = true;
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
};

const showTeam = () => {
  // document.getElementById('team').checked = true;
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
}
// const showModal = () => {
//   document.getElementById("my-modal-5").checked = true;
// }


