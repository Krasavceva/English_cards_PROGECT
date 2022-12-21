import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="App__container">
      <Header />
      <main className="container__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
