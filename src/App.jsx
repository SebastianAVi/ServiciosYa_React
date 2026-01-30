import { Routes, Route } from 'react-router-dom'



function Home() {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-4">¡Bienvenido a ServiciosYa!</h1>
      <p className="lead mt-4">
        Encuentra profesionales a domicilio de confianza en minutos.
      </p>
      {/* Aquí pondremos después el carousel o cards de categorías */}
    </div>
  );
}

function Servicios() {
  return (
    <div className="container my-5">
      <h1>Servicios disponibles</h1>
      <p>Lista de todos los servicios (próximamente con cards y filtro).</p>
    </div>
  );
}

function Contacto() {
  return (
    <div className="container my-5">
      <h1>Contacto</h1>
      <p>Formulario de contacto (lo haremos en los próximos días).</p>
    </div>
  );
}

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      {/* Aquí irá el Navbar (lo agregamos mañana o pasado) */}

      {/* Contenido principal - las rutas */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Ruta para páginas no encontradas (404) */}
          <Route path="*" element={
            <div className="container my-5 text-center">
              <h1 className="display-1">404</h1>
              <h2>Página no encontrada</h2>
              <p className="lead">La página que buscas no existe o fue movida.</p>
            </div>
          } />
        </Routes>
      </main>

      {/* Aquí irá el Footer más adelante */}
    </div>
  );
}
export default App;