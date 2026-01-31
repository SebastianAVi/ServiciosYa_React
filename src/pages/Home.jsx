import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    { title: "Gasfitería", desc: "Filtraciones, grifería, destapes." },
    { title: "Electricidad", desc: "Instalaciones, enchufes, tableros." },
    { title: "Aseo", desc: "Limpieza hogar/oficina, profunda." },
    { title: "Carpintería", desc: "Reparaciones, muebles, ajustes." },
  ];

  return (
    <>
      {/* HERO */}
      <div className="bg-dark text-light">
        <Container className="py-5">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <h1 className="display-5 fw-semibold mb-3">
                ¡Bienvenido a <span className="text-primary">ServiciosYa</span>!
              </h1>

              <p className="lead text-light opacity-75 mb-4">
                Encuentra profesionales a domicilio de confianza en minutos.
                Cotiza, agenda y resuelve rápido.
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <Button as={Link} to="/servicios" variant="primary" size="lg">
                  Ver servicios
                </Button>

                <Button as={Link} to="/contact" variant="outline-light" size="lg">
                  Contactar
                </Button>
              </div>

              <div className="mt-4 d-flex gap-3 flex-wrap small text-light opacity-75">
                <span>✅ Verificados</span>
                <span>⚡ Respuesta rápida</span>
                <span>⭐ Reseñas reales</span>
              </div>
            </Col>

            <Col lg={5}>
              {/* Caja visual tipo "widget" para que no se vea vacío */}
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold mb-3">
                    ¿Qué necesitas hoy?
                  </Card.Title>
                  <div className="d-grid gap-2">
                    <Button as={Link} to="/servicios" variant="dark">
                      Explorar categorías
                    </Button>
                    <Button variant="outline-dark" disabled>
                      Publicar solicitud (pronto)
                    </Button>
                  </div>
                  <div className="mt-3 text-muted small">
                    Tip: Parte por “Servicios” y filtra por categoría.
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CATEGORÍAS */}
      <Container className="py-5">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <div>
            <h2 className="h3 fw-semibold mb-1">Categorías populares</h2>
            <p className="text-muted mb-0">
              Elige una categoría y encuentra profesionales disponibles.
            </p>
          </div>

          <Button as={Link} to="/servicios" variant="outline-primary">
            Ver todas
          </Button>
        </div>

        <Row className="g-3">
          {categories.map((c) => (
            <Col key={c.title} sm={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold">{c.title}</Card.Title>
                  <Card.Text className="text-muted">{c.desc}</Card.Text>
                  <Button as={Link} to="/servicios" variant="primary" size="sm">
                    Explorar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;