import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import { GlobalUserProvider } from "./context/global-user.context";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { patchLogs } from "./utils/patch-logs.util";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  useEffect(()=>{
  },[])
  
  return (
    <GlobalUserProvider>
      <ToastContainer className={"toaster"}/>
      <RouterProvider router={router} />
    </GlobalUserProvider>
  );
}

export default App;
