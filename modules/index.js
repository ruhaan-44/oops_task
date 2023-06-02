var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var sub = document.getElementById("sub");
var dis = document.getElementById("dis")
export function result (){

        if(operator.value == "+"){
            return dis.innerHTML = parseInt(num1.value)+parseInt(num2.value)
        }
        if(operator.value == "-"){
            return dis.innerHTML = num1.value-num2.value
        }
        if(operator.value == "*"){
            return dis.innerHTML = num1.value*num2.value
        }
        if(operator.value == "/"){
            return dis.innerHTML = num1.value/num2.value
        }
    
}

export {num1,num2,operator,dis,sub}