import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
}

export default App;
