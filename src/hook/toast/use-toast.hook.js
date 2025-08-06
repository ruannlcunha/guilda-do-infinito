import { toast } from "react-toastify";
import { ICONS_TOAST } from "./icons.toast";

export function useToast() {
  function toastSuccess(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: ICONS_TOAST.SUCESSO
    });
  }

  function toastWarning(message) {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: ICONS_TOAST.AVISO
    });
  }

  function toastError(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: ICONS_TOAST.ERRO
    });
  }

  return { toastSuccess, toastWarning, toastError };
}
