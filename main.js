const getData = async (searchKeyword) => {
    const { data } = await axios.get(`https://itqan-online.com/apps/test-visits/api.php?fun=main_search&key=${searchKeyword}`);
    return data.result.customers_list;  
};

const displayData = async (searchKeyword) => {
    const customers = await getData(searchKeyword);
    if (customers.length === 0) {
        alert('لا توجد نتائج لهذا البحث');
    } else {
        renderTable(customers);
    }
};

const renderTable = (customerList) => {
    const tableBody = document.getElementById('customerListBody');
    tableBody.innerHTML = ''; // تفريغ محتوى الجدول

    const rows = customerList.map(customer => {
        return `
            <tr>
                <td>${customer.customer_id}</td>
                <td>${customer.customer_name}</td>
            </tr>
        `;
    }).join(''); 

    tableBody.innerHTML = rows;
};

const searchCustomers = () => {
    const searchKeyword = document.getElementById('searchInput').value; 
    if (searchKeyword) {
        displayData(searchKeyword);
    } 
};

document.getElementById('searchButton').addEventListener('click', searchCustomers);

