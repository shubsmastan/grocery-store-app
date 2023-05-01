import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import groceries from "/images/groceries.jpg";

export default function Home() {
  return (
    <main>
      <h2 style={{ fontFamily: "'Rubik Mono One', sans-serif" }}>
        Fast delivery
      </h2>
      <p>
        Groceries delivered straight to your door at your convenience! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate
        minima, excepturi porro quod, tenetur illo explicabo quia eveniet
        tempore, atque molestias fugiat obcaecati deleniti quos officiis
        reiciendis impedit sint ratione voluptatum rem voluptatem molestiae nam
        magnam.
      </p>
      <div className="text-center">
        <img
          src={groceries}
          alt="Groceries laid out on a bed"
          className="rounded img-fluid mx-auto mb-4"
          style={{ maxHeight: "400px" }}
        />
      </div>
      <Button
        variant="dark"
        as={Link}
        to="/shop"
        style={{
          display: "block",
          fontFamily: "'Rubik Mono One', sans-serif",
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
