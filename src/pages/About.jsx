import { Button } from "react-bootstrap";

export default function About() {
  return (
    <main>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
        eveniet tempore, atque molestias fugiat obcaecati deleniti quos officiis
        reiciendis impedit sint ratione voluptatum rem voluptatem molestiae nam
        magnam. Enim eius facere praesentium. Voluptates voluptatum incidunt
        error similique optio quam hic sequi!
      </p>
      <Button
        variant="dark"
        style={{
          display: "block",
          fontFamily: "'Rubik Mono One', sans-serif",
          borderRadius: "20px",
          maxWidth: "200px",
          margin: "auto",
        }}
      >
        Our story
      </Button>
    </main>
  );
}
