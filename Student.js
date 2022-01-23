import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [pName, setPName] = useState("");
  const [pEmail, setPEmail] = useState("");
  const [groupId, setGroup] = useState("");
  let history = useHistory();
 
  const [post, setPost] = useState("");
  useEffect(() => {
  axios.get("http://localhost:8080/groups").then((response) => {
    setPost(response.data);
  });
}, []);
const data = Array.from(post);
  const onSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/student/create", {
        name,
        birthYear,
        pName,
        pEmail,
        groupId,
      })
      .then(() => history.push("/students"));
  };
  return (
    <form onSubmit={onSubmit}>
    <table border="1">
      <thead>
        <tr>
          <th>Name:{" "}</th>
     <th> 
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}/> 
     </th>  
        </tr>
        <tr>
          <th>Birth Year:{" "}</th>
     <th> 
     <input
        type="text"
        name="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      /> 
     </th>  
        </tr>
        <tr>
          <th>Parent Name:{" "}</th>
     <th> 
     <input
        type="text"
        name="pName"
        value={pName}
        onChange={(e) => setPName(e.target.value)}
      /> 
     </th>  
        </tr>
        <tr>
          <th>Parent Email:{" "}</th>
     <th> 
     <input
        type="text"
        name="pEmail"
        value={pEmail}
        onChange={(e) => setPEmail(e.target.value)}
      />
     </th>  
        </tr>
        <tr>
          <th>Group:{" "}</th>
     <th>
         <select onChange={(e) => setGroup(e.target.value)}>
           <option key=" " value=" "> </option>
          {data.map((entry) => {
              return <option key={entry.name} value={entry.id}>{entry.name}
              </option>
          })}     
     </select>
     </th>  
        </tr>
      </thead>
       <tbody>
        <tr>
       <button>Add</button>
       </tr>
       </tbody>    
    </table>
</form>
  );
}
export default AddStudent;
