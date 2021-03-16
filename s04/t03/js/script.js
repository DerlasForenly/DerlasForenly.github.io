let current = 0;
let interval;
let left = document.getElementById('left');
let right = document.getElementById('right');
let images = document.getElementsByTagName('img');
let srcs = ["assets/images/pic1.jpg", "assets/images/pic2.jpg", "assets/images/pic3.jpg"]
images[0].src = srcs[current];
left.textContent = "◀";
right.textContent = "▶";

left.onclick = function() {
    interval = clearInterval(interval);
    current--;
    if (current == 3) current = 0;
    else if (current == -1) current = 2;
    images[0].src = srcs[current];
    interval = setInterval(right.onclick, 3000);
}

right.onclick = function() {
    interval = clearInterval(interval);
    current++;
    if (current == 3) current = 0;
    else if (current == -1) current = 2;
    images[0].src = srcs[current];
    interval = setInterval(right.onclick, 3000);
}

interval = setInterval(right.onclick, 3000);
