
const txtSearchElm = document.querySelector("#txt-search");
const tblCustomerElm = document.querySelector("#tbl-customers");
const tFootElm = document.querySelector("#tbl-customers tfoot");
const loaderElm = document.querySelector("#loader");
const { API_BASE_URL } = process.env;

let abortControll = null;

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