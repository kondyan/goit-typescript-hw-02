import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import { IoSearchOutline } from "react-icons/io5";

const initialValues = {};

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={(value) => onSubmit(value)}
      >
        {({ value, setValue }) => (
          <Form className={css.form}>
            <button className={css.button} type="submit">
              <IoSearchOutline />
            </button>
            <Field
              className={css.input}
              name="query"
              type="input"
              value={value}
              id="query"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
