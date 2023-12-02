
const txtSearchElm = document.querySelector("#txt-search");
const tblCustomerElm = document.querySelector("#tbl-customers");
const loaderElm = document.querySelector("#loader");
const { API_BASE_URL } = process.env;

let abortControll = null;
let sort = "id,asc";

loadAllCustomers();


function loadAllCustomers(query){
    loaderElm.classList.remove('d-none');
    if (abortControll) {
        abortControll.abort('Request aborted');
    }
    abortControll = new AbortController();
    const signal = abortControll.signal;
    fetch(`${API_BASE_URL}/customers?page=1&size=50&q=${query ?? ''}`, {signal}) 
    .then(req => req.json())
    .then(customerList => {
        abortControll = null;
        tblCustomerElm.querySelectorAll("tbody tr").forEach(tr => tr.remove());
        customerList.forEach(c => addNewRow(c));
        loaderElm.classList.add('d-none');
        if(!customerList.length){
            addNewRow(null);
        }
    });
}
function addNewRow(customer){
    const trElm = document.createElement('tr');
    tblCustomerElm.querySelector('tbody').append(trElm);
    if(customer){
    trElm.innerHTML = `
        <td>${customer.id}</td>
        <td>${customer.firstName}</td>
        <td>${customer.lastName}</td>
        <td>${customer.contact}</td>
        <td>${customer.country}</td>
    `;
    } else {
        trElm.innerHTML = `
            <td colspan="5">We're sorry. We cannot find any matches for your search term.</td>
        `;
    }
}

txtSearchElm.addEventListener('input', () => {
    loadAllCustomers(txtSearchElm.value.trim());
});

tblCustomerElm.querySelectorAll('thead th').forEach(th => {
    th.addEventListener('mouseenter', (e)=>{
        th.classList.add('col-hover');
        const colIndex = Array.from(th.parentElement.children).indexOf(th);
        tblCustomerElm.querySelectorAll(`tbody tr td:nth-child(${colIndex + 1})`)
        .forEach(td => td.classList.add('col-hover'));
    });
    th.addEventListener('mouseleave', (e)=>{
        th.classList.remove('col-hover');  
        const colIndex = Array.from(th.parentElement.children).indexOf(th);
        tblCustomerElm.querySelectorAll(`tbody tr td:nth-child(${colIndex + 1})`)
        .forEach(td => td.classList.remove('col-hover'));
    });
});

tblCustomerElm.querySelector('thead').addEventListener('click', (e) => {
    if (e.target?.tagName === 'TH') {
        const thElm = e.target;
        const colName = (thElm.innerText.trim().toLowerCase().split("").join("_"));
        tblCustomerElm.querySelectorAll('thead th').forEach(th => th.classList.remove('sorted'));
        thElm.classList.add('sorted');
        if (thElm.classList.contains('order-down')){
            thElm.classList.remove('order-down');
            thElm.classList.add('order-up');
            sort = `${colName}, desc`;
        }else {
            thElm.classList.remove('order-up');
            thElm.classList.add('order-down');
            sort = `${colName}, desc`;
        }
        tblCustomerElm.querySelectorAll('thead th').forEach(th => th.classList.remove('sorted'));
    }
})