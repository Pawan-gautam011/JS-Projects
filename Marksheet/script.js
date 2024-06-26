function calculate() {
  var a = parseInt(document.getElementById("bookone").value);
  const box = document.querySelector('.calculate_box')
  var b = parseInt(document.getElementById("booktwo").value);
  var c = parseInt(document.getElementById("bookthree").value);
  var d = parseInt(document.getElementById("bookfour").value);
  var e = parseInt(document.getElementById("bookfive").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
    const alert = document.querySelector('.errors')
    alert.classList.add('active')
    setTimeout(() => {
      alert.classList.remove('active')
    }, 4000)
    return; 
  }
  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    const alert = document.querySelector('.errors')
    alert.classList.add('active')
    box.classList.remove('active')
    setTimeout(() => {
      alert.classList.remove('active')
    }, 4000)
  } else {
    var obtain = a + b + c + d + e;
    box.classList.add('active')
    document.getElementById("obtain").innerHTML = obtain;
    var per = (obtain / 500) * 100;
    document.getElementById("per").innerHTML = per + '%';
    if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
      document.getElementById("remarks").innerHTML =
        '<span style="color:green">Pass</span>';
    } else {
      document.getElementById("remarks").innerHTML =
        '<span style="color:red">Fail</span>';
    }
    if (per >= 90) {
      document.getElementById("grade").textContent = "A+";
    } else if (per >= 80 && per < 90) {
      document.getElementById("grade").textContent = "A";
    } else if (per >= 70 && per < 80) {
      document.getElementById("grade").textContent = "B+";
    } else if (per >= 60 && per < 70) {
      document.getElementById("grade").textContent = "B";
    } else if (per >= 50 && per < 60) {
      document.getElementById("grade").textContent = "C+";
    } else if (per >= 40 && per < 50) {
      document.getElementById("grade").textContent = "C";
    } else if (per >= 30 && per < 40) {
      document.getElementById("grade").textContent = "D+";
    } else if (per >= 20 && per < 30) {
      document.getElementById("grade").textContent = "D";
    } else {
      document.getElementById("grade").textContent = "Not Present";
    }
  }
}
