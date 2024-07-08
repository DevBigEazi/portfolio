import { useState } from "react";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header2,
  Skills,
  Testimonials,
  Work,
} from "./containers";
import "./App.scss";
import { images } from "./constants";

const App = () => {
  const [welcome, setWelcome] = useState(true);

  useState(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 5000);
  });
  return (
    <>
      {welcome ? (
        <div className="welcome-logo">
          <img
            style={{ height: "85px", width: "105px" }}
            src={images.gifIcon}
            alt="gif icon"
          />
        </div>
      ) : (
        <div className="app">
          <Navbar />
          <Header2 />
          <About />
          <Work />
          <Skills />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
