import {MainPage} from "./pages/index.js";
import {RestaurantsProvider} from "./context/restaurantsContext.jsx";
import {RestaurantPanel} from "./components/RestaurantPanel.jsx";
import {Header} from "./components/Header.jsx";
import {Toaster} from "sonner";

function App() {

  return (
    <RestaurantsProvider>
      <Header />
      <MainPage />
      <RestaurantPanel />
      <Toaster richColors position="bottom-center"/>
    </RestaurantsProvider>
  )
}

export default App
