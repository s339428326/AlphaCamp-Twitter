import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  width: 394,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export const Alert = Swal.mixin({
  position: "top",
  timer: 1000,
  showConfirmButton: false,
});
