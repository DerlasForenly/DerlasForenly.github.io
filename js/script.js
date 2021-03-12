class Timer {
    constructor (title, delay, stopCount, player) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.player = player;
        return this;
    }

    start() {
        console.log("Timer " + this.title + " statred (delay=" + this.delay + ", stopCount=" + this.stopCount + ")");
        this.interval = setInterval(this.tick, this.delay, this);
    }

    tick = function(timer) {
        timer.stopCount--;
        console.log("Timer " + timer.title + " Tick! | cycles left " + timer.stopCount);
        if (timer.stopCount <= 0) {
            if (timer.title == "Lose calories") {
                if (timer.player.calories >= 0) {
                    timer.player.calories -= 200;
                    if (timer.player.calories < 0) {
                        timer.player.calories = 0;
                    }
                    timer.player.update();
                }
                
                timer.stopCount = 60;
            }
            else {
                timer.stop();
            }
        }
    }

    stop = function () {
        if (this.title === "Become hungry") {
            this.player.statement = "I'm still hungry";
        }

        if (this.player.statement === "Posting cringe...") {
            this.player.posts += 1;
            this.player.memesQuality += 2;
            this.player.calories -= 5;
            if (this.player.calories <= 0) this.player.calories = 0;
        }
        else if (this.player.statement === "Khhh-chh... bang-g-g-g... Evil is defeated!") {
            this.player.memesQuality += 4;
            this.player.calories -= 50;
            if (this.player.calories <= 0) this.player.calories = 0;
        }
        else if (this.player.statement === "Nom nom nom") {
            this.player.calories += 200;
        }

        if (this.player.calories < 500) {
            this.player.statement = "I'm still hungry";
            document.getElementById('gif').src = "assets/images/awake.gif";
        }
        else {
            this.player.statement = "I'm awake now";
            document.getElementById('gif').src = "assets/images/awake.gif";
        }
        this.interval = clearInterval(this.interval);
        console.log("Timer " + this.title + " stopped");
        this.player.update();
    }
}

function runTimer(id, delay, counter, player) {
    new Timer(id, delay, counter, player).start();
}

class Human {
    constructor (firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
        this.statement = "I'm awake now";
        this.evolved = false;
        this.type = "Human";
        this.timer = new Timer("Lose calories", 1000, 60, this);

        this.timer.start();
        
        runTimer("Become hungry", 1000, 5, this);
        this.update();
        return this;
    }

    sleepFor(seconds) {
        this.statement = "I'm sleeping";
        runTimer("Sleeping", 1000, seconds, this);
        document.getElementById('gif').src = "assets/images/sleep.gif";
        this.update();
    }

    feed() {
        if (this.calories >= 500) {
            this.statement = "I'm not hungry";
            document.getElementById('gif').src = "assets/images/awake.gif";
            runTimer("Not hungry", 1000, 2, this);
        }
        else {
            this.statement = "Nom nom nom";
            document.getElementById('gif').src = "assets/images/eating.gif";
            runTimer("Feeding", 1000, 10, this);
        }
        this.update();
    }

    evolution() {
        if (this.calories >= 500) {
            console.log("Calories >= 500");
            document.getElementById('superhero_id').style.display = "flex";
            document.getElementById('evolution').style.display = "none";
            document.getElementById('pic').src = "assets/images/admin.jpg";
            this.evolved = true;
            this.timer.stop();
            return new Superhero(this.firstName, this.lastName, this.gender, this.age);
        }
    }

    update() {
        document.querySelector('.f_name').innerHTML = this.firstName;
        document.querySelector('.l_name').innerHTML = this.lastName;
        document.querySelector('.gender').innerHTML = this.gender;
        document.querySelector('.age').innerHTML = this.age;
        document.querySelector('.calories').innerHTML = this.calories;
        document.querySelector('.statement').innerHTML = this.statement;
        document.querySelector('h1').innerHTML = this.type;
    }
    
}

class Superhero extends Human{
    constructor (firstName, lastName, gender, age) {
        super(firstName, lastName, gender, age);
        this.posts = 0;
        this.memesQuality = 0;
        this.type = "Superhero Meme-administrator";

        this.update();
        return this;
    }
    
    fly() {
        this.statement = "I'm flying!";
        runTimer("Flying", 1000, 10, this);
        document.getElementById('gif').src = "assets/images/flying.gif";
        this.update();
    }

    fightWithEvil() {
        this.statement = "Khhh-chh... bang-g-g-g... Evil is defeated!";
        runTimer("Fighting", 1000, 2, this);
        document.getElementById('gif').src = "assets/images/fight.gif";
        this.update();
    }

    postCringe() {
        this.statement = "Posting cringe...";
        runTimer("Posting", 1000, 2, this);
        document.getElementById('gif').src = "assets/images/post.gif";
        this.update();
    }

    update() {
        document.querySelector('.f_name').innerHTML = this.firstName;
        document.querySelector('.l_name').innerHTML = this.lastName;
        document.querySelector('.gender').innerHTML = this.gender;
        document.querySelector('.age').innerHTML = this.age;
        document.querySelector('.calories').innerHTML = this.calories;
        document.querySelector('.statement').innerHTML = this.statement;
        document.querySelector('.posts').innerHTML = this.posts;
        document.querySelector('.quality').innerHTML = this.memesQuality;
        document.querySelector('h1').innerHTML = this.type;
    }
}

let firstName = prompt("Enter First name: ");
let lastName = prompt("Enter Last name: ");
let gender = prompt("Enter gender: ");
let age = prompt("Enter age: ");

let player = new Human(firstName, lastName, gender, age);

feed_b.onclick = function() {
    if (player.statement === "I'm awake now" || player.statement === "I'm still hungry")
    player.feed();
}

sleep_b.onclick = function() {
    if (player.statement === "I'm awake now" || player.statement === "I'm still hungry")
    player.sleepFor(document.querySelector('#number_i').value);
}

evolution.onclick = function() {
    if (player.statement === "I'm awake now" && player.calories >= 500) {
        console.log("Start evolution")
        player = player.evolution();
    }
}

fly.onclick = function() {
    if (player.statement === "I'm awake now" || player.statement === "I'm still hungry") {
        player.fly();
    }
}

fight.onclick = function() {
    if (player.statement === "I'm awake now" || player.statement === "I'm still hungry") {
        player.fightWithEvil();
    }
}

post.onclick = function() {
    if (player.statement === "I'm awake now" || player.statement === "I'm still hungry") {
        player.postCringe();
    }
}
