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

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header2 />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
