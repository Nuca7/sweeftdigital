import { createContext, useContext, useState, useEffect } from "react";

const InfiniteScrollContext = createContext();

const InfiniteScrollContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function infiniteScroll() {
    const innerHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    if (innerHeight + scrollY >= scrollHeight) {
      setCurrentPage(currentPage + 1);
      setLoading(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [loading]);

  return (
    <InfiniteScrollContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        infiniteScroll,
        setLoading,
      }}
    >
      {children}
    </InfiniteScrollContext.Provider>
  );
};

export const useInfiniteScroll = () => {
  return useContext(InfiniteScrollContext);
};

export default InfiniteScrollContextProvider;
