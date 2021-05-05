calculate_integral.onclick = () => {
    let selected_method
    let selected_function

    switch (func_integral.value) {
        case "f(x)=exp(-x)":
            selected_function = f1
            break;
        case "f(x)=sin(x)":
            selected_function = f2
            break;
        case "f(x)=exp(-3x + x^2)":
            selected_function = f3
            break;
        case "f(x)=exp(-4x - x^3)":
            selected_function = f4
            break;
        case "y' = -xy":
            selected_function = fxy1
            break;
        default:
            break;
    }

    switch (method_integral.value) {
        case "Riemann sum (left)":
            selected_method = riemann_sum_left
            break;
        case "Riemann sum (right)":
            selected_method = riemann_sum_right
            break;
        case "Riemann sum (middle)":
            selected_method = riemann_sum_middle
            break;
        case "Trapezoidal rule":
            selected_method = trapezoidal_rule
            break;
        case "Simpson's rule":
            selected_method = simpsons_rule
            break;
        default:
            break;
    }

    let result = selected_method(
        selected_function, 
        parseFloat(a_integral.value), 
        parseFloat(b_integral.value), 
        parseFloat(N_integral.value)
    )

    render_result_integral(result)
}

calculate_equation.onclick = () => {
    let selected_method
    let selected_function

    switch (equation.value) {
        case "y' = -xy":
            selected_function = fxy1
            break;
        case "y' = y + x":
            selected_function = fxy2
            break;
        case "y' = (3x - 12(x^2))":
            selected_function = fxy3
            break;
        case "y' = x * x - y":
            selected_function = fxy4
            break;
        case "y' = x - y + xy":
            selected_function = fxy5
            break;
        case "y' = 6x^2 + 5xy":
            selected_function = fxy6
            break;
        case "y' = y":
            selected_function = fxy7
            break;
        default:
            break;
    }

    switch (method_equation.value) {
        case "Euler method":
            selected_method = Euler_method
            break;
        case "Runge-Kutta2":
            selected_method = Runge_Kutta2
            break;
        case "Runge-Kutta3":
            selected_method = Runge_Kutta3
            break;
        case "Runge-Kutta4":
            selected_method = Runge_Kutta4
            break;
        default:
            break;
    }

    let result = selected_method(
        selected_function, 
        parseFloat(a_equation.value), 
        parseFloat(b_equation.value), 
        parseFloat(y0_equation.value), 
        parseFloat(N_equation.value)
    )

    render_result_equation(result)
}

compare_integral.onclick = () => {
    let selected_function
    let result = []

    switch (func_integral.value) {
        case "f(x)=exp(-x)":
            selected_function = f1
            break;
        case "f(x)=sin(x)":
            selected_function = f2
            break;
        case "f(x)=exp(-3x + x^2)":
            selected_function = f3
            break;
        case "f(x)=exp(-4x - x^3)":
            selected_function = f4
            break;
        case "y' = -xy":
            selected_function = fxy1
            break;
        default:
            break;
    }

    result.push(
        riemann_sum_left
        (
            selected_function, 
            parseFloat(a_integral.value), 
            parseFloat(b_integral.value), 
            parseFloat(N_integral.value)
        )
    )
    result.push(
        riemann_sum_right
        (
            selected_function, 
            parseFloat(a_integral.value), 
            parseFloat(b_integral.value), 
            parseFloat(N_integral.value)
        )
    )
    result.push(
        riemann_sum_middle
        (
            selected_function, 
            parseFloat(a_integral.value), 
            parseFloat(b_integral.value), 
            parseFloat(N_integral.value)
        )
    )  
    result.push(
        trapezoidal_rule
        (
            selected_function, 
            parseFloat(a_integral.value), 
            parseFloat(b_integral.value), 
            parseFloat(N_integral.value)
        )
    )  
    result.push(
        simpsons_rule
        (
            selected_function, 
            parseFloat(a_integral.value), 
            parseFloat(b_integral.value), 
            parseFloat(N_integral.value)
        )
    )     

    render_result_table_integral(result)
}
