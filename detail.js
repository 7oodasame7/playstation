let re_data = localStorage.getItem('data'),
    order_data = localStorage.getItem('order')
Data_show = JSON.parse(re_data),
    Data_order = JSON.parse(order_data);

let btn_station = document.getElementById('btn_station'),
    show_play = document.querySelector('.show_play'),
    sum_all_total = document.querySelector('.sum_all_total'),
    sum_all_total2 = document.querySelector('.Total_station1 .sum_all_total2'),
    table_order = document.getElementById('show_product'),
    body_table1 = document.querySelector('.bodyt_table'),
    body_table2 = document.querySelector('.bodyt_table2'),
    btn_order = document.getElementById('btn_order')

let x = [];
let y = [];
let finalTotal = 0;
let finalTotal2 = 0;

window.onload = () => {
    btn_station.click();
}

btn_station.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.show_all_data').style.display = 'block'
    document.querySelector('.Total_station').style.display = 'block'
    Show_anyData(Data_show, body_table2)  //function
    document.querySelector('.show_Allorder').style.display = 'none';
    document.querySelector('.Total_station1').style.display = 'none'
})

btn_order.addEventListener('click', (e) => {
    e.preventDefault(e)
    document.querySelector('.show_Allorder').style.display = 'block'
    document.querySelector('.Total_station1').style.display = 'block'
    document.querySelector('.show_all_data').style.display = 'none';
    document.querySelector('.Total_station').style.display = 'none'
    Show_anyData(Data_order, body_table1)
})

document.getElementById('btn_delete').addEventListener('click', (e) => {
    e.preventDefault(e);
    if (confirm('هل تريد حذف البيانات ؟')) {
        localStorage.clear();
        window.location.reload();
    } else {
        console.log('ok')
    }
})

function Show_anyData(data, body) {
    body.innerHTML = '';
    if (data) {
        data.forEach(obj => {
            let tr = document.createElement('tr')
            Object.values(obj).forEach(el => {
                var cell = document.createElement('td')
                cell.appendChild(document.createTextNode(el))
                tr.appendChild(cell)
            })
            body.appendChild(tr);
        });
    }
}



if (Data_show) {
    Data_show.forEach((el) => {
        x.push(el.Total)
    })
    x.forEach((el) => {
        finalTotal += parseFloat(el)
    })
    sum_all_total.innerHTML = finalTotal.toFixed(2);

}
if (Data_order) {
    Data_order.forEach((el) => {
        y.push(el.price * el.count)
    })
    y.forEach((el) => {
        finalTotal2 += parseInt(el)
    })
    sum_all_total2.innerHTML = finalTotal2.toFixed(2);
}

console.log(finalTotal2 + finalTotal)