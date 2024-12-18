const testimonials = [
    {
        name: 'John Doe',
        role: 'Web Developer',
        image: 'images/user1.jpg',
        quote: 'This is the best service I have ever used. Highly recommended!'
    },
    {
        name: 'Jane Smith',
        role: 'Software Engineer',
        image: 'images/user2.jpg',
        quote: 'An amazing experience. The team is incredibly supportive and the service is top-notch.'
    },
    {
        name: 'Michael Brown',
        role: 'Project Manager',
        image: 'images/user3.jpg',
        quote: 'The quality and efficiency of this service are outstanding. It has exceeded my expectations.'
    }
];

let currentIndex = 0;

const profileImg = document.getElementById('profileImg');
const quote = document.getElementById('quote');
const name = document.getElementById('name');
const role = document.getElementById('role');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    profileImg.src = testimonial.image;
    quote.textContent = `"${testimonial.quote}"`;
    name.textContent = testimonial.name;
    role.textContent = testimonial.role;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    updateTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    updateTestimonial(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    updateTestimonial(currentIndex);
}, 5000);

// Initial testimonial display
updateTestimonial(currentIndex);
