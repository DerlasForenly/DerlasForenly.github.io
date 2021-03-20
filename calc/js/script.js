let input = document.getElementById('input');
let write = document.getElementsByClassName('write');
let history = document.getElementsByClassName("operation");
let hex_line = document.getElementById('hex_line');

let memory_id = 0;
let memory = "";
let s_id = 1;
let systems = ["bin", "dec", "hex"];
let system_button = document.getElementById('system');

system_button.onclick = () => {
    s_id++;
    if (s_id == 3) {
        s_id = 0;
    }
    system_button.setAttribute('system', systems[s_id]);
    system_button.textContent = systems[s_id];
    if (system_button.textContent == "bin") {
        sign_b.disabled = true;
        per.disabled = true;
        fuct.disabled = true;
        root.disabled = true;
        exp.disabled = true;
        power.disabled = true;
        point.textContent = ".";
        point.disabled = true;
        Bb.disabled = true; 
        Cb.disabled = true; 
        Db.disabled = true; 
        Eb.disabled = true; 
        Fb.disabled = true;
        n2.disabled = true;
        n3.disabled = true;
        n4.disabled = true;
        n5.disabled = true;
        n6.disabled = true;
        n7.disabled = true;
        n8.disabled = true; 
        n9.disabled = true;
    }
    else if (system_button.textContent == "dec") {
        sign_b.disabled = false;
        per.disabled = false;
        fuct.disabled = false;
        root.disabled = false;
        exp.disabled = false;
        power.disabled = false;
        point.textContent = ".";
        Bb.disabled = true; 
        Cb.disabled = true; 
        Db.disabled = true; 
        Eb.disabled = true; 
        Fb.disabled = true;
        n2.disabled = false;
        n3.disabled = false;
        n4.disabled = false;
        n5.disabled = false;
        n6.disabled = false;
        n7.disabled = false;
        n8.disabled = false; 
        n9.disabled = false;
    }
    else if(system_button.textContent == "hex") {
        sign_b.disabled = true;
        per.disabled = true;
        fuct.disabled = true;
        root.disabled = true;
        exp.disabled = true;
        point.textContent = "A";
        point.disabled = false;
        Bb.disabled = false; 
        Cb.disabled = false; 
        Db.disabled = false; 
        Eb.disabled = false; 
        Fb.disabled = false;
        n2.disabled = false;
        n3.disabled = false;
        n4.disabled = false;
        n5.disabled = false;
        n6.disabled = false;
        n7.disabled = false;
        n8.disabled = false; 
        n9.disabled = false;
    }
    else {

    }
}
for (let b of write) {
    b.onclick = () => {
        let inp = input.textContent;
        if (b.textContent == "x!" || b.textContent == "x^n" || b.textContent == "*" || b.textContent == "/") {

        }
        else if (inp === "0") inp = "";
        let t = b.textContent;
        switch (t) {
            case "x!":
                t = "!";
                break;
            case "x^n":
                t = "^";
                break;
            case "x^n":
                t = "^";
                break;
            case ".":
                if (isPointExist(findLastNumber(inp))) {
                    t = "";
                }
                break;
        }
        if (isOperator(t) && isOperator(inp[inp.length - 1])) {
            inp = inp.slice(0, 
            inp.length - 1);
        }
        inp += t;
        input.textContent = inp;               
    }
}
C.onclick  = () => {
    input.textContent = "0";
}
CE.onclick = () => {
    input.textContent = input.textContent.slice(0, 
                        input.textContent.length - 1);
    if (input.textContent.length === 0) input.textContent = "0";
}
mr.onclick = () => {
    if (checkB(input.textContent) != 0) return;
    if (memory == "") memory = getResult(input.textContent);
    else input.textContent += memory;
    console.log("memory read/save: " + memory);
}
mc.onclick = () => {
    if (checkB(input.textContent) != 0) return;
    memory = "";
    console.log("memory clear " + memory);
}
mp.onclick = () => {
    if (checkB(input.textContent) != 0) return;
    if (memory == "") getResult(input.textContent);
    else {
        memory = String(Number(memory) + Number(getResult(input.textContent)));
    }
    console.log("Memory after plus: " + memory);
}
mm.onclick = () => {
    if (checkB(input.textContent) != 0) return;
    if (memory == "") getResult(input.textContent);
    else {
        memory = String(Number(memory) - Number(getResult(input.textContent)));
    }
    console.log("Memory after minus: " + memory);
}
root.onclick = () => {
    let temp = input.textContent;
    let last = findlastExpression(temp);
    temp = temp.slice(0, temp.length - last.length);
    last = "Math.sqrt(" + last + ")";
    console.log(temp + last);
    input.textContent = temp + getResult(last);
}
exp.onclick = () => {
    let temp = input.textContent;
    let last = findlastExpression(temp);
    temp = temp.slice(0, temp.length - last.length);
    last = "Math.exp(" + last + ")";
    console.log(temp + last);
    input.textContent = temp + getResult(last);
}
sign_b.onclick = () => {
    let temp = input.textContent;
    let last = findLastNumber(temp);
    console.log(last);
    if (last == "0" || last == "(0)") {
        return;
    }
    else if (temp[temp.length - 1] == ")") {
        input.textContent = temp.slice(0, temp.length - last.length - 3) + (Number(last));
    }
    else {
        input.textContent = temp.slice(0, temp.length - last.length) + "(" + (-Number(last)) + ")";
    }
}
per.onclick = () => {

    // let temp = input.textContent;
    // let last = findLastNumber(temp);
    // if (last == temp) {
    //     temp = temp + "/" + 100;
    // }
    // else {
    //     let sign = temp.slice(temp.length - last.length - 1, temp.length - last.length);
    //     temp = temp.slice(0, temp.length - last.length - 1);
    //     temp = getResult(temp) + sign + last;
    //     let first = temp.slice(0, temp.length - last.length - 1);
    //     if (sign === "*") {
    //         temp = first + sign + last + "/" + 100;
    //     }
    //     else {
    //         temp = first + sign + first + "*" + last + "/" + 100;
    //     }
    // }
    
    // fillHistory(temp);
    // input.textContent = getResult(temp);
}
equal.onclick = () => {
    if (checkB(input.textContent) != 0) {
        input.textContent = "Error";
        return; 
    }
    let temp = input.textContent;
    console.log(findlastExpression(temp));
    fillHistory(temp);
    if (system_button.textContent == "hex") {
        input.textContent = getResult(temp).toString(16);
    }
    else if (system_button.textContent == "bin") {
        input.textContent = getResult(temp).toString(2);
    }
    else {
        input.textContent = getResult(temp);
    }
}
function getResult(expression) {
    if (checkB(input.textContent) != 0) {
        input.textContent = "Error";
        return; 
    }
    if (system_button.textContent == "bin" || system_button.textContent == "hex") {
        expression = toDec(expression);
    }
    expression = makeCalculations(expression);
    expression = expression.replace("^", "**");
    console.log(eval(expression));
    return eval(expression);
}
function fillHistory(last_exp) {
    for (let i = history.length - 1; i > 0; i--) {
        history[i].textContent = history[i - 1].textContent
    }
    history[0].textContent = last_exp;
}
function isOperator(o) {
    if (o === "+" || 
        o === "-" || 
        o === "*" || 
        o === "/" || 
        o === "^") {
        return true;
    }
    return false;
}
function isPointExist(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] === ".") 
            return true;
    }
    return false;
}
function findLastNumber(expression) {
    let i = expression.length - 1;
    let last = [];
    for (; expression[i] === ")"; i--) {}
    
    for (; i >= 0; i--) {
        if ((isOperator(expression[i]) && expression[i - 1] != "e") || expression[i] == ")" || expression[i] == "(") {
            break;
        }
        else {
            last.push(expression[i]);
        }
    }
    last = last.reverse();
    let res = "";
    for (let i = 0; i < last.length; i++) {res += last[i];}
    return res;
}
function makeCalculations(exp) {
    while (exp.indexOf("!") !== -1) {
        if (exp[exp.indexOf("!") - 1] === ")") {
            let b = 1;
            let i = exp.indexOf("!") - 2;
            for (; b !== 0; i--) {
                if (exp[i] === "(") {
                    b--;
                }
                else if (exp[i] === ")") {
                    b++;
                }
            }
            let r = getResult(exp.slice(i + 1, exp.indexOf("!")));
            exp = exp.replace(exp.slice(i + 1, exp.indexOf("!") + 1), "factorial(" + r + ")");
            break;
        }
        else {
            let last = exp.slice(0, exp.indexOf("!"));
            last = findLastNumber(last);
            exp = exp.replace(last + "!", "factorial(" + last + ")");
        }
    }
    return exp;
}
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
function findExpBeforeLast(exp) {
    let last = findLastNumber(exp);
    exp = exp.slice(0, last.length - 1);
    last = findLastNumber(exp);
    console.log("exp before: " + last);
}
function findlastExpression(exp) {
    let result = [];
    let str = "";
    if (exp[exp.length - 1] == ")") {
        console.log(exp);
        let i = exp.length - 2;
        let b = 1;
        for (; b !== 0; i--) {
            if (exp[i] === "(") {
                b--;
            }
            else if (exp[i] === ")") {
                b++;
            }
            result += exp[i];
        }
        str += "(";
        for (let i = result.length - 2; i >= 0; i--) {
            str += result[i];
        }
        str += ")";
    }
    else {
        str = findLastNumber(exp);
    }
    
    console.log("last exp: " + str);
    return str;
}
function checkB(str) {
    let b = 0;
    for (let i of str) {
        if (i == ")") {
            b++;
        }
        else if (i == "(") {
            b--;
        }
    }
    return b;
}
function toDec(num) {
    let res = "";
    let nums = "";
    let j = 0;
    for (let i = 0; i < num.length; i++) {
        if (isOperator(num[i]) || num[i] == ")" || num[i] == "(") {
            nums += " " + num[i] + " ";
        }
        else {
            nums += num[i];
        }
    }
    nums = nums.split(" ");
    for (let i of nums) {
        if (i != ")" && i != "(" && !isOperator(i) && i != "") {
            if (system_button.textContent == "bin")
                i = parseInt(i, 2);
            else if (system_button.textContent == "hex") {
                i = parseInt(i, 16);
            }
        }
            
        res += i;
    }
    res = res.replace(",", "");    

    console.log(res);
    console.log(nums);




    return res;
}