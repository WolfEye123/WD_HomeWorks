const ATM = {
    isAuth: false,
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {id: "0025", pin: "123", debet: 675, type: "user1"},
        {id: "0026", pin: "124", debet: 675, type: "user2"},
        {id: "0027", pin: "125", debet: 675, type: "user3"},
        {id: "0028", pin: "126", debet: 675, type: "user4"},
        {id: "0029", pin: "127", debet: 675, type: "user5"},
        {id: "0030", pin: "128", debet: 675, type: "user6"},
        {id: "0031", pin: "129", debet: 675, type: "user7"}
    ],
    // all logs
    ATMLogs: [],
    // authorization
    auth(id, pin) {
        if (!this.isAuth) {
            const userIndex = this.users.findIndex(item => item.id === id);
            const userData = this.users[userIndex];
            if (userIndex >= 0 && userData.pin === pin) {
                console.log('Hello ' + userData.type);
                this.isAuth = true;
                this.currentUser = id;
                this.ATMLogs.push('User ' + id + ' log in');
            }

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
        if(!this.isAuth) {
            console.log('You must sing in');
            this.ATMLogs.push('Someone want to check without login');
            return;
        }
        const userIndex = this.users.findIndex(item => item.id === this.currentUser);
        const userData = this.users[userIndex];
        if (userData.type === 'admin') {
            console.log('Sorry you can do this');
            return;
        }
        if (this.isAuth) {
            console.log('Your debit: $ ' + userData.debet);
            this.ATMLogs.push('User ' + userData.id + ' has withdrawn $ ' + userData.debet);
        }
    },
    // get cash - available for user only
    getCash(amount) {
        if(!this.isAuth) {
            console.log('You must sing in');
            this.ATMLogs.push('Someone try get cash without login');
            return;
        }
        const userIndex = this.users.findIndex(item => item.id === this.currentUser);
        const userData = this.users[userIndex];
        if (userData.type === 'admin') {
            console.log('Sorry you can do this');
            return;
        }
        const ATMCash = this.cash;
        if (this.isAuth && userData.debet < ATMCash && userData.debet >= amount) {
            console.log(userData.type + ' get your cash $ ' + amount);
            this.users[userIndex].debet -= amount;
            this.cash -= amount;
            this.ATMLogs.push('User ' + userData.id + ' get cash');
        } else if (this.isAuth && userData.debet > ATMCash) {
            console.log('Sorry but there is not enough money in the ATM');
            this.ATMLogs.push('User ' + userData.id + ' try get cash. But there is not enough money his the ATM');
        } else if (this.isAuth && userData.debet < amount) {
            console.log('Sorry, but you do not have enough money in your account');
            this.ATMLogs.push('User ' + userData.id + ' try get cash. But you do not have enough money his your account');
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        if(!this.isAuth) {
            console.log('You must sing in');
            this.ATMLogs.push('Someone try load cash without login');
            return;
        }
        const userIndex = this.users.findIndex(item => item.id === this.currentUser);
        const userData = this.users[userIndex];
        if (userData.type === 'admin') {
            console.log('Sorry you can do this');
            return;
        }
        if (this.isAuth) {
            console.log('you set $ ' + amount + ' to your account');
            this.users[userIndex].debet += amount;
            this.cash += amount;
            this.ATMLogs.push('User ' + this.users[userIndex].id + ' add cash to his account');
        } else {
            console.log('You must sing in');
            this.ATMLogs.push('Someone want to load cash without login');
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if(!this.isAuth) {
            console.log('You must sing in');
            this.ATMLogs.push('Someone try load cash without login');
            return;
        }
        const userIndex = this.users.findIndex(item => item.id === this.currentUser);
        const userData = this.users[userIndex];
        if (this.isAuth && userData.type === 'admin') {
            this.cash += amount;
            console.log('ATM cash $ ' + this.cash);
            this.ATMLogs.push('Admin add cash to ATM');
        } else {
            console.log('Sorry you cant do this.');
            this.ATMLogs.push('Someone want to load cash without login like admin');
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if(!this.isAuth) {
            console.log('You must sing in');
            this.ATMLogs.push('Someone try get logs without login');
            return;
        }
        const userIndex = this.users.findIndex(item => item.id === this.currentUser);
        const userData = this.users[userIndex];
        if (this.isAuth && userData.type === 'admin') {
            this.ATMLogs.forEach(function(element) {
                console.log(element);
            });
            this.ATMLogs.push('Admin read logs');
        } else {
            console.log('Sorry you cant do this.');
            this.ATMLogs.push('Someone want to get logs without login like admin');
        }
    },
    // log out
    logout() {
        if (this.isAuth) {
            const userIndex = this.users.findIndex(item => item.id === this.currentUser);
            this.isAuth = false;
            console.log('Goo bye.');
            this.ATMLogs.push('User ' + this.users[userIndex].id + ' logout');
        }
    }
};
