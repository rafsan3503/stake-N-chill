const imgContainer = document.getElementById("img-container");
const modal = document.getElementById("my-modal-5");
const header = document.getElementById('header');
const container = document.getElementById('container');
console.log(container.innerHTML);

document.getElementById('home').addEventListener('click', () => {
  container.innerHTML = `<img class="w-96" id="img-container" src="images/1_5035376983035347618.png" alt="">`;
  header.innerText = '';
})

document.getElementById("home").addEventListener('mouseover', () => {
  container.innerHTML = `<img class="w-96" id="img-container" src="images/1_5035376983035347618.png" alt="">`;
  header.innerText = "";
});

document.getElementById("tokenomics").addEventListener('click', () => {
  imgContainer.setAttribute("src", "images/crab_PNG45.png");
  header.innerText = 'Tokenomics';
  container.innerHTML = `<section id="tokenomics" class="mt-20 text-center w-full mx-auto">
     <section class="mt-[50px] text-center">
        <div class="lg:flex lg:divide-x-2 shadow">
        <div class="stat">
            <div class="stat-title">Total Supply</div>
            <div class="stat-value">1M</div>
        </div>
        
        <div class="stat">
            <div class="stat-title">Current Burned</div>
            <div class="stat-value">31%</div>
        </div>
        
        <div class="stat">
            <div class="stat-title">Total Holders</div>
            <div class="stat-value">50+</div>
        </div>
        
        </div>
    </section> 
    <div class="lg:flex tokenomics lg:divide-x-2 shadow glass mt-10">
      
      <div class="stat">
        <div class="stat-title">Marketing</div>
        <div class="stat-value text-primary">8%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Stake n Chill Rewards</div>
        <div class="stat-value text-primary">3%</div>
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

document.getElementById("overview").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/umbrella_PNG69214.png");
  header.innerText = "Overview";
  container.innerHTML = `
  <section>
        <div class="text-center">
        </div>
        <div class="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5">
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Safe Team</h2>
            <p>History of successful projects.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Experienced Marketer</h2>
            <p>Many Connection in BSC.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Betting Meta</h2>
            <p>Riding the wave of hype.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Live Casino Time</h2>
            <p>Daily Rounds of blackjack are invested into the chart.</p>
            </div>
            </div>
            
  
        </div>
        
        
    </div>
  </div>
</div>
    </section>
  `;
});

document.getElementById("roadmap").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/beach_PNG3.png");
  header.innerText = "Roadmap";
  container.innerHTML = `
  <section id="roadmap" class="mt-[100px] w-9/12 mx-auto">
    <div class="flex w-full mt-10">
    <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Coming Soon...</div>
    </div>
    </section>
  `;
});

document.getElementById("team").addEventListener("click", () => {
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  header.innerText = 'Team';
  container.innerHTML = `
  <section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-5">
            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
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
  header.innerText = "Tokenomics";
  container.innerHTML = `<section id="tokenomics" class="mt-20 text-center w-full mx-auto">
     <section class="mt-[50px] text-center">
        <div class="lg:flex lg:divide-x-2 shadow">
        <div class="stat">
            <div class="stat-title">Total Supply</div>
            <div class="stat-value">1M</div>
        </div>
        
        <div class="stat">
            <div class="stat-title">Current Burned</div>
            <div class="stat-value">31%</div>
        </div>
        
        <div class="stat">
            <div class="stat-title">Total Holders</div>
            <div class="stat-value">50+</div>
        </div>
        
        </div>
    </section> 
    <div class="lg:flex tokenomics lg:divide-x-2 shadow glass mt-10">
      
      <div class="stat">
        <div class="stat-title">Marketing</div>
        <div class="stat-value text-primary">8%</div>
      </div>

      <div class="stat">
        <div class="stat-title">Stake n Chill Rewards</div>
        <div class="stat-value text-primary">3%</div>
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
  header.innerText = "Overview";
  container.innerHTML = `
  <section>
        <div class="text-center">
        </div>
        <div class="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5">
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Safe Team</h2>
            <p>History of successful projects.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Experienced Marketer</h2>
            <p>Many Connection in BSC.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Betting Meta</h2>
            <p>Riding the wave of hype.</p>
            </div>
            </div>
            <div class="card glass">
            <div class="card-body">
            <h2 class="card-title">Live Casino Time</h2>
            <p>Daily Rounds of blackjack are invested into the chart.</p>
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
  header.innerText = "Roadmap";
  container.innerHTML = `
  <section id="roadmap" class="mt-[100px] w-9/12 mx-auto">
    <div class="flex w-full mt-10">
    <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Coming Soon...</div>
    </div>
    </section>
  `;
};

const showTeam = () => {
  // document.getElementById('team').checked = true;
  imgContainer.setAttribute("src", "images/1_5035376983035347618.png");
  header.innerText = "Team";
  container.innerHTML = `
  <section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-5">
            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
            </div>
            </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl glass">
            <img class='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes"/>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Mr.X</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="card-actions">
            <button class="btn btn-outline">contact now</button>
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


