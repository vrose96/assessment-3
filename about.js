console.log("hello world");



function handleSubmit(evt) {
    evt.preventDefault();
    
    // Alert the user that the form has been submitted successfully
    alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImage = document.querySelector('#duck-image');

duckImage.addEventListener('mouseover', function() {
    alert('Wow, you look great!');
});
