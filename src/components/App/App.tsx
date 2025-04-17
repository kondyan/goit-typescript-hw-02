import { useState, useEffect, useCallback } from "react";
import { fetchQuery } from "../../api/api.ts";
import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar.tsx";
import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import Loader from "../Loader/Loader.tsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "../ImageModal/ImageModal.tsx";

const notify = () => toast("Search Bar is empty");

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCard, setModalCard] = useState();

  useEffect(() => {
    const fetchCards = async (query, page) => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchQuery(query, page);
        setTotalPages(response.total_pages);
        if (page === 1) {
          setCards(response.results);
        } else {
          setCards((prev) => [...prev, ...response.results]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (inputValue === "") {
      return;
    }
    fetchCards(inputValue, currentPage);
  }, [inputValue, currentPage]);

  const onSubmit = (value) => {
    if (!value.query) {
      notify();
      return;
    }
    setInputValue(value.query);
    setCurrentPage(1);
  };

  async function onLoadMore() {
    setCurrentPage((prev) => prev + 1);
  }

  const handleClick = useCallback((card) => {
    setModalCard(card);
    setModalIsOpen(true);
  }, []);

  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery cards={cards} handleClick={handleClick} />
      {loading ? <Loader /> : error && <ErrorMessage />}
      {/* ? needs to be replaced with more optimal solution, don't know how yet */}
      {currentPage < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}

      <Toaster />
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          card={modalCard}
        />
      )}
    </>
  );
};

export default App;
