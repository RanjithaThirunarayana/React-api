import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import React from "react";


function DisplayStudents() {
    
    const baseURL = "http://localhost:8080/students/react";
    const [post, setPost] = React.useState(null);
    //debugger;
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    if (!post) return null;
      return (
        <>
          <p>
            <Link to="/student">New Student</Link>
          </p>
    
          <table border="1">
            <thead>
              <tr>
                <th>Student</th>
                <th>Age</th>
                <th>Parent</th>
                <th>Email</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              {post.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.name}</td>
                  <td>{entry.age}</td>
                  <td>{entry.pName}</td>
                  <td>{entry.pEmail}</td>
                  <td>{entry.group}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </>
      );
      
  }

  export default DisplayStudents;