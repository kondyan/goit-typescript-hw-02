import css from "./ImageCard.module.css";

const ImageCard = ({ card, handleClick }) => {
  const { urls, alt_description } = card;
  return (
    <div
      onClick={() => {
        handleClick(card);
      }}
    >
      <img className={css.image} src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
