// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
 // Get elements from the DOM and store them in variables
const personImage = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// Get buttons from the DOM and store them in a variable
const btns = document.querySelectorAll('.btn');
const randomBtn = document.querySelector('.random-btn');

// When the page is fully loaded, call the changeDetails function
document.addEventListener('DOMContentLoaded', function() {
  changeDetails()
})

// Initialize a variable to keep track of which review is currently displayed
let changeValue = 0;

// This function updates the details (image, name, job, text) displayed on the page
function changeDetails() {
  personImage.src = reviews[changeValue].img;
  author.innerText = reviews[changeValue].name;
  job.innerText = reviews[changeValue].job;
  info.innerText = reviews[changeValue].text;
}

// Add event listeners to the buttons
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (btn.classList.contains('next-btn')) {
      // If the "next" button is clicked, increment the changeValue variable
      changeValue++;
      // If changeValue goes beyond the index of the last review, reset it to 0
      if (changeValue > reviews.length - 1) {
        changeValue = 0;
      }
    } else {
      // If the "prev" button is clicked, decrement the changeValue variable
      changeValue--;
      // If changeValue goes below 0, set it to the index of the last review
      if (changeValue < 0) {
        changeValue = reviews.length - 1;
      }
    }
    // Update the details displayed on the page
    changeDetails();
  })
})

// Add an event listener to the "random" button
randomBtn.addEventListener('click', function() {
  // Set changeValue to a random integer between 0 and the index of the last review
  changeValue = Math.floor(Math.random() * reviews.length);
  // Update the details displayed on the page
  changeDetails();
})