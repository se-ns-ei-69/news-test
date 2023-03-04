export const getNewsService = async (page: number) => {
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}posts?_page=${page}&_limit=5`
  );
};
