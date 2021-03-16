for(let li of document.querySelectorAll('li')) {
    li.appendChild(document.createElement('br'));
    if (li.getAttribute('class') == undefined || li.getAttribute('class') == "") {
        li.setAttribute('class', "unknown");
    }
    if (li.getAttribute('data-element') == "" || li.getAttribute('data-element') == undefined) {
        li.setAttribute('data-element', "none");
    }

    let elements = li.getAttribute('data-element').split(' ');
    
    if (li.getAttribute('data-element') == "none") {
        let circle = document.createElement('div');
        circle.setAttribute('class', 'elem');
        li.appendChild(circle);

        let line = document.createElement('div');
        line.setAttribute('class', 'line');
        circle.appendChild(line)
    }
    else {
        let current = li;
        for (let i in elements) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'elem ' + elements[i]);
            circle.setAttribute('data-element', elements[i]);
            current.appendChild(circle);
        }
    }
}

