class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}


class CuentaCorriente
{
    numero;
    saldo;
    agencia;  

    depositoEncuenta(valor){
        this.saldo += valor
    }
}

const cliente1= new Cliente();
cliente1.nombreCliente="jose";
cliente1.dniCliente="13232";
cliente1.rutCliente="2345";

const cuentaCorriente1= new CuentaCorriente();
cuentaCorriente1.numero="232323"
cuentaCorriente1.saldo=2000;
cuentaCorriente1.agencia=1001;



const cliente2= new Cliente();
cliente2.nombreCliente="Leonardo";
cliente2.dniCliente="13804050";
cliente2.rutCliente="5245";

const cuentaCorriente2= new CuentaCorriente()
cuentaCorriente2.numero="123434343"
cuentaCorriente2.saldo=1000;
cuentaCorriente2.agencia=1002;



console.log(cliente1);
console.log(cliente2);
cuentaCorriente2.depositoEncuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEncuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEncuenta(500);
console.log(cuentaCorriente2.saldo);

