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

/**
 *
 * @type {HTMLElement}
 */
const total = document.getElementById("total");
let array = GOODS;
let sum = 0;
let flag = true;

array.forEach(function (item) {
    createTable(item);
    sum = sum + (item.amount * item.price);
    total.innerHTML = sum + "$";
});

/**
 *
 * @type {HTMLElement}
 */
const input = document.getElementById("input");
input.oninput = function () {
    filterOut();
};

/**
 *
 * @type {HTMLElement}
 */
const select = document.getElementById("select");
select.onchange = function () {
    filterOut();
};

/**
 *
 * @type {HTMLElement}
 */
const sortCategory = document.getElementById("category");
sortCategory.onclick = function () {
    sort(2);
};

/**
 *
 * @type {HTMLElement}
 */
const sortName = document.getElementById("name");
sortName.onclick = function () {
    sort(1);
};

/**
 *
 * @param categoryFlag
 */
function sort(categoryFlag) {
    if (categoryFlag === 1) {
        if (flag === true) {
            array.sort(function(a,b){
               if (a.name > b.name){
                   return 1;
               }
               return -1;
            });
            filterOut();
            flag = !flag;
        } else {
            array.sort(function(a,b){
                if (a.name < b.name){
                    return 1;
                }
                return -1;
            });
            filterOut();
            flag = !flag;
        }
    } else {
        if (flag === true) {
            array.sort(function(a,b){
                if (a.category > b.category){
                    return 1;
                }
                return -1;
            });
            filterOut();
            flag = !flag;
        } else {
            array.sort(function(a,b){
                if (a.category < b.category){
                    return 1;
                }
                return -1;
            });
            filterOut();
            flag = !flag;
        }
    }
}

/**
 *
 */
function filterOut() {
    let tbody = document.getElementById("tbody");
    if (input.value === "") {
        filter(tbody);
    } else if (input.value !== "") {
        filter(tbody);
    }
}

/**
 *
 * @param tbody
 */
function filter(tbody) {
    sum = 0;
    if (select.value === "") {
        tbody.innerHTML = "";
        array.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1) {
                createTable(item);
                sum = sum + (item.amount * item.price);
            }
        });
    }
    if (select.value === "supplies") {
        tbody.innerHTML = "";
        array.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1 && item.category.indexOf(select.value) !== -1) {
                createTable(item);
                sum = sum + (item.amount * item.price);
            }
        });
    }
    if (select.value === "furniture") {
        tbody.innerHTML = "";
        array.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1 && item.category.indexOf(select.value) !== -1) {
                createTable(item);
                sum = sum + (item.amount * item.price);
            }
        });
    }
    if (select.value === "other") {
        tbody.innerHTML = "";
        array.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1 && item.category.indexOf(select.value) !== -1) {
                createTable(item);
                sum = sum + (item.amount * item.price);
            }
        });
    }
    total.innerHTML = sum + "$";
}

/**
 *
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
}