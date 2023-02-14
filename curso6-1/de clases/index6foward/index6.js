import {CuentaCorriente} from './CuentaCorriente.js'


const cuentaDeleonardo= new CuentaCorriente();

let saldo= cuentaDeleonardo.verSaldo();
console.log('el saldo actuala es '+ saldo);


saldo= cuentaDeleonardo.depositoEncuenta(100);
console.log('el saldo actual es '+ saldo);



saldo= cuentaDeleonardo.retirarDecuenta(100);
console.log('el saldo actuala es '+ saldo);


saldo= cuentaDeleonardo.depositoEncuenta(10);
console.log('el saldo actuala es '+ saldo);

