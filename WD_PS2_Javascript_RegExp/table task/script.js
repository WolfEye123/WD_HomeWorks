const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];

// object selector
const total = document.getElementById("total");
// new NAMES
let array = GOODS;
// amount of goods
let sum = 0;
// sortByName sortFlag
let sortFlag = true;

// initial NAMES output
array.forEach(function (item) {
    createTable(item);
    total.innerHTML = sum + "$";
});

/**
 * eventListener
 * @type {HTMLElement}
 */
const input = document.getElementById("input");
input.oninput = function () {
    filterOut();
};

/**
 * eventListener
 * @type {HTMLElement}
 */
const select = document.getElementById("select");
select.onchange = function () {
    filterOut();
};

/**
 * eventListener
 * @type {HTMLElement}
 */
const sortCategory = document.getElementById("category");
sortCategory.onclick = function () {
    sortByCategory();
};

/**
 * eventListener
 * @type {HTMLElement}
 */
const sortName = document.getElementById("name");
sortName.onclick = function () {
    sortByName();
};

/**
 * sorting method by name
 * @param categoryFlag
 */
function sortByName(categoryFlag) {
    if (sortFlag === true) {
        array.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            return -1;
        });
        filterOut();
        sortFlag = !sortFlag;
    } else {
        array.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            return -1;
        });
        filterOut();
        sortFlag = !sortFlag;
    }
}

/**
 * sorting method by category
 * @param categoryFlag
 */
function sortByCategory(categoryFlag) {
    if (sortFlag) {
        array.sort(function(a,b){
            if (a.category > b.category){
                return 1;
            }
            return -1;
        });
        filterOut();
        sortFlag = !sortFlag;
    } else {
        array.sort(function(a,b){
            if (a.category < b.category){
                return 1;
            }
            return -1;
        });
        filterOut();
        sortFlag = !sortFlag;
    }
}

/**
 * input filtering method
 */
function filterOut() {
    let tbody = document.getElementById("tbody");
    if (input.value === "") {
        filter(tbody);
    } else {
        filter(tbody);
    }
}

function extracted() {
    array.forEach(function (item) {
        if (item.name.toLowerCase().indexOf(input.value) !== -1
            && item.category.indexOf(select.value) !== -1) {
            createTable(item);
        }
    });
}

/**
 * category filtering method
 * @param tbody
 */
function filter(tbody) {
    sum = 0;
    tbody.innerHTML = "";
    if (select.value === "") {
        array.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1) {
                createTable(item);
            }
        });
    }
    if (select.value === "supplies") {
        extracted();
    }
    if (select.value === "furniture") {
        extracted();
    }
    if (select.value === "other") {
        extracted();
    }
    total.innerHTML = sum + "$";
}

/**
 * create table method
 * @param item
 */
function createTable(item) {
    let tr, td;
    let tbody = document.getElementById("tbody");
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.append(item.category);
    tr.appendChild(td);
    td = document.createElement("td");
    td.append(item.name);
    tr.appendChild(td);
    td = document.createElement("td");
    td.append(item.amount);
    tr.appendChild(td);
    td = document.createElement("td");
    td.append(item.price);
    tr.appendChild(td);
    tbody.appendChild(tr);
    sum += (item.amount * item.price);
}