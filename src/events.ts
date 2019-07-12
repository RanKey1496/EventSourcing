class AccountCreated {

    private id: String;
    private email: String;
    private cellPhone: String;
    private nationalId: Number;
    private address: String;
    public eventName = "AccountCreated"

    constructor(id, email, cellPhone, nationalId, address) {
        this.id = id;
        this.email = email;
        this.cellPhone = cellPhone;
        this.nationalId = nationalId;
        this.address = address;
    }

}

class AccountVerified {
    private accountId: String;
    public eventName = "AccountVerified";

    constructor(accountId) {
        this.accountId = accountId;
    }
}

class UserEmailChanged {
    private accountId: String;
    private newEmail: String;
    public eventName = "UserEmailChanged";

    constructor(accountId, newEmail) {
        this.newEmail = newEmail;
        this.accountId = accountId;
    }
}

class UserMoved {
    private accountId: String;
    private newAddress: String;
    public eventName = "UserMoved"

    constructor(accountId, newAdress) {
        this.newAddress = newAdress;
        this.accountId = accountId;
    }
}

class UserChangedCellPhone {
    private accountId: String;
    private newCellPhone: String;
    public eventName = "UserChangedCellPhone"

    constructor(accountId, newCellPhone) {
        this.newCellPhone = newCellPhone;
        this.accountId = accountId;
    }
}

class AccountDeleted {
    private accountId: String;
    public eventName = "AccountDeleted"

    constructor(accountId) {
        this.accountId = accountId;
    }
}

// Events
const events = [
    new AccountCreated(1, "tito_perez@yahoo.es", "312265656", 1020546587, "Calle Invisible"),
    new AccountVerified(1),
    new AccountCreated(2, "amparo_grisales@gmail.com", "300123123", 1, "Carrera al infierno"),
    new AccountCreated(3, "maelo_ruiz@gmail.com", "312332323", 7054644, "Carrera gordo"),
    new AccountVerified(2),
    new UserEmailChanged(1, "tito_penes@gmail.com"),
    new UserMoved(2, "Tumba")
]

// DB
const users = {}

class User {
    private id: String;
    private email: String;
    private cellPhone: String;
    private nationalId: Number;
    private address: String;
    private verify: Boolean;

    constructor(id, email, cellPhone, nationalId, address, verify) {
        this.id = id;
        this.email = email;
        this.cellPhone = cellPhone;
        this.nationalId = nationalId;
        this.address = address;
        this.verify = verify;
    }
}

for (let i = 0; i < events.length; i++) {
    const element: any = events[i];

    if (element.eventName === "AccountCreated") {
        users[element.id] = new User(
            element.id,
            element.email,
            element.cellPhone,
            element.nationalId,
            element.address,
            false
        );
    }

    if (element.eventName === "AccountVerified") {
        users[element.accountId].verify = true;
    }

    if (element.eventName === "AccountDeleted") {
        delete users[element.accountId];
    }

    if (element.eventName === "UserEmailChanged") {
        users[element.accountId].email = element.newEmail;
    }

    if (element.eventName === "UserMoved") {
        users[element.accountId].address = element.newAddress;
    }

    if (element.eventName === "UserChangedCellPhone") {
        users[element.accountId].cellPhone = element.newCellPhone;
    }
}

console.log(users)