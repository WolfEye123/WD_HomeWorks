const ATM = {
    isAuth: false,
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {id: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // all logs
    ATMLogs: [],
    // authorization
    auth(id, pin) {
        if (!this.isAuth) {
            this.users.forEach((item, i, arr) => {
                if (item.id === id && item.pin === pin) {
                    console.log('Hello ' + this.users[i].type);
                    console.log('Come in');
                    this.isAuth = true;
                    this.currentUser = i;
                    this.ATMLogs.push('User ' + id + ' log in');
                }
            });
            if (!this.isAuth) {
                console.log('Wrong Login or Password. Try again.');
                this.ATMLogs.push('User ' + id + ' try to log in. Fail log in.');
            }
        } else {
            console.log('Another user already login. Try later.');
            this.ATMLogs.push('User ' + id + ' try to log in. Fail log in.');
        }
    },
    // check current debet
    check() {
        if (this.isAuth) {
            const userData = this.users[this.currentUser];
            console.log('Your debit: $ ' + userData.debet);
            this.ATMLogs.push('User ' + userData.id + ' has withdrawn $ ' + userData.debet);
        } else {
            console.log('You must sing in');
            this.ATMLogs.push('Someone want to check without login');
        }
    },
    // get cash - available for user only
    getCash(amount) {
        const userData = this.users[this.currentUser];
        const ATMCash = this.cash;
        if (this.isAuth && userData.debet < ATMCash && userData.debet >= amount) {
            console.log(userData.type + ' get your cash $ ' + amount);
            this.users[this.currentUser].debet -= amount;
            this.cash -= amount;
            this.ATMLogs.push('User ' + userData.id + ' get cash');
        } else if (this.isAuth && userData.debet > ATMCash) {
            console.log('Sorry but there is not enough money in the ATM');
            this.ATMLogs.push('User ' + userData.id + ' try get cash. But there is not enough money his the ATM');
        } else if (this.isAuth && userData.debet < amount) {
            console.log('Sorry, but you do not have enough money in your account');
            this.ATMLogs.push('User ' + userData.id + ' try get cash. But you do not have enough money his your account');
        } else {
            console.log('You must sing in');
            this.ATMLogs.push('User ' + userData.id + ' try get cash without login');
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        if (this.isAuth) {
            console.log('you set $ ' + amount + ' to your account');
            this.users[this.currentUser].debet += amount;
            this.cash += amount;
            this.ATMLogs.push('User ' + this.users[this.currentUser].id + ' add cash to his account');
        } else {
            console.log('You must sing in');
            this.ATMLogs.push('Someone want to load cash without login');
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        const admin = this.users[0].type;
        const user = this.users[this.currentUser].type;
        if (this.isAuth && admin === user) {
            this.cash += amount;
            console.log(this.cash);
            this.ATMLogs.push('Admin add cash to ATM');
        } else {
            console.log('Sorry you cant do this.');
            this.ATMLogs.push('Someone want to load cash without login like admin');
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        const admin = this.users[0].type;
        const user = this.users[this.currentUser].type;
        if (this.isAuth && admin === user) {
            console.log(this.ATMLogs);
            this.ATMLogs.push('Admin read logs');
        } else {
            console.log('Sorry you cant do this.');
            this.ATMLogs.push('Someone want to get logs without login like admin');
        }
    },
    // log out
    logout() {
        if (this.isAuth) {
            this.isAuth = false;
            console.log('Goo bye.');
            this.ATMLogs.push('User ' + this.users[this.currentUser].id + ' logout');
        }
    }
};
