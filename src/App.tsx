import { GlobalStyles } from "./Styles/GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductsList } from "./Components/ProductsList/ProductsList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <Header />
      <ProductsList />
    </Provider>
  );
}

export default App;
