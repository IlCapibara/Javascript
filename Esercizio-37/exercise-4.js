class BankAccount{
    #balance= 0;
    constructor(capital){
        this.#balance=capital;
    }
    deposit(amount){
        return this.#balance += amount;
    }
    withdraw(amount){
        return this.#balance -= amount;
    }
    view(){
        console.log(`€${this.#balance}`);
    }
}
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();