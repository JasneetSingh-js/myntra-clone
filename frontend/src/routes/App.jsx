import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/Loadingspinner";

function App() {
  const fetchStatus=useSelector((store)=>store.fetchStatus);


  return (
    <>
      <Header></Header>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
    
      <Footer />


    </>
  );
}

export default App;
