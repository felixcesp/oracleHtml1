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
    #saldo;
    agencia;
    
    constructor(){
        this.#saldo= 0;
        this.numero= '';
        this.agencia= '';
    }

    depositoEncuenta(valor){
        if (valor > 0)
        this.#saldo += valor;
    }

    retirarDecuenta(valor){
        if (valor <= 0)
        this.#saldo -= valor;
    }
}

cuentaDeleonardo= new CuentaCorriente();

cuentaDeleonardo.depositoEncuenta(100);
console.log(cuentaDeleonardo);

cuentaDeleonardo.retirarDecuenta(50);
console.log(cuentaDeleonardo);
