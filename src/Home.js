import React from "react";
import hero from "./class.jpg";

const Home = () => {
  return (
    <div className="px-4 py-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={hero}
        alt=""
        width="600"
        height="300"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to Student Management System
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This website is a user-friendly platform, featuring a well-organized
          homepage where users can effortlessly view, add, edit, and delete
          student records. With a robust backend server and database
          integration, the website offers a seamless experience for managing
          student information. Its clean and intuitive design ensures that users
          can easily navigate and interact with student records, making it an
          invaluable tool for educational institutions
        </p>
      </div>
    </div>
  );
};

export default Home;

/*

    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">
          Welcome to Student Management System
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            This website is a user-friendly platform, featuring a well-organized
            homepage where users can effortlessly view, add, edit, and delete
            student records. With a robust backend server and database
            integration, the website offers a seamless experience for managing
            student information. Its clean and intuitive design ensures that
            users can easily navigate and interact with student records, making
            it an invaluable tool for educational institutions
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Custom button
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div className="overflowhidden" style={{ maxWidth: "300vh" }}>
        <div className="container px-5">
          <img
            src={hero}
            class="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Class"
            width="2000"
            height="200"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

*/
