import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!book) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value || "No description available.";

  return (
    <div className="container text-center mt-5">
      <h1>{book.title}</h1>

      <h5 className="mt-3">Description:</h5>

      <p className="mx-auto" style={{ maxWidth: "1000px" }}>
        {description}
      </p>

      {book.covers && book.covers.length > 0 ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          className="img-fluid"
          style={{ maxWidth: "250px" }}
        />
      ) : (
        <p>No Cover Available</p>
      )}
    </div>
  );
}

export default BookDetails;