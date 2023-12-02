
const txtSearchElm = document.querySelector("#txt-search");
const tblCustomerElm = document.querySelector("#tbl-customers");
const loaderElm = document.querySelector("#loader");
const btnModeElm = document.querySelector("#btn-mode"); 
const { API_BASE_URL } = process.env;

let searchParams = new URL(location).searchParams;
let abortControll = null;
let sort = "id,asc";
let q = searchParams.get('q') ?? '';
txtSearchElm.value = q;
 
loadAllCustomers(q);


function loadAllCustomers(query){
    q = query ?? q;
    loaderElm.classList.remove('d-none');
    if (abortControll) {
        abortControll.abort('Request aborted');
    }
    abortControll = new AbortController();
    const signal = abortControll.signal; 
    const quertString = ``;
    history.replaceState({}, '', location.origin + "?q=" + q);
    fetch(`${API_BASE_URL}/customers?sort=${sort}&page=1&size=50&q=${q}`, {signal}) 
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
    const thElm = e.target.closest('th');
    if (thElm) {
        const colName = thElm.innerText.trim().toLowerCase().replace(/\s+/g, '');
        tblCustomerElm.querySelectorAll('thead th').forEach(th => th.classList.remove('sorted'));
        thElm.classList.add('sorted');
        sort = `${colName},${thElm.classList.contains('order-down') ? 'desc' : 'asc'}`;
        thElm.classList.toggle('order-down');
        thElm.classList.toggle('order-up');
        loadAllCustomers();
    }
});

btnModeElm.addEventListener('click', () => {
    if (btnModeElm.classList.contains('bi-moon-fill')) {
        btnModeElm.classList.remove('bi-moon-fill');
        btnModeElm.classList.add('bi-sun-fill');
        document.querySelector('html').setAttribute('data-bs-theme', 'light');
    }else {
        btnModeElm.classList.add('bi-moon-fill');
        btnModeElm.classList.remove('bi-sun-fill');
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    }
})