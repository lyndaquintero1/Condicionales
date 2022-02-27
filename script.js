

let num1, num2, num3;
let NumeroMayor =0;

num1 = Number(prompt('Ingrese número 1'));
num2 = Number(prompt('Ingrese número 2'));
num3 = Number(prompt('Ingrese número 3'));

if((num1>num2) && (num1>num3)){
    NumeroMayor = num1;
}else if((num2>num1) && (num2>num3)){
    NumeroMayor = num2;
}
else{
    NumeroMayor = num3;
}
alert('El número mayor es:' + NumeroMayor);


