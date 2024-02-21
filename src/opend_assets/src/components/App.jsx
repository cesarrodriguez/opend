import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Footer from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";

function App() {

  const NFTID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
  return (
    <div className="App">
      <Header />
      <Item id={NFTID}/>
      {/*<img className="bottom-space" src={homeImage} />*/}
      <Footer />
    </div>
  );
}

export default App;
