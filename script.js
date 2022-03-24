let start = [...document.querySelectorAll('.content_box .S')],
  end = [...document.querySelectorAll('.E')],
  restart = [...document.querySelectorAll('.R')],
  counter = [...document.querySelectorAll('.counter')],
  price = [...document.querySelectorAll('.price')],
  start_D = [...document.querySelectorAll('.start')],
  end_D = [...document.querySelectorAll('.end')],
  name_station = [...document.querySelectorAll('.box >h3')],
  cover = document.querySelector('.cover'),
  array = [];

window.onload = () => {
  setInterval(() => {
    cover.classList.add('hide');
    document.body.style.overflow = 'visible'
  },4000)
}

if (localStorage.getItem('data')) {
  array = JSON.parse(localStorage.getItem('data'))
}
const context = () => {
  let dateS1 = new Date();

  let s = 0, m = 0, h = 0,
    s1 = 0, m1 = 0, h1 = 0,
    s2 = 0, m2 = 0, h2 = 0,
    s3 = 0, m3 = 0, h3 = 0,
    s4 = 0, m4 = 0, h4 = 0;

  let default_price = 20,
    stop_count1,
    stop_count2,
    stop_count3,
    stop_count4;

  for (let i = 0; i < start.length; i++) {
    start[i].addEventListener('click', () => {
      dateS1 = new Date();
      if (i === 0) {
        start_count(0, s, m, h, dateS1);
      } else if (i === 1) {
        start_count(1, s, m, h, dateS1);
      } else if (i === 2) {
        start_count(2, s, m, h, dateS1);
      } else if (i === 3) {
        start_count(3, s, m, h, dateS1);
      }

    })
  }
  
  const start_count = (index, s, m, h, date) => {
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    if (index === 0) {
      stop_count1 = setInterval(() => {
        s1 = s++;
        if (s > 59) {
          m1 = ++m;
          // s1 = 0;
          s = 0;
        } else if (m > 59) {
          h1 = ++h;
          m1 = 0;
        }
        if (hours > 12) {
          hours = hours - 12;
        }
        start_D[index].innerHTML = `${hours}:${mins}:${sec}`;
        counter[index].innerHTML = `${h}:${m}:${s}`;
      }, 1000)
    } else if (index === 1) {
      stop_count2 = setInterval(() => {
        s2 = s++;
        if (s > 59) {
          m2 = ++m;
          s = 0;
        } else if (m > 59) {
          h2 = ++h;
          m2 = 0;
        }
        if (hours > 12) {
          hours = hours - 12;
        }
        start_D[index].innerHTML = `${hours}:${mins}:${sec}`;
        counter[index].innerHTML = `${h}:${m}:${s}`;
      }, 1000)
    } else if (index === 2) {
      stop_count3 = setInterval(() => {
        s3 = s++;
        if (s > 59) {
          m3 = ++m;
          s = 0;
        } else if (m > 59) {
          h3 = ++h;
          m = 0;
        }
        if (hours > 12) {
          hours = hours - 12;
        }
        start_D[index].innerHTML = `${hours}:${mins}:${sec}`;
        counter[index].innerHTML = `${h}:${m}:${s}`;
      }, 1000)
    } else if (index === 3) {
      stop_count4 = setInterval(() => {
        s4 = s++;
        if (s > 59) {
          m4 = ++m;
          s = 0;
        } else if (m > 59) {
          h4 = ++h;
          m = 0;
        }
        if (hours > 12) {
          hours = hours - 12;
        }
        start_D[index].innerHTML = `${hours}:${mins}:${sec}`;
        counter[index].innerHTML = `${h}:${m}:${s}`;
      }, 1000)
    }
  }

  for (let j = 0; j < end.length; j++) {
    end[j].addEventListener('click', () => {
      let dateE1 = new Date();
      if (j === 0) {
        end_count(0, s1, h1, m1, dateE1, stop_count1)
      } else if (j === 1) {
        end_count(1, s2, h2, m2, dateE1, stop_count2)
      } else if (j === 2) {
        end_count(2, s3, h3, m3, dateE1, stop_count3)
      } else if (j === 3) {
        end_count(3, s4, h4, m4, dateE1, stop_count4)
      }
    })
  }
  function end_count(index, s, h, m, date, stop_count) {
    clearInterval(stop_count)
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
    let final = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    array.push(
      {
        id: index + 1,
        name: name_station[index].textContent,
        Total: total.toFixed(2), date: final,
        start: start_D[index].innerHTML,
        end: end_D[index].innerHTML
      })
    localStorage.setItem('data', JSON.stringify(array))
  }

  for (let x = 0; x < restart.length; x++) {
    restart[x].addEventListener('click',()=> {
      if(x === 0) {
        reset(0, s1, m1, h1)
      }else if(x === 1) {
        reset(1, s2, m2, h2)
      }else if (x === 2) {
        reset(2, s3, m3, h3)
      }else if (x ===3) {
        reset(3, s4, m4, h4)
      }
    })
  }

  function reset(index, s, m, h) {
    start_D[index].innerHTML = `00:00:00`;
    counter[index].innerHTML = `00:00:00`;
    end_D[index].innerHTML = `00:00:00`;
    price[index].innerHTML = `0 جنيها`;
    s = 0;
    m = 0;
    h = 0;
  }

}

context();







