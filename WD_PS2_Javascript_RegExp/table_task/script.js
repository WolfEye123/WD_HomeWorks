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
// sortByName sortFlag
let sortFlag = true;

// initial SLIDER output
filter();

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
    sort('category');
};

/**
 * eventListener
 * @type {HTMLElement}
 */
const sortName = document.getElementById("name");
sortName.onclick = function () {
    sort('name');
};

/**
 * sorting method by name
 * @param categoryFlag
 */
function sort(categoryFlag) {
    if (sortFlag === true) {
        const propComparator = (prop) =>
            (a, b) => a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? 1 : -1;

        const compareCategory = propComparator(categoryFlag);

        GOODS.sort(compareCategory);
    } else {
        const propComparator = (prop) =>
            (a, b) => a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? 1 : -1;

        const compareCategory = propComparator(categoryFlag);

        GOODS.sort(compareCategory);
    }
    filterOut();
    sortFlag = !sortFlag;
}

/**
 * input filtering method
 */
function filterOut() {
    filter();
}

/**
 * category filtering method
 * @param tbody
 */
function filter() {
    const tbody = document.getElementById('tbody');
    const input = document.getElementById('input');
    const select = document.getElementById('select');

    const category = select.value;
    const search = new RegExp(input.value, 'ig');

    let sum = 0;

    tbody.innerHTML = GOODS
        .filter((item) => !search || item.name.match(search))
        .filter((item) => !category || item.category === category)
        .map(item => {
            sum += item.price * item.amount;

            return `
                <tr>
                    <td>${item.category}</td>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>${item.price}</td>
                </tr>
            `
        })
        .join('');

    total.innerText = sum + "$";
}
