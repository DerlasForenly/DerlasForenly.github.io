let result_div_integral = document.getElementById('result_div_integral')
let result_div_equation = document.getElementById('result_div_equation')
let integral_field = document.getElementById('integral_field')
let equation_field = document.getElementById('equation_field')
let integral_radio = document.getElementById('integral_radio')
let equation_radio = document.getElementById('equation_radio')
let a_integral = document.getElementById('a_integral')
let b_integral = document.getElementById('b_integral')
let N_integral = document.getElementById('N_integral')
let a_equation = document.getElementById('a_equation')
let b_equation = document.getElementById('b_equation')
let N_equation = document.getElementById('N_equation')
let y0_equation = document.getElementById('y0_equation')
let method_integral = document.getElementById('method_integral')
let func_integral = document.getElementById('function_integral')
let method_equation = document.getElementById('method_equation')
let equation = document.getElementById('equation')
let compare_equation = document.getElementById('compare_equation')
let compare_integral = document.getElementById('compare_integral')

equation_field.style.display = "none";
integral_field.style.display = "none";

function deleteChilds(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

integral_radio.onchange = () => {
    integral_field.style.display = "flex";
    equation_field.style.display = "none";
}

equation_radio.onchange = () => {
    integral_field.style.display = "none";
    equation_field.style.display = "flex";
}

function render_result_integral(value) {
    deleteChilds(result_div_integral)

    let label = document.createElement('label')
    label.setAttribute('class', 'result_label')
    label.textContent = `I = ${value}`

    result_div_integral.appendChild(label);
}

function render_result_table_integral(result) {
    deleteChilds(result_div_integral)

    let data = [
        "\\",
        "Riemann sum (left)",
        "Riemann sum (right)",
        "Rienmann sum (middle)",
        "Trapezoidal rule",
        "Simpson's rule"
    ]
    
    let table = document.createElement('table')
    table.setAttribute('cellspacing', '0')

    let tr = document.createElement('tr')
    for (let i = 0; i < 5 + 1; i++) {
        let th = document.createElement('th')
        th.textContent = data[i]
        tr.appendChild(th)
    }
    table.appendChild(tr)

    tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = "I"
    tr.appendChild(td)
    for (let i = 0; i < 5; i++) {
        td = document.createElement('td')
        td.textContent = result[i]
        tr.appendChild(td)
    }
    table.appendChild(tr)

    result_div_integral.appendChild(table)
}

function render_result_equation(value) {
    deleteChilds(result_div_equation)

    let table = document.createElement('table')
    table.setAttribute('cellspacing', '0')

    const labels = []

    for (let i = 0; i < value.length; i++) {
        let tr = document.createElement('tr')

        let td = document.createElement('td')

        labels.push(`y${i + 1}`)

        td.textContent = labels[i]
        tr.appendChild(td)

        td = document.createElement('td')
        td.textContent = `${value[i]}`
        tr.appendChild(td)

        table.appendChild(tr)
    }

    result_div_equation.appendChild(table)

    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'chart')

    result_div_equation.appendChild(canvas)

    let chart = new Chart(document.getElementById('chart').getContext('2d'), {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: method_equation.value,
                backgroundColor: 'rgb(37, 238, 245)',
                borderColor: 'rgb(37, 238, 245)',
                data: value
            }]
        }
    })
}
