# React Custom Hooks Demo

This project is a small React application that demonstrates how to build and use **custom hooks** for common real-world tasks such as:

* Fetching data from an API
* Accessing the browser's Geolocation API
* Persisting state in `localStorage`

The code is structured to keep logic reusable, clean, and separated from UI components.

---

## Project Structure

```
src/
│
├── App.js
├── Todos.js
├── Position.js
│
├── useFetch.js
├── useGeolocation.js
├── useLocalStorage.js
│
└── App.css
```

---

## App Component

`App.js` is the root component of the application.

* It renders the main UI
* It currently displays the `Todos` component
* The `Position` component is available but commented out

```jsx
function App() {
  return (
    <div className="App">
      {/* <Position /> */}
      <Todos />
    </div>
  );
}
```

---

## Position Component

`Position.js` uses the custom `useGeolocation` hook to access the user's GPS location.

### Features

* Requests the user's current location
* Shows loading and error states
* Displays latitude and longitude
* Provides a direct link to OpenStreetMap
* Tracks how many times the location was requested

---

## useGeolocation Hook

`useGeolocation.js` is a custom hook that wraps the browser's **Geolocation API**.

### Responsibilities

* Handle loading state
* Handle errors
* Store latitude and longitude
* Count how many times the user requested the position

### Returned Values

```js
{
  lat,
  lng,
  isLoading,
  error,
  countClicks,
  getPosition
}
```

---

## useFetch Hook

`useFetch.js` is a reusable hook for fetching data from an API.

### Features

* Accepts a URL as input
* Handles loading and error states
* Uses `AbortController` to cancel requests on cleanup
* Prevents state updates on unmounted components

### Returned Values

```js
{
  data,
  isLoading,
  error
}
```

---

## useLocalStorage Hook

`useLocalStorage.js` synchronizes React state with the browser's `localStorage`.

### Features

* Reads the initial value from `localStorage`
* Persists updates automatically
* Works like `useState`

### Usage Example

```js
const [value, setValue] = useLocalStorage("key", "initialValue");
```

---

## Why Custom Hooks?

Custom hooks allow you to:

* Reuse logic across components
* Keep components clean and focused on UI
* Encapsulate side effects and browser APIs
* Improve readability and maintainability

---

## Technologies Used

* React (Hooks API)
* JavaScript (ES6+)
* Browser APIs (Fetch, Geolocation, localStorage)

---

## How to Run the Project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm start
   ```

---

## Notes

* Geolocation requires user permission in the browser
* Some features may not work in insecure (HTTP) environments

---

## Author

This project is built as a learning example to practice **React Custom Hooks** and clean architecture principles.
