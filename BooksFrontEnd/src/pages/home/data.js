export const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Author",
    accessor: "author",
  },
  {
    Header: "ISBN",
    accessor: "isbn",
  },
];

export const formatRowData = (rawData) =>

  rawData.map((info) => ({
    id: info.id,
    name: info.name,
    author: info.author,
    isbn: info.isbn,
  }));

export const getData = async (pageNo = 1) => {
  const response = await fetch(
    `http://localhost:8000/books?pageSize=5&pageNumber=${pageNo}`
  );
  const data = await response.json()
  return {
    data: data.fetchData,
    totalPages:Math.ceil(data.fetchBookscount[0].count / 5),
    totlaBooks:data.fetchBookscount[0].count
  }
};
