let title = [
    {
        name: "Administrator: Post cringe again", 
        date: "April 48, 2077", 
        actors: ["Admin Cringer", "Choco milk", "Capitan America", "Souce Carbonara", "Last Post"], 
        desc: "An Administrator again posted cringe. Its time to delete post, but it \
        is not so easy. This story about the battle. Hm, decription is too short, but \
        i think it is not a problem",
        pic: "assets/images/pic0.jpg"
    },
    {
        name: "Monster drinker: start", 
        date: "January 23, 2048", 
        actors: ["Monster can", "Girl", "Work Bench Ivanovich", "Hidden Camera", "Weird noises on back"], 
        desc: "Sibid wapa 14\
        Monster Energy is an energy drink that was introduced by Hansen Natural \
        Company (now Monster Beverage Corporation) in April of 2002. \
        As of 2019, Monster Energy has a 35% share of the energy drink market, \
        the second highest share after Red Bull.\n\
        There are 34 different drinks under the Monster brand in North America, \
        including its core Monster Energy line, Java Monster, Juice, Hydro, \
        Extra Strength, Dragon Tea, Muscle, Import, and Rehab.\
        Monster Energy is known for their sponsorship and support \
        for extreme sports events, such as Bellator MMA, Ultimate \
        Fighting Championship, Moto GP, BMX, motocross, speedway, \
        skateboarding, snowboarding and the Monster Energy NASCAR Cup \
        Series (2017–19). Monster currently sponsors the FIA World \
        Rallycross Championship, and the PBR: Unleash the Beast \
        Professional Bull Riders tour, in addition to sponsoring the \
        bag of professional golfer Tiger Woods. The company also has a \
        strong presence in the music industry, promoting a number of music \
        bands around the world in the Monster Energy Outbreak Tour, like \
        Fetty Wap, Iggy Azalea, 21 Savage, Asking Alexandria, Anthrax, \
        Strange Music, The Word Alive, Machine Gun Kelly, Suicidal \
        Tendencies, Maximum the Hormone, Korn, and Five Finger Death Punch.",
        pic: "assets/images/pic1.jpg"
    },
    {
        name: "Compressor: Last", 
        date: "December 11, 2021", 
        actors: ["compressor boi", "Hand Master", "Weird Cat", "White background", "Text Shower"], 
        desc: "Some story about something than had been compressed. \
        About compressor: A compressor is a mechanical device that \
        increases the pressure of a gas by reducing its volume. An \
        air compressor is a specific type of gas compressor.\
        Compressors are similar to pumps: both increase the pressure \
        on a fluid and both can transport the fluid through a pipe. \
        As gases are compressible, the compressor also reduces the volume of \
        a gas. Liquids are relatively incompressible; while some can be \
        compressed, the main action of a pump is to pressurize and \
        transport liquids.\n\
        Many compressors can be staged, that is, the fluid is compressed \
        several times in steps or stages, to increase discharge pressure. \
        Often, the second stage is physically smaller than the primary stage, \
        to accommodate the already compressed gas. Each stage further \
        compresses the gas and increases pressure.",
        pic: "assets/images/pic3.jpg"
    },
]

let title_name = document.getElementById('title-name');
let date = document.getElementById('date');
let description = document.getElementById('description');
let pic = document.getElementById('pic');
let actors = document.getElementsByClassName('actor');
let titles = [];
titles.push(document.getElementById('title0'));
titles.push(document.getElementById('title1'));
titles.push(document.getElementById('title2'));

title0.onclick = function() {
    fill(title[0]);
    titles[0].setAttribute('active', 'on');
    titles[1].setAttribute('active', 'off');
    titles[2].setAttribute('active', 'off');
}
title1.onclick = function() {
    fill(title[1]);
    titles[0].setAttribute('active', 'off');
    titles[1].setAttribute('active', 'on');
    titles[2].setAttribute('active', 'off');
}
title2.onclick = function() {
    fill(title[2]);
    titles[0].setAttribute('active', 'off');
    titles[1].setAttribute('active', 'off');
    titles[2].setAttribute('active', 'on');
}

function fill(title_current) {
    title_name.textContent = title_current.name;
    date.textContent = title_current.date;
    description.textContent = title_current.desc;
    pic.src = title_current.pic;
    for (let i in actors) {
        actors[i].textContent = title_current.actors[i];
        if (actors[i].textContent == "" || actors[i].textContent == undefined) {
            actors[i].display = "none";
        }
    }
}

for (let i = 0; i < title.length; i++) {
    titles[i].textContent = title[i].name;
}
fill(title[0]);
