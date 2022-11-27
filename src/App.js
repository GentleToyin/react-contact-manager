import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactListContextProvider from "./context/ContactListContext";

function App() {
  return (
    <ContactListContextProvider>
      <Router>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="container">
            <Route
              path="/"
              exact
              render={(props) => (
                <div style={{ margin: "auto" }}>
                  <Header />
                  <ContactForm />
                  <Contacts />
                  <Footer />
                </div>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    </ContactListContextProvider>
  );
}

export default App;
