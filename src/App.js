import React, { useEffect, useState } from "react";
import axios from "axios";
import Actions from "./components/Actions";
import Posts from "./components/Posts";
import { Alert } from "antd";
import SwitchMode from "./components/SwitchMode";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState([1, 1]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventCounter, setEventCounter] = useState(0);

  // fontion qui recupere les donnees
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://tapio-posts.onrender.com/posts");
        console.log(res.data);
        const data = res.data.map((row) => ({
          key: row.id,
          userId: row.userId,
          id: row.id,
          title: row.title,
          body: row.body,
        }));

        setPosts(data.reverse()); // on recupere les donnees dans le sens inverse pour avoir les plus recent en premier
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [eventCounter]);
  return loading ? (
    "Loading"
  ) : (
    <main>
      <section id="tapio-app" className="light">

        <header  id="navbarToggleExternalContent">
          <div id="profile-info">
            <img
              className="profile-picture"
              src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
              alt=""
            />
            <h2>Sam</h2>
            <button id="login-btn">Connexion</button>
          </div>
          <div className="header-title">
            <h1 id="title-app">Tapio</h1>
            <img
              id="logo"
              src="https://tapioview.s3.amazonaws.com/static/img/logo-tapio-blue.png?AWSAccessKeyId=AKIAXL23VGMDKSIWWZ5W&Signature=oEB5WUMxzGzACmNGXVzHSh%2FwFLQ%3D&Expires=1993637960"
              alt=""
            />
          </div>
          <Actions
            setSearchInput={setSearchInput}
            setSort={setSort}
            eventCounter={eventCounter}
            setEventCounter={setEventCounter}
          />
        </header>

        <div id="posts-section">
          <h2 className="title-section">Commentaires</h2>
          <div className="posts">
            {posts
              .filter(
                (_post) =>
                  _post.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  _post.body.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((post) => {
                return (
                  <Posts
                    eventCounter={eventCounter}
                    setEventCounter={setEventCounter}
                    post={post}
                  />
                );
              })}
          </div>
          <footer>By Palmeri Samuele for Tapio</footer>
        </div>
      </section>
      
    </main>
  );
}

export default App;
