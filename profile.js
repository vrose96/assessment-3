const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');

colorButton.addEventListener('click', function() {
    alert("My favorite color is orange!");
});

placeButton.addEventListener('click', function() {
    alert("My favorite place is Seattle!");
});

ritualButton.addEventListener('click', function() {
    alert("My morning ritual is drinking coffee!");
});