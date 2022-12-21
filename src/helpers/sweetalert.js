import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  width: 394,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
