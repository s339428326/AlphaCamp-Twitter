import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  width: 350,
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
});

export const Alert = Swal.mixin({
  position: "top",
  timer: 1000,
  showConfirmButton: false,
});
