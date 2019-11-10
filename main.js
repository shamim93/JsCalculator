	function funcshift(shiftDown) {
    var shift = document.getElementById("shiftBtn") ;
    var arr = document.getElementsByTagName("td") ;
    if (shiftDown == 1) {
        shift.setAttribute("onclick", "funcshift(0)") ;
        shift.style.backgroundColor = "red" ;
        arr[2].innerHTML = "sin<sup>-1</sup>" ;
        arr[2].setAttribute("onclick", "solve1('sin')") ;
        arr[3].innerHTML = "cos<sup>-1</sup>" ;
        arr[3].setAttribute("onclick", "solve1('cos')") ;
        arr[4].innerHTML = "tan<sup>-1</sup>" ;
        arr[4].setAttribute("onclick", "solve1('tan')") ;
        arr[10].innerHTML = "ln" ;
        arr[10].setAttribute("onclick", "log(0)") ;
        arr[28].innerHTML = "\u0065" ;
        arr[28].setAttribute("onclick", "piOrE('e')") ;
    } else {
        shift.setAttribute("onclick", "funcshift(1)") ;
        shift.style.backgroundColor = "green" ;
        arr[2].innerHTML = "sin" ;
        arr[2].setAttribute("onclick", "solve('sin')") ;
        arr[3].innerHTML = "cos" ;
        arr[3].setAttribute("onclick", "solve('cos')") ;
        arr[4].innerHTML = "tan" ;
        arr[4].setAttribute("onclick", "solve('tan')") ;
        arr[10].innerHTML = "log" ;
        arr[10].setAttribute("onclick", "log(1)") ;
        arr[28].innerHTML = "\u03C0" ;
        arr[28].setAttribute("onclick", "piOrE('pi')") ;
    }
}
function input(add) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value += add ;
    y.innerHTML += add ;
}
function factorial(fact) {
    if (Number.isInteger(fact)) {
        if (fact < 2) return 1 ;
        return fact * factorial(fact - 1) ;
    }
}
function sqrt() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value += "sqrt(" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * Math.sqrt(" : "Math.sqrt(" ;
}
function leftParen() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value += "(" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * (" : "(" ;
}
function piOrE(pii) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    if (pii == "pi") {
        x.value += "\u03C0" ;
        y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
        " * Math.PI" : "Math.PI" ;
    } else {
        x.value += "\u0065" ;
        y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
        " * Math.E" : "Math.E" ;
    }
}
function log(logfn) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    if (logfn == 1) {
        x.value += "log(" ;
        y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
        " * Math.log10(" : "Math.log10(" ;
    } else {
        x.value += "ln(" ;
        y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
        " * Math.log(" : "Math.log(" ;
    }
}
function solve(calculate) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value += calculate + "(" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * Math." + calculate + "(Math.PI / 180 * " : "Math." + calculate + "(Math.PI / 180 * " ;
}
function solve1(calculateB) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value += calculateB + "\u207B\u00B9("
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * 180 / Math.PI * Math.a" + calculateB + "(" : "180 / Math.PI * Math.a" + calculateB + "(" ;
}
function divmul(divmul) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    if (divmul == "mult") {
        x.value += "\u00D7" ;
        y.innerHTML += "*" ;
    } else {
        x.value += "\u00F7" ;
        y.innerHTML += "/"
    }
}
function del() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    var z = document.getElementById("Answer") ;
    if (x.value.slice(-3) == "Ans") {
        y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
        y.innerHTML.slice(0, -(z.innerHTML.length + 3)) : y.innerHTML.slice(0, -(z.innerHTML.length)) ;
        x.value = x.value.slice(0, -3) ;
    } else if (x.value == "Error!") {
        ac() ;
    } else {
        switch (y.innerHTML.slice(-2)) {
            case "* ": // sin cos tan
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
            y.innerHTML.slice(0, -28) : y.innerHTML.slice(0, -25) ;
            x.value = x.value.slice(0, -4) ;
            break ;
            case "n(":
            case "s(": // asin acos atan
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-7, -6))) ? 
            y.innerHTML.slice(0, -29) : y.innerHTML.slice(0, -26) ;
            x.value = x.value.slice(0, -6) ;
            break ;
            case "0(": // log
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
            y.innerHTML.slice(0, -14) : y.innerHTML.slice(0, -11) ;
            x.value = x.value.slice(0, -4) ;
            break ;
            case "g(": // ln
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
            y.innerHTML.slice(0, -12) : y.innerHTML.slice(0, -9) ;
            x.value = x.value.slice(0, -3) ;
            break ;
            case "t(": // sqrt
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-6, -5))) ? 
            y.innerHTML.slice(0, -13) : y.innerHTML.slice(0, -10) ;
            x.value = x.value.slice(0, -5) ;
            break ;
            case "PI": // pi
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
            y.innerHTML.slice(0, -10) : y.innerHTML.slice(0, -7) ;
            x.value = x.value.slice(0, -1) ;
            break ;
            case ".E": // e
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
            y.innerHTML.slice(0, -9) : y.innerHTML.slice(0, -6) ;
            x.value = x.value.slice(0, -1) ;
            break ;
            default:
            y.innerHTML = y.innerHTML.slice(0, -1) ;
            x.value = x.value.slice(0, -1) ;
        } ;
    }
}
function ac() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    x.value = y.innerHTML = "" ;
}

function ans() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    var z = document.getElementById("Answer") ;
    x.value += "Ans" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * " + z.innerHTML : z.innerHTML ;
}

function equal() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("area") ;
    var z = document.getElementById("Answer") ;
    for (var i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) {
        y.innerHTML += ")" ;
    }
    if (y.innerHTML != "") {
        x.value = y.innerHTML = z.innerHTML = eval(y.innerHTML
        .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
        .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
        ) ;
    }
    if (!isFinite(x.value)) x.value = "Error!" ;
}