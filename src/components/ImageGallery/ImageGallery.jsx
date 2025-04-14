import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ cards, handleClick }) => {
  return (
    <ul className={css.gallery}>
      {cards?.map((card) => (
        <li className={css.photoCard} key={card.id}>
          <ImageCard card={card} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
