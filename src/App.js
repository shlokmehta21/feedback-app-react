import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedBackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedBackStats />
                    <FeedBackList />
                  </>
                }
              ></Route>
              <Route exact path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
}
