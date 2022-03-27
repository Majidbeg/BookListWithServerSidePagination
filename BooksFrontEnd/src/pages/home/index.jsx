import React, { useState, useEffect } from "react";
import { getData, columns, formatRowData } from "./data";
import Table from "../../components/table";
import Pagination from "../../components/pagination";

const HomePage = () => {
  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totlaBooks: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage).then((info) => {
      console.log(info)
      const { totalPages, totlaBooks, data } = info;
      setPageData({
        isLoading: false,
        rowData: formatRowData(data),
        totalPages,
        totlaBooks
      });
    });
  }, [currentPage]);
  return (
    <div>
      <div style={{ height: "600px" }}>
        <Table
          columns={columns}
          data={pageData.rowData}
          isLoading={pageData.isLoading}
        />
      </div>
      <Pagination
        totalRows={pageData.totlaBooks}
        pageChangeHandler={setCurrentPage}
        rowsPerPage={5}
      />
    </div>
  );
};

export default HomePage;
