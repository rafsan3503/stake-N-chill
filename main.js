const imgContainer = document.getElementById("img-container");
const modal = document.getElementById("my-modal-5");
// const header = document.getElementById('header');
const container = document.getElementById('container');
console.log(container.innerHTML);

document.getElementById('home').addEventListener('click', () => {
  container.innerHTML = `<img class="w-96" id="img-container" src="images/1_5035376983035347618.png" alt="">`;
  // header.innerText = '';
})

document.getElementById("home").addEventListener('mouseover', () => {
  container.innerHTML = `<img class="w-96" id="img-container" src="images/1_5035376983035347618.png" alt="">`;
  // header.innerText = "";
});

document.getElementById("tokenomics-mbl").addEventListener('click', () => {
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
  // header.innerText = 'Tokenomics';
  container.innerHTML = `<section id="tokenomics" class="mt-20 text-center w-full mx-auto">
     <section class="mt-[50px] text-center">
        <div class="lg:flex lg:divide-x-2 shadow">
        <div class="stat">
            <div class="stat-title">Total Supply</div>
            <div class="stat-value">1M</div>
        </div>
        
        
        <div class="stat">
            <div class="stat-title">Total Holders</div>
            <div class="stat-value">~500</div>
        </div>
        
        </div>
    </section> 
    <div class="lg:flex lg:divide-x-2 shadow glass mt-10">
      
      <div class="stat">
        <div class="stat-title">Cake rewards</div>
        <div class="stat-value text-primary">8%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Marketing</div>
        <div class="stat-value text-primary">4%</div>
      </div>

      <div class="stat">
        <div class="stat-title">LP</div>
        <div class="stat-value text-primary">2%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Dev</div>
        <div class="stat-value text-primary">1%</div>
      </div>
    
      
    </div>

    </section>`;
});

document.getElementById("overview-mbl").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
  // header.innerText = "Overview";
  container.innerHTML = `
  <section>
        <div class="text-center">
        </div>
        <div class="w-11/12 mx-auto">
            <div class="card glass">
            <div class="card-body">
            <p>Stake N Chill is about providing long term investors with a place to earn passive rewards in CAKE which they can stake for a high APY! You may say “all rewards tokens die” or “there will be no volume”! Our solution includes hiring and paying devs to run degens which will have high rewards (2-3%+) in Stake n Chill which will continue to add volume, add holders, and most importantly bring green to the chart as some holders will have less than it costs for gas so the circulating supply will dip over time</p>
            </div>
            </div>
        </div>
        
        
    </div>
  </div>
</div>
    </section>
  `;
});

document.getElementById("roadmap-mbl").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
  // header.innerText = "Roadmap";
  container.innerHTML = `
  <section id="roadmap" class="w-9/12 mx-auto">
    <div class="flex w-full">
    <div class="p-5">Coming Soon...</div>
    </div>
    </section>
  `;
});

document.getElementById("team-mbl").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  // header.innerText = 'Developer';
  container.innerHTML = `
  <section>
        <div class='w-11/12 mx-auto'>
            <div class="card border-violet-500 bg-transparent shadow-2xl border backdrop-blur-sm">
                        <figure><img class="w-1/2 border-2 border-violet-500 rounded-full shadow-lg mt-4" src="images/chase.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body text-left">
                            <h2 class="text-violet-700 text-3xl font-bold text-bold">Chase Franz</h2>
                            <p class="text-white font-medium">Developer</p>
                            <p class="mt-5 text-lg text-white">I have worked in cryptocurrency for five years, beginning in
                                mining. My main skill set lies in social media marketing
                                which I have operated my business for three years. Within the last six months, I have developed
                                a large network within
                                crypto and continue to hone my marketing abilities in this space.</p>
                            <div class="card-actions">
                                <i class="fa-brands fa-linkedin text-3xl text-violet-700"></i>
                            </div>
                        </div>
                    </div>
        </div>
    </section>
  `;
});

const showTokenomics = () => {
  // document.getElementById("tokenomics").checked = true;
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
  // header.innerText = "Tokenomics";
  container.innerHTML = `<section id="tokenomics" class="mt-20 text-center w-full mx-auto">
     <section class="mt-[50px] text-center">
        <div class="lg:flex lg:divide-x-2 shadow">
        <div class="stat">
            <div class="stat-title">Total Supply</div>
            <div class="stat-value">1M</div>
        </div>
        
        
        <div class="stat">
            <div class="stat-title">Total Holders</div>
            <div class="stat-value">~500</div>
        </div>
        
        </div>
    </section> 
    <div class="lg:flex lg:divide-x-2 shadow glass mt-10">
      
      <div class="stat">
        <div class="stat-title">Cake rewards</div>
        <div class="stat-value text-primary">8%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Marketing</div>
        <div class="stat-value text-primary">4%</div>
      </div>

      <div class="stat">
        <div class="stat-title">LP</div>
        <div class="stat-value text-primary">2%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Dev</div>
        <div class="stat-value text-primary">1%</div>
      </div>
    
      
    </div>

    </section>`;
};

const showOverview = () => {
  // document.getElementById('overview').checked = true;
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
  // header.innerText = "Overview";
  container.innerHTML = `
  <section>
        <div class="text-center">
        </div>
        <div class="w-1/2 mx-auto">
            <div class="card glass">
            <div class="card-body">
            <p>Stake N Chill is about providing long term investors with a place to earn passive rewards in CAKE which they can stake for a high APY! You may say “all rewards tokens die” or “there will be no volume”! Our solution includes hiring and paying devs to run degens which will have high rewards (2-3%+) in Stake n Chill which will continue to add volume, add holders, and most importantly bring green to the chart as some holders will have less than it costs for gas so the circulating supply will dip over time</p>
            </div>
            </div>
        </div>
        
        
    </div>
  </div>
</div>
    </section>
  `;
}

const showRoadmap = () => {
  // document.getElementById("roadmap").checked = true;
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
  // header.innerText = "Roadmap";
  container.innerHTML = `
  <section id="roadmap" class="w-9/12 mx-auto">
    <div class="flex w-full">
    <div class="p-5">Coming Soon...</div>
    </div>
    </section>
  `;
};

const showTeam = () => {
  // document.getElementById('team').checked = true;
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  // header.innerText = "Team";
  container.innerHTML = `
  <section>
        <div class='w-1/2 mx-auto'>
            <div class="card border-violet-500 bg-transparent shadow-2xl border backdrop-blur-sm">
                        <figure><img class="w-1/2 border-2 border-violet-500 rounded-full shadow-lg mt-4" src="images/chase.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body text-left">
                            <h2 class="text-violet-700 text-3xl font-bold text-bold">Chase Franz</h2>
                            <p class="text-white font-medium">Developer</p>
                            <p class="mt-5 text-lg text-white">I have worked in cryptocurrency for five years, beginning in
                                mining. My main skill set lies in social media marketing
                                which I have operated my business for three years. Within the last six months, I have developed
                                a large network within
                                crypto and continue to hone my marketing abilities in this space.</p>
                            <div class="card-actions">
                                <i class="fa-brands fa-linkedin text-3xl text-violet-700"></i>
                            </div>
                        </div>
                    </div>
        </div>
    </section>
  `;
}
// const showModal = () => {
//   document.getElementById("my-modal-5").checked = true;
// }


