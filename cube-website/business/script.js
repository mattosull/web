function sidepanel() {
    document.getElementById("sidepanel").classList.add("animate");
  }
  
  function close_sidepanel() {
    document.getElementById("sidepanel").classList.remove("animate");
  }

  function copy_text() {
  navigator.clipboard.writeText("business.cubeaus@gmail.com");
  alert("Copied email adress to clipboard.")
  }