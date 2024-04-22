import { Bounce, toast, ToastContent, ToastOptions } from "react-toastify";


type ToastType = "info" | "success" | "warning" | "error";

export const sendNotification = (type: ToastType, message: ToastContent) => {

    if (!(type in toast)) {
        throw new Error(`Invalid toast type: ${type}`);
    }

  
    const toastType = type as keyof typeof toast;


    type ToastMethod = (content: ToastContent, options?: ToastOptions) => number;


    const toastFunction = toast[toastType] as ToastMethod;
    toastFunction(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}
