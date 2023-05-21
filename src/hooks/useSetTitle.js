import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Active Toy`;
  }, [title]);
};

export default useSetTitle;
