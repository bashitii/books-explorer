import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=programming")
      .then((response) => {
        setBooks(response.data.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Books</h1>

      <div className="row">
        {books.map((book) => {
          const id = book.key.split("/").pop();

          return (
            <div className="col-md-4 mb-4" key={book.key}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#29327c" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center p-3"
                  style={{ height: "250px" }}
                >
                  {book.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      style={{
                        maxWidth: "170px",
                        maxHeight: "230px",
                      }}
                    />
                  ) : (
                    <p className="text-white">No Cover</p>
                  )}
                </div>

                <div className="card-body bg-white text-center">
                  <Link
                    to={`/books/${id}`}
                    className="text-decoration-none text-dark"
                  >
                    <h5>{book.title}</h5>
                  </Link>

                  <p className="mb-0">
                    {book.author_name
                      ? book.author_name.join(", ")
                      : "Unknown Author"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;