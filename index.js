function todayIsGreat() {
  let abc = document.getElementById('thish1')
  abc.style.color = 'blue'
}

function todayisbad() {
  let abc = document.getElementById('thish1')
  abc.style.color = 'red'
}

function tryToLogIn() {
  let adminData = [
    {
      username: 'admin1',
      password: 'pass1'
    }
  ]
  let userData = [
    {
      username: 'user1',
      password: 'pass1'
    },
    {
      username: 'user2',
      password: 'pass2'
    },
    {
      username: 'user3',
      password: 'pass3'
    }
  ]
  let username = document.getElementById('userinput')
  let password = document.getElementById('userpassword')

  for (let i = 0; i < adminData.length; i++) {
    if (username.value == adminData[i].username &&
      password.value == adminData[i].password) {
      alert('Admin access granted')
      return
    }
  }
  for (let i = 0; i < userData.length; i++) {
    if (username.value == userData[i].username &&
      password.value == userData[i].password) {
      alert('User access granted')
      return
    }
  }
  alert('incorrect')
}

let hour;
// let dayornight;
let minute;
let second;
let startTime;

function getCurrentTime() {
  let currentTime = new Date();
  startTime = Date.now();
  hour = currentTime.getHours();
  // dayornight = 'AM';
  // if (hour > 12) {
  //   hour = hour - 12;
  //   dayornight = 'PM'
  // }
  minute = currentTime.getMinutes();
  second = currentTime.getSeconds();
  let time = document.getElementById('time');
  time.innerText = hour + ":" + minute + ":" + second
}

function calculateTime() {
  let endTime = Date.now();
  let totalMilliSeconds = endTime - startTime;
  let totalHours = totalMilliSeconds / 1000 / 60 / 60;
  console.log(totalHours)
  let result = document.getElementById('totalWorkTime')
  result.innerText = "Total Time Worked " + totalHours
}