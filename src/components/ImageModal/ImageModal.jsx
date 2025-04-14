import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const ImageModal = ({ isOpen, onRequestClose, card }) => {
  const { urls, alt_description } = card;
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={urls.small} alt={alt_description} />
    </Modal>
  );
};

export default ImageModal;
