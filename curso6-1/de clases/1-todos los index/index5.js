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
        return this.#saldo;
    }

    retirarDecuenta(valor){
        if (valor <= this.#saldo)
           this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
}

cuentaDeleonardo= new CuentaCorriente();

let saldo= cuentaDeleonardo.verSaldo();
console.log('el saldo actuala es '+ saldo);


saldo= cuentaDeleonardo.depositoEncuenta(100);
console.log('el saldo actual es '+ saldo);



saldo= cuentaDeleonardo.retirarDecuenta(100);
console.log('el saldo actuala es '+ saldo);


saldo= cuentaDeleonardo.depositoEncuenta(10);
console.log('el saldo actuala es '+ saldo);

