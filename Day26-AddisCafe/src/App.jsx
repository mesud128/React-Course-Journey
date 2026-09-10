// src/App.jsx
import Header from "./Header";
import Menu from "./Menu";
import "./index.css";

function App() {
  return (
    <main className="app-wrapper">
      <Header />
      <Menu />
      <footer className="main-footer">
        © 2026 Addis Café · Built with React 19
      </footer>
    </main>
  );
}

export default App;