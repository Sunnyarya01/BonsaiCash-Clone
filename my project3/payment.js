function validation() {
  // swal("Click on either the button or outside the modal.")
  swal("Good job!", "Your free trial has Started!", "success").then((value) => {
    window.location.href = "../index.html";
  });
}
