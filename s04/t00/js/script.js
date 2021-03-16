function transformation() {
    let current_statement = document.getElementById('hero').textContent;
    if (current_statement == "Bruce Banner") {
        document.getElementById('hero').textContent = "Hulk";
        document.getElementById('hero').style.fontSize = "130px";
        document.getElementById('hero').style.letterSpacing = "6px";
        document.getElementById('lab').style.backgroundColor = '#70964b';
    }
    else {
        document.getElementById('hero').textContent = "Bruce Banner";
        document.getElementById('hero').style.fontSize = "60px";
        document.getElementById('hero').style.letterSpacing = "2px";
        document.getElementById('lab').style.background = "#ffb300";
    }
}