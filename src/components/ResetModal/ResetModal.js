import "./ResetModal.css";
import { Modal, Button } from "react-bootstrap";

export const ResetModal = ({
  show,
  handleClose,
  title,
  description,
  onConfirm,
}) => {
  const onConfirmClick = () => {
    onConfirm();
    handleClose();
  };

  return (
    <div className="confirmation-modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onConfirmClick}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
