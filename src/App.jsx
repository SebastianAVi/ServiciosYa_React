import AppRutas from "./ruta/AppRutas";
import AppNavbar from "./components/AppNavbar";
import "./App.css";

function App() {
  return (
    <>
      <AppNavbar />
      <main className="app-content">
        <AppRutas />
      </main>
    </>
  );
}

export default App;