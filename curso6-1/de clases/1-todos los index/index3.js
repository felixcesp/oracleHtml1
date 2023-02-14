/* */
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
    
    constructor(){
        this.saldo= 0;
        this.numero= '';
        this.agencia= '';
    }

    depositoEncuenta(valor){
        this.saldo += valor;
    }

    retirarDecuenta(valor){
        this.saldo -= valor;
    }
}

cuentaDeleonardo= new CuentaCorriente();

cuentaDeleonardo.depositoEncuenta(100);
console.log(cuentaDeleonardo);

cuentaDeleonardo.retirarDecuenta(50);
console.log(cuentaDeleonardo);
