export class CuentaCorriente
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