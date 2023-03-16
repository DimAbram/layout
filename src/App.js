import "./App.scss";

import {
  Menu,
  Video,
  Header,
  Testimonials,
  Maps,
  Cra,
  CraForm,
  Footer,
  Appartments,
} from "./components";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Header />
      <Testimonials />
      <Appartments />
      <Cra />
      <Video />
      <Maps />
      <CraForm />
      <Footer />
    </div>
  );
}

export default App;
