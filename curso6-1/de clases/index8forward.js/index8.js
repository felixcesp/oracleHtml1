import {Cliente} from './NewCliente3.js'
import {CuentaCorriente} from './CuentaCorriente3.js'

const cliente= new Cliente; 
cliente.nombreCliente = 'leonardo';
cliente.dniCliente = '13804050';
cliente.ruthCliente ='123224'

const cuentaDeleonardo= new CuentaCorriente();
cuentaDeleonardo.numero ='1';
cuentaDeleonardo.agencia ='001'
cuentaDeleonardo.setCliente = cliente;


/*
let saldo= cuentaDeleonardo.verSaldo();
console.log('el saldo actuala es (cuentaDeLeonardo) '+ saldo);

saldo = cuentaDeleonardo.depositoEncuenta(150);
console.log('el saldo actuala es (cuentaDeLeonardo) '+ saldo);
*/
const cliente2= new Cliente;
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16969808';
cliente2.ruthCliente ='8989'

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero ='2';
cuentaDeMaria.agencia ='002'
cuentaDeMaria.setCliente = cliente2;

console.log(cuentaDeMaria.getCliente);

cuentaDeMaria.setCliente = 0;
console.log(cuentaDeMaria.getCliente); 

/*
cuentaDeleonardo.transferirParaCuenta(100, cuentaDeMaria);

const saldoDeMaria= cuentaDeMaria.verSaldo();
console.log('el saldo actual (saldoDeMaria)'+ saldoDeMaria);

const saldoDeLeonardo= cuentaDeleonardo.verSaldo();
console.log('el saldo actual (saldoDeLeonardo)'+ saldoDeLeonardo);
*/