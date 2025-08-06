function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function closeMenu() {
  const nav = document.getElementById('navLinks');
  // Close only if it's open (has class "show")
  if (nav.classList.contains('show')) {
      nav.classList.remove('show');
  }
}

function scrollToMore() {
    const targetY = document.body.scrollHeight;
    let currentY = window.scrollY;
    const speed = 10; // smaller = slower scroll
    const step = 10;  // pixels to scroll per tick

    function scrollStep() {
      if (currentY < targetY) {
        currentY += step;
        window.scrollTo(0, currentY);
        setTimeout(scrollStep, speed);
      }
    }
    scrollStep();
  }

  let input = document.getElementById('search');
  input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
          window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
      }
    });

    
async function ApiCall() {
const data = 'https://randomuser.me/api/?results=5';
const result = await fetch(data);
const useData = await result.json();

const user = useData.results[0];
const user2 = useData.results[2];
const user3 = useData.results[3];

const show = document.getElementById('showpic');
const fullname = document.getElementById('fullname');
const fullname2 = document.getElementById('fullname2');

show.src = user.picture.medium;
fullname.innerHTML = `${user.name.first} ${user.name.last}`;
fullname2.innerHTML = `${user.name.first} ${user.name.last}`;


const show2 = document.getElementById('showpic2');
const sfullname = document.getElementById('sfullname');
const sfullname2 = document.getElementById('sfullname2');

show2.src = user2.picture.medium;
sfullname.innerHTML = `${user2.name.first} ${user2.name.last}`;
sfullname2.innerHTML = `${user2.name.first} ${user2.name.last}`;


const show3 = document.getElementById('showpic3');
const tfullname = document.getElementById('tfullname');
const tfullname2 = document.getElementById('tfullname2');

show3.src = user3.picture.medium;
tfullname.innerHTML = `${user3.name.first} ${user3.name.last}`;
tfullname2.innerHTML = `${user3.name.first} ${user3.name.last}`;
}
ApiCall();
setInterval(()=>{
ApiCall();
},2 * 60 * 1000);

// ------Fitler function -------//

      // Load JSON data
fetch('Data.json')
  .then(res => res.json())
  .then(data => {
    allProperties = data.properties;
  })
  .catch(err => {
    console.error('Error loading JSON:', err);
  });

const select = document.getElementById('typeSelect');
const container = document.getElementById('PROPERTY-container');
const defaultCards = document.querySelectorAll('.default-card');
let allProperties = [];

// Show all default cards
function showDefaultCards() {
  defaultCards.forEach(card => {
    card.style.display = 'flex'; 
  });
}

// Hide all default cards
function hideDefaultCards() {
  defaultCards.forEach(card => {
    card.style.display = 'none';
  });
}

// Render cards from JSON filtered by type
function renderCards(type) {
  hideDefaultCards();

  // Remove any previously rendered dynamic cards
  const dynamicCards = container.querySelectorAll('.dynamic-card');
  dynamicCards.forEach(card => card.remove());

  // Filter properties by type (case-insensitive)
  const filtered = allProperties.filter(p => p.type.toLowerCase() === type.toLowerCase());

  filtered.forEach(p => {
    const showBedroomBathroom = p.type === 'Flat' || p.type === 'Home';

    const card = document.createElement('div');
    card.className = 'property-card dynamic-card';

    card.innerHTML = `
      <img src="${p.image}" alt="Property Image" class="property-image" />
      <div class="property-details">
        <h2 class="property-title">${p.title}</h2>
        <p class="property-location">${p.location}</p>
        <div class="property-info">
          ${showBedroomBathroom ? `<h3>Bedrooms ${p.bedrooms}</h3>` : ''}
          ${showBedroomBathroom ? `<h3>Bathrooms ${p.bathrooms}</h3>` : ''}
          <h3>${p.area_sqft} sqft</h3>
        </div>
        <div class="property-price">₹ ${p.price}</div>
        <a href="${p.link}" class="btn-view">View Details</a>
      </div>
    `;

    container.appendChild(card);
  });
}



// Dropdown change event
select.addEventListener('change', () => {
  const selectedType = select.value;

  if (selectedType === '') {
    showDefaultCards();
    container.querySelectorAll('.dynamic-card').forEach(card => card.remove());
  } else {
    renderCards(selectedType);
  }
});


// ------- Contact form reset with custom alert-----------

function showAlert(message) {
  document.getElementById('alertMessage').innerText = message;
  document.getElementById('customAlert').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function hideAlert() {
  document.getElementById('customAlert').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

document.getElementById('closeAlert').addEventListener('click', hideAlert);



document.getElementById('cont-form').addEventListener('submit', function(event) {
  // Prevents the default form submission behavior (page reload)
  event.preventDefault();

  // Send form data to Formspree (You can add your logic here, if any)
  const formData = new FormData(this);
  fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          // Form successfully submitted, clear the form fields
          document.getElementById('cont-form').reset();
        showAlert("Form submitted successfully!");
        
      } else {
          showAlert("There was an issue with your submission.");
      }
  }).catch(error => {
      alert("An error occurred. Please try again.");
  });
});


// ------------Card Slider------------

const cardSlider = document.getElementById('cardSlider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const cardWidth = 270; // Width of card + gap

        prevBtn.addEventListener('click', () => {
            cardSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            cardSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });


// ------------Login Page------------
function Loginpage() {
  window.location.href = "Login.html";
}
