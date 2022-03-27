const { pool } = require("../config/dbConnection");

const getBooksList = async (req, res) => {
    const {pageSize, pageNumber} = req.query;
    console.log(pageSize, pageNumber);
    // console.log(req.query)
    try {
        const fetchAllTheBooks = `SELECT * FROM books.books_details Order By id LIMIT ${pageSize} OFFSET ${pageNumber - 1} * ${pageSize}`
        const allBooksCount = `SELECT COUNT(*) FROM books.books_details`
    
        const fetchAllBokkData = await pool.query(fetchAllTheBooks)
        const fetchAllBooksCount = await pool.query(allBooksCount)
        res.send({fetchData:fetchAllBokkData, fetchBookscount:fetchAllBooksCount})
    } catch (err) {
       console.error({
            function: "getEmailId",
            error: err,
            message: "Error fetching email ids",
        });
    }
}

module.exports = getBooksList;

