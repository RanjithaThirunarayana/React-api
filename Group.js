import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddGroup() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  let history = useHistory();
  const onSubmit = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/groups", {
        name,
      })
      .then(() => history.push("/groups"));
  };
  return (
     
    <form onSubmit={onSubmit}>
         <table border="1">
             <thead>
             <tr><th>   Name:{" "}</th>
          <th> 
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></th>  
                </tr>
             </thead>
            <tbody><tr>
            <button>Add</button>
            </tr>
          
            </tbody>    

         </table>
     
    </form>
  );
}

export default AddGroup;
