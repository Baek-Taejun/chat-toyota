function updateTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // minutes 변수를 문자열로 변환하고 길이가 1인 경우 앞에 0을 추가합니다.
  minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;

  // 시간 변수를 문자열로 변환하고 길이가 1인 경우 앞에 0을 추가합니다.
  hours = hours.toString().length === 1 ? '0' + hours : hours;

  document.getElementById("current-time").innerHTML = `${hours}:${minutes}`;
}

window.onload = function() {
  updateTime();
  setInterval(updateTime, 1000);
}
