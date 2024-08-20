import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/pages/Home/home";
import Favorites from "../component/fav/fav";
import WatchList from "../component/pages/Watch/watch";
import NotFound from "../component/notfound/notfound";
import Details from "../component/pdaitels/details";
import AppNavbar from "../component/pages/nav/nav";
import { useParams } from "react-router-dom";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route> */
          <Route path="/search/:searchQuery" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRoute;
