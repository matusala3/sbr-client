import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:9192/students", {
      validateStatus: () => true,
    });
    if (result.status === 302) setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/students/delete/${id}`);
    loadStudents();
  };

  return (
    <section>
      <h2 className="text-center mt-5">Students List</h2>
      <Search search={search} setSearch={setSearch} />
      <table className="table caption-top table-hover table-striped mt-5 shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td className="mx-2">
                  <Link
                    to={`/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FontAwesomeIcon icon={faGear} />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#000000" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
