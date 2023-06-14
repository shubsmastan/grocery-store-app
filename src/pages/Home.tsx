import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Groceries from "/images/groceries.jpg";
import Delivery from "/images/delivery.jpg";
import Supermarket from "/images/supermarket.jpg";

export default function Home() {
  return (
    <>
      <h2 className="mb-4">Groceries Delivered To Your Door</h2>
      <div className="d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center mb-3">
        <div className="flex-fill">
          <img
            src={Groceries}
            alt="Groceries laid out on a bed"
            className="rounded img-fluid mx-auto mb-4 "
          />
        </div>
        <div className="flex-fill">
          <h2>Over 1,000 Products</h2>
          <p>
            Shop for snacks, drinks, fresh produce and more from the brands you
            know and love. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Debitis cupiditate minima, excepturi porro quod, tenetur illo
            explicabo quia eveniet tempore, atque molestias fugiat obcaecati
            deleniti quos officiis reiciendis impedit sint ratione voluptatum
            rem voluptatem molestiae nam magnam.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center mb-3">
        <div className="flex-fill d-md-none">
          <img
            src={Supermarket}
            alt="Groceries laid out on a bed"
            className="rounded img-fluid mx-auto mb-4 "
          />
        </div>
        <div className="flex-fill">
          <h2>No Substitutions</h2>
          <p>
            We have a real-time inventory, so what you order is what you get.
            Cheese on toast airedale cheese and biscuits. Cheesecake mascarpone
            when the cheese comes out everybody's happy fondue bocconcini blue
            castello cut the cheese cottage cheese. Danish fontina bocconcini
            bavarian bergkase red leicester cut the cheese caerphilly when the
            cheese comes out everybody's happy lancashire.
          </p>
        </div>
        <div className="flex-fill d-none d-md-block">
          <img
            src={Supermarket}
            alt="Groceries laid out on a bed"
            className="rounded img-fluid mx-auto mb-4 "
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center mb-3">
        <div className="flex-fill">
          <img
            src={Delivery}
            alt="Groceries laid out on a bed"
            className="rounded img-fluid mx-auto mb-4 "
          />
        </div>
        <div className="flex-fill">
          <h2>Fast Delivery</h2>
          <p>
            No need to book a slot — we deliver your groceries in minutes until
            your front door. Pudding bonbon cake jelly sweet roll lollipop jelly
            beans pastry cotton candy. Oat cake chocolate cake apple pie gummies
            apple pie. Sweet gingerbread cake sesame snaps tart. Marzipan bear
            claw gingerbread tootsie roll candy canes cheesecake bear claw.
            Apple pie muffin sugar plum lollipop carrot cake dragée candy canes.
          </p>
        </div>
      </div>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <Button
          variant="outline-secondary"
          style={{
            display: "block",
            maxWidth: "120px",
            margin: "auto",
          }}>
          Shop now
        </Button>
      </Link>
    </>
  );
}
