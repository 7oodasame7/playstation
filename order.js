let hot_drink = [
    { id: 1, name: 'شاي', price: 5 },
    { id: 2, name: 'قهوة', price: 5 },
    { id: 3, name: 'يانسون', price: 5 },
    { id: 4, name: 'نعناع', price: 5 },
    { id: 5, name: 'جنزبيل', price: 5 },
    { id: 6, name: 'كابتشينو', price: 10 },
];

let cool_drink = [
    { id: 1, name: 'بيبسي', price: 6 },
    { id: 2, name: 'شويبس', price: 6 },
    { id: 3, name: 'بريل', price: 8 },
    { id: 4, name: 'سيفن', price: 6 },
    { id: 5, name: 'مياه', price: 5 },
];

let select_one = document.getElementById('select1'),
    table_order = document.getElementById('show_product'),
    body_table = document.querySelector('.bodyt_table'),
    select_num_station = document.getElementById('sel_num'),
    form = document.querySelector('.form'),
    input_Name = document.getElementById('name'),
    input_price = document.getElementById('price'),
    input_count = document.getElementById('count'),
    btn_add = document.getElementById('btn_add'),
    name_product,
    price_product,
    id;
array = [];

if (localStorage.getItem('order')) {
    array = JSON.parse(localStorage.getItem('order'))
}

select_one.onchange = (e) => {
    if (e.target.value === 'hot_drink') {
        show_data(hot_drink)  //function
    } else if (e.target.value === 'cool_drink') {
        show_data(cool_drink) //function
    }
}

document.forms[0].onsubmit = function (e) {
    e.preventDefault()
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_order')) {
        input_count.value = '';
        document.querySelector('.wornning').style.display = 'none'
        name_product = e.target.parentElement.previousElementSibling.previousElementSibling;
        price_product = e.target.parentElement.previousElementSibling;
        id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        form.classList.add('show')
        input_Name.value = name_product.innerHTML
        input_price.value = price_product.innerHTML
    }
    else if (e.target.classList.contains('form')) {
        form.classList.remove('show')
    }
})
btn_add.addEventListener('click', () => {
    if (input_count.value !== '') {
        const obj = {
            id: id.innerHTML,
            name: input_Name.value,
            price: input_price.value,
            count: input_count.value,
            total: input_count.value *input_price.value ,
            name_station: select_num_station.value
        }
        array.push(obj);
        form.classList.remove('show')
        localStorage.setItem('order', JSON.stringify(array))
    } else {
        document.querySelector('.wornning').style.display = 'block'
    }
})

// create table and but Data
function show_data(data) {
    body_table.innerHTML = '';
    data.forEach((el) => {
        let trow = document.createElement('tr')
        Object.values(el).forEach((row) => {
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(`${row}`))
            trow.appendChild(td)
        })
        let tdata = document.createElement('td')
        let span = document.createElement('span')
        span.appendChild(document.createTextNode('اضافة'))
        span.className = 'btn_order';
        tdata.appendChild(span)
        trow.appendChild(tdata)
        body_table.appendChild(trow)
    })
    table_order.style.opacity = '1'
}