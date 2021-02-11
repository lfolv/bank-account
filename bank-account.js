export class BankAccount {
  constructor() {
    this._balance = 0
  }

  open() {
  }

  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit(amount) {
    this._balance += amount
  }

  withdraw() {
    throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
