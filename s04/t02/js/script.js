
let data = [
    {name: "Black\nPanther", str: 66, age: 53},
    {name: "Captain\nAmerica", str: 79, age: 137},
    {name: "Captain\nMarvel", str: 97, age: 27},
    {name: "Hulk", str: 80, age: 49},
    {name: "Iron\nMan", str: 88, age: 48},
    {name: "Spider-\nMan", str: 78, age: 16},
    {name: "Thanos", str: 99, age: 1000},
    {name: "Thor", str: 95, age: 1000},
    {name: "Yon-\nRogg", str: 73, age: 52},
]

let sorting = document.createElement('label');
let parameter = "Name";
let order = "ASC";
let o = 0;

let body = document.getElementsByTagName('body');
let head = document.getElementsByTagName('h1');
let main = document.getElementsByTagName('main');
let table = document.createElement('table');
let row = [];
let row_data = [];
let row_header = [];
let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');
let temp = 0;

placeholder.textContent = "";
notification.textContent = "";
placeholder.appendChild(table);
for (let i = 0; i < 10; i++) {
    row.push(document.createElement('tr'));
    table.appendChild(row[i]);
}
for (let j = 0; j < 3; j++) {
    row_header.push(document.createElement('th'));
    row[0].appendChild(row_header[j]);
} 

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 3; j++) {
        row_data.push(document.createElement('td'));
        row[i].appendChild(row_data[temp]);
        temp += 1;
    }
} 
function fill() {
    if (o == 0) {
        order = "ASC";
    }
    else {
        order = "DESC";
    }
    sorting.textContent = `Sorting by ${parameter}, order: ${order}`;

    row_header[0].textContent = "Name";
    row_header[1].textContent = "Strenght";
    row_header[2].textContent = "Age";

    for (let i = 0; i < 27; i+=3) {
        row_data[i].textContent = data[i / 3].name;
        row_data[i + 1].textContent = data[i / 3].str;
        row_data[i + 2].textContent = data[i / 3].age;
    }
}

notification.appendChild(sorting);

function sort(arr, property, o) {
    function ASC(field) {
        return (a, b) => (a[field] < b[field] ? 1 : -1);
    }
    function DESC(field) {
        return (a, b) => (a[field] > b[field] ? 1 : -1);
    }

    if (o == 0) arr.sort(ASC(property));
    else arr.sort(DESC(property));
}

row_header[0].onclick = function() {
    console.log('col0');
    sort(data, "name", o);
    if (o == 0) o++
    else o--;
    fill();
}
row_header[1].onclick = function() {
    console.log('col1');
    sort(data, "str", o);
    if (o == 0) o++
    else o--;
    fill();
}
row_header[2].onclick = function() {
    console.log('col2');
    sort(data, "age", o);
    if (o == 0) o++
    else o--;
    fill();
}

fill();
sort(data, order);
