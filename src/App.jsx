import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import { GlobalConfigProvider } from "./context/global-config.context";
import { GlobalUserProvider } from "./context/global-user.context";
import "react-toastify/dist/ReactToastify.css";

function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
    <GlobalConfigProvider>
    <GlobalUserProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </GlobalUserProvider>
    </GlobalConfigProvider>
  );
}

export default App;
