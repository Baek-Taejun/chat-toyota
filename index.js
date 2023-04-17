function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // minutes 변수를 문자열로 변환하고 길이가 1인 경우 앞에 0을 추가합니다.
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
  
    // 10분 전 시간인 경우 hours 변수를 1 감소시키고, hours 변수를 문자열로 변환하고 길이가 1인 경우 앞에 0을 추가합니다.
    if (minutes >= 10) {
      hours = hours.toString().length === 1 ? '0' + (hours - 1) : hours - 1;
    } else {
      hours = hours.toString().length === 1 ? '0' + (hours - 2) : hours - 2;
    }
  
    document.getElementById("current-time").innerHTML = `${hours}:${minutes}`;
  }
  
  window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
  }
  