let counter = 0;
let images = document.getElementsByTagName('img');
let status = document.getElementById('status');

let observer = new IntersectionObserver(function(entries) {
    for (let i of entries)
        if (i.intersectionRatio > 0) {
            if (i.target.getAttribute('loaded') === 'no') {
                counter++;
                let status_s = `${counter} images loaded from ${images.length}`;
                i.target.setAttribute('loaded', 'yes');
                if (counter === 20) {
                    status.textContent = status_s;
                    status.style.background = "lightgreen";
                    setTimeout(function() {
                        status.style.display = "none";
                    }, 3000);
                }
                else status.textContent = status_s;
            }
            i.target.src = i.target.getAttribute('data-src');
        }
});

for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('id', `id${i}`);
    images[i].setAttribute('loaded', 'no');
    observer.observe(images[i]);
}
