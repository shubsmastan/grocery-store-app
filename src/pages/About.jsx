import { Button } from "react-bootstrap";
import Food from "/images/food.png";
import Person from "/images/person.png";
import House from "/images/house.png";

export default function About() {
  return (
    <>
      <h2 className="mb-4">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
        eveniet tempore, atque molestias fugiat obcaecati deleniti quos officiis
        reiciendis impedit sint ratione voluptatum rem voluptatem molestiae nam
        magnam. Enim eius facere praesentium. Voluptates voluptatum incidunt
        error similique optio quam hic sequi!
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-around my-5 text-center">
        <div>
          <img src={Food} width="200px" className="mb-4" />
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
            eveniet tempore, atque molestias fugiat obcaecati deleniti quos
            officiis reiciendis impedit sint ratione voluptatum rem voluptatem
            molestiae nam magnam. Enim eius facere praesentium. Voluptates
            voluptatum incidunt error similique optio quam hic sequi!
          </p>
        </div>
        <div>
          <img src={Person} width="200px" className="mb-4" />
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
            eveniet tempore, atque molestias fugiat obcaecati deleniti quos
            officiis reiciendis impedit sint ratione voluptatum rem voluptatem
            molestiae nam magnam. Enim eius facere praesentium. Voluptates
            voluptatum incidunt error similique optio quam hic sequi!
          </p>
        </div>
        <div>
          <img src={House} width="200px" className="mb-4" />
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            cupiditate minima, excepturi porro quod, tenetur illo explicabo quia
            eveniet tempore, atque molestias fugiat obcaecati deleniti quos
            officiis reiciendis impedit sint ratione voluptatum rem voluptatem
            molestiae nam magnam. Enim eius facere praesentium. Voluptates
            voluptatum incidunt error similique optio quam hic sequi!
          </p>
        </div>
      </div>
      <Button variant="outline-secondary" className="m-auto d-block">
        Our story
      </Button>
    </>
  );
}
