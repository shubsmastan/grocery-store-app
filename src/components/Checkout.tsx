import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { clearItems } from "../store/shoppingCartSlice";

interface CheckoutComponentProps {
  total: number;
}

export default function Checkout({ total }: CheckoutComponentProps) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          That will be £{(total / 100).toFixed(2)}. Have a nice day!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(clearItems());
              handleClose();
            }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
