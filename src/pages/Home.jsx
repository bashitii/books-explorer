function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
          alt="Open book"
          className="img-fluid mx-auto"
          style={{ maxWidth: "300px" }}
        />

        <h1 className="mt-3">Welcome to Book Explorer!</h1>

        <p>
          Browse books and view their details using Open Library API.
        </p>
      </div>
    </div>
  );
}

export default Home;