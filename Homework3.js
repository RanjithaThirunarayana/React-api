import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Homework3() {
  const [entries, setEntries] = useState([
    {
      id: 0,
      name: "Steve",
      message: "Hi",
    },
  ]);
  useEffect(() => {
    axios.get("http://localhost:8080/students").then((res) => setEntries(res.data));
  }, []);
  return (
    <>
      <h2>Homework3</h2>
      <div><p>
        <Link to="/students">Students</Link>
        {' | '}
        <Link to="/groups">Groups</Link>
      </p></div>
    </>
  );
}
export default Homework3;
