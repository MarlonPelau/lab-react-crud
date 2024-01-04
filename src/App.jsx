import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import MoviesIndex from "./components/movies/MoviesIndex";
import Movie from "./components/movies/Movie";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shows" >
          {/* shows */}
          <Route index element={<ShowsIndex />} />
          <Route path='new' element={<ShowsNewForm />} />
          <Route path=":id" element={<Show />} />
          <Route path=":id/edit" element={<ShowsEditForm />} />
        </Route>
        <Route path="/movies" >
          {/* movies */}
          <Route index element={<MoviesIndex />} />
          {/* <Route path='new' element={<MoviesNewForm />} /> */}
          <Route path=":id" element={<Movie />} />
          {/* <Route path=":id/edit" element={<ShowsEditForm />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
