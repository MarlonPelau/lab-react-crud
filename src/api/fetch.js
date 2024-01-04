// Shows
const URL = import.meta.env.VITE_BASE_API_URL;
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

/// src/api/fetch
// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Create
export function createMovie(movie) {
  return;
}

// Delete
export function destroyMovie(id) {
  return;
}

// Movies
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Update
export function updateMovie(id, movie) {
  return;
}