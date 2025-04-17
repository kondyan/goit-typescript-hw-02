import { useEffect, useRef } from "react";
import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Cannot load more Data");
const ErrorMessage = () => {
  const hasRun = useRef(false);
  if (!hasRun.current) {
    hasRun.current = true;
    notify();
  }
};

export default ErrorMessage;
