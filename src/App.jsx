// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

//context
import RestrauntsContext from "./utils/context/RestrauntsContext";

//hooks
import useRestaurantPageData from "./utils/customHooks/useRestaurantPageData";

function App() {
  const restrauntPageDetails = useRestaurantPageData();
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body  */}
      <RestrauntsContext.Provider value={restrauntPageDetails}>
        <Body />
      </RestrauntsContext.Provider>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
