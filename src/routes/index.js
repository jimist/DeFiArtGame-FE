import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Artists from "../pages/Artists";
import Buyers from "../pages/Buyers";
import Liquidity from "../pages/Liquidity";
import Header from "../components/header";
import MyNFTs from "../pages/MyNFTs";

const MainRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/buyers" component={Buyers} />
        <Route exact path="/liquidity" component={Liquidity} />
        <Route exact path="/mynfts">
          <MyNFTs />
        </Route>
      </Router>
    </>
  );
};

export default MainRouter;
