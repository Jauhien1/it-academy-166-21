function myFunction1() {
  document.getElementById("my_dropdown_1").classList.toggle("show1");
  }
  function myFunction2() {
  document.getElementById("my_dropdown_2").classList.toggle("show1");
  }

  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  let my_dropdown_1 = document.getElementById("my_dropdown_1");
    if (my_dropdown_1.classList.contains('show1')) {
      my_dropdown_1.classList.remove('show1');
    }
  }
  if (!e.target.matches('.dropbtn')) {
  let my_dropdown_2 = document.getElementById("my_dropdown_2");
    if (my_dropdown_2.classList.contains('show1')) {
      my_dropdown_2.classList.remove('show1');
    }
  }
}