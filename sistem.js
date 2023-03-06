const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themelogger = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('clik', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themelogger.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themelogger.querySelector('span:nth-child(1)').classList.toggle('active');
    themelogger.querySelector('span:nth-child(2)').classList.toggle('active');
})


// fill ordes in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `<td> ${order.productName} <td> ${order.productNumber} </td><td> ${order.productStatus}</td> <td class="${order.shipping=='Declined' ? 'danger' : order.shipping=== 'pending' ? 'warning' : 'primary'}"> ${order.shipping} </td><td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})
