import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import groceries from "/images/groceries.jpg";

export default function Home() {
  return (
    <main className="py-5">
      <div className="d-flex flex-column flex-md-row gap-md-5 align-items-center mb-3">
        <div style={{ flex: 1 }}>
          <img
            src={groceries}
            alt="Groceries laid out on a bed"
            className="rounded img-fluid mx-auto mb-4"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Fast delivery</h2>
          <p>
            Groceries delivered straight to your door at your convenience! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
            eveniet tempore, atque molestias fugiat obcaecati deleniti quos
            officiis reiciendis impedit sint ratione voluptatum rem voluptatem
            molestiae nam magnam.
          </p>
        </div>
      </div>
      <Button
        variant="dark"
        as={Link}
        to="/shop"
        style={{
          display: "block",
          borderRadius: "20px",
          maxWidth: "200px",
          margin: "auto",
        }}
      >
        Shop now
      </Button>
    </main>
  );
}
