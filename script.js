// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
                         event.preventDefault();
                         
                         const name = document.getElementById('name').value;
                         const email = document.getElementById('email').value;
                         const message = document.getElementById('message').value;
                         
                         if (name && email && message) {
                             alert('Thank you for your message, ' + name + '!');
                             // Clear the form
                             document.getElementById('contactForm').reset();
                         } else {
                             alert('Please fill in all fields.');
                         }
                         
                         // You can add further functionality here to send the form data to a server
                     });
                     
                     // Handle "Back to Top" button functionality
                     document.getElementById('backToTop').addEventListener('click', function() {
                         window.scrollTo({
                             top: 0,
                             behavior: 'smooth'
                         });
                     });
                     