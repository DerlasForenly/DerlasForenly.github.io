let block = document.getElementsByClassName('block');
for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('dblclick', function (e) {
        if (block[i].getAttribute('active') === "on") {
            block[i].setAttribute('active', 'off');
        }
        else if (block[i].getAttribute('active') === "off") {
            block[i].setAttribute('active', 'on');
        }
        else {
            console.log("Error");
        } 
    });
}

for (let i = 0; i < block.length; i++) {
    block[i].onmousedown = function() {
        if (block[i].getAttribute('active') === "off") {
            return;
        }
        function move(e) {
            block[i].style.left = e.pageX - block[i].offsetWidth / 2 + "px";
            block[i].style.top = e.pageY - block[i].offsetHeight / 2 + "px";
        }
        
        document.onmousemove = function(e) {
            move(e);
        }
        block[i].onmouseup = function() {
            document.onmousemove = null;
            block[i].onmouseup = null;
        }
    }    
}