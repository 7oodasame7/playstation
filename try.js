var start = [...document.querySelectorAll('.content_box .S')],
  end = [...document.querySelectorAll('.E')],
  restart = [...document.querySelectorAll('.R')],
  counter = [...document.querySelectorAll('.counter')],
  price = [...document.querySelectorAll('.price')],
  start_D = [...document.querySelectorAll('.start')],
  end_D = [...document.querySelectorAll('.end')],
  name_station = [...document.querySelectorAll('.box >h3')]
  s1 = 0,
  m1 = 0,
  h1 = 0,
  s2 = 0,
  m2 = 0,
  h2 = 0,
  i = 1,
  default_price = 20;
// var stop_count2;
// let stop_count1 ;

var array = [];
start[0].addEventListener('click', () => {
  let dateS1 = new Date();
  start_count(0,s1,m1,h1,dateS1);
  
})
start[1].addEventListener('click', () => {
  let dateS1 = new Date();
  start_count(1,s2,m2,h2,dateS1);
})

end[0].addEventListener('click', () => {
  let dateE1 = new Date();
  clearInterval(stop_count)
  end_count(0,s1,h1,m1,dateE1)
 })
  
end[1].addEventListener('click', () => {
  let dateE1 = new Date();
  clearInterval(stop_count)
  end_count(1,s1,h1,m1,dateE1)
})

// restart.addEventListener('click', () => {
//   start_D.innerHTML = `00:00:00`;
//   counter.innerHTML = `00:00:00`;
//   end_D.innerHTML = `00:00:00`
//   price.innerHTML = `0 جنيها`
//   h = 0;
//   m = 0;
//   s = 0;
//   i += 1;
// })



let stop_count;

function start_count(index,s,m,h, date) {
  let hours = date.getHours();
   let mins = date.getMinutes();
   let sec = date.getSeconds();
   stop_count =  setInterval(() => {
    s++;
    if (s > 60) {
      m += 1;
      s = 0;
    } else if (m > 60) {
      h += 1;
      m = 0;
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    start_D[index].innerHTML = `${hours}:${mins}:${sec}`;
    counter[index].innerHTML = `${h}:${m}:${s}`;
  }, 1000)
   
}
function end_count(index,s,h,m,date) {
  let total = 0;
    let hours = date.getHours();
   let mins = date.getMinutes();
   let sec = date.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  end_D[index].innerHTML = `${hours}:${mins}:${sec}`
  total = default_price * h + default_price / (60 / m) + default_price / (60 * 60 / s);
  price[index].innerHTML = `${total.toFixed(2)} جنيها`
  final = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  array.push({ id:index +1, name: name_station[index].textContent, Total: total.toFixed(2), date: final })
  localStorage.setItem('data', JSON.stringify(array))
  console.log(default_price * h + default_price / (60 / m) + default_price / (60 * 60 / s))
}