function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    document.getElementById("current-time").innerHTML = `${hours}:${minutes}`;
}

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
  }
  