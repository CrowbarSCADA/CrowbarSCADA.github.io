function toggleModal() {
  var modal = document.getElementById("myModal");
  if (modal.style.display === "" || modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function hideModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    hideModal();
  }
};

