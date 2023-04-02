function w3_open() {
  document.getElementById("myid").style.width = "828px";
  document.getElementById("topbar").style.width = "81%";
  document.getElementById("myid").style.transition = "all 1s";
  document.getElementById("topbar").style.transition = "all 1s";
  document.getElementById("info").style.marginLeft = "228px";
  document.getElementById("side-icon").style.marginLeft = "230px";
  document.getElementById("info").style.opacity = "1";
  document.getElementById("info").style.transition = "all 1s";
  document.getElementById("side-icon").style.transition = "all 1s";
}

function w3_close() {
  document.getElementById("myid").style.width = "0";
  document.getElementById("topbar").style.width = "100%";
  document.getElementById("info").style.marginLeft = "-200px";
  document.getElementById("info").style.opacity = "0";
  document.getElementById("info").style.transition = "all 1.6s";
  document.getElementById("side-icon").style.marginLeft = "0";
  // document.getElementById("side-icon").style.transition = "all 1s";
}

function icon_action() {
  var chkBox = document.getElementById("sidebar-check");
  var open = document.getElementById("sidebar-open");
  var close = document.getElementById("sidebar-close");
  if (chkBox.checked == true) {
    open.style.display = "none";
    close.style.display = "block";
    w3_open();
  } else {
    open.style.display = "block";
    close.style.display = "none";
    w3_close();
  }
}

// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.add("sample");
// }

// $(window).scroll(function () {
//   "nov".toggleClass("scrolled", $this.scrollToo());
// });
