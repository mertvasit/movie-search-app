import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext, ChannelContext } from "../../App";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);

        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButton]);

  const handleClick = () => {
    setIdFromButton(id);
  };

  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {user} - {channel}
      {/* <ul>
        {posts.map((item) => (
          <li key={item.id}>- {item.body}</li>
        ))}
        
      </ul> */}
    </div>
  );
}

export default DataFetching;
