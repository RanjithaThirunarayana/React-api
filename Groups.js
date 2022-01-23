import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import React from "react";


function DisplayGroups() {
    
    const baseURL = "http://localhost:8080/groups/react";
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
            <Link to="/group">New Group</Link>
          </p>
    
          <table border="1">
            <thead>
              <tr>
                <th>Group</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {post.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.group}</td>
                  <td>{entry.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
      
  }

  export default DisplayGroups;