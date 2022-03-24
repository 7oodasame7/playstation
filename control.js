let Data = JSON.parse(localStorage.getItem('order'))

let box_data = document.querySelector('.box'),
    body1 = document.querySelector('.body1'),
    body2 = document.querySelector('.body2'),
    Total1 = document.getElementById('total1'),
    btn_delete = [...document.querySelectorAll('.btn_delete')]
let D_station1,
    D_station2;

if (Data) {
    D_station1 = Data.filter((el) => {
        return el.name_station === 'station1'
    })
    let array1 = [...D_station1];
}
if (Data) {
    D_station2 = Data.filter((el) => {
        return el.name_station === 'station2'
    })
    let array2 = [...D_station2];
}


show_data(D_station1, body1);
show_data(D_station2, body2);


// delete
btn_delete.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn1')) {
            D_station1 = [];
            console.log(D_station1)
        } else if (e.target.classList.contains('btn2')) {
            console.log('h2')
        }
    })
})




function show_data(data, body) {
    if (data) {
        data.forEach(obj => {
            let tr = document.createElement('tr')
            Object.values(obj).forEach(el => {
                let td = document.createElement('td')
                td.appendChild(document.createTextNode(el))
                tr.appendChild(td)
            });
            body.appendChild(tr)
        });
    }
}



let arr = [],
    total = 0;
if (D_station1) {
    D_station1.forEach((el) => {
        arr.push(el.price * el.count)
    })
    arr.forEach((el) => {
        total += parseInt(el)
    })
    Total1.innerHTML = total
}