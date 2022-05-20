import { useState, useEffect } from "react";
import "./App.css";
import { app } from "./Firebase/Firebase";
import { Routes, Route } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import VideoPlayer from "../src/React video/VideoPlayer";
import Validation from "./Validation/Validation";
import VideoPlayerHls from "./React video/VideoPlayerHls";
function App() {
  const youtubesearchapi = require("youtube-search-api");
  const [user, setUser] = useState(null);
  const [item, setItem] = useState("");
  const [id, setId] = useState("");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    });
  };
  const Facebookprovider = new FacebookAuthProvider();

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, Facebookprovider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    });
  };

  const handleSignout = () => {
    try {
      signOut(auth);
      setUser("");
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   try {
  //     fetch(
  //       // " https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=m2Q85HOXzgs&key=AIzaSyDua4TwqCZxSvq7D4tpFgUuCK0lE3wfBMM"
  //       " https://youtube.googleapis.com/youtube/v3/search?channelId=UCcuwwHVe318UX3T3-92EEtg&key=AIzaSyDua4TwqCZxSvq7D4tpFgUuCK0lE3wfBMM"
  //     )
  //       .then((result) => {
  //         return result.json();
  //       })
  //       .then((data) => setItem(data.items));
  //   } catch (error) {}
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <button className="signout" onClick={handleSignout}>
                  SignOut
                </button>
                <VideoPlayer
                  url="https://www.youtube.com/watch?v=GVNIy2EJwDg"
                  id="GVNIy2EJwDg"
                  user={user}
                />
                <VideoPlayer
                  url="https://www.youtube.com/watch?v=m2Q85HOXzgs"
                  id="m2Q85HOXzgs"
                  user={user}
                />
                <VideoPlayerHls hls="https://umwcontent.fra1.cdn.digitaloceanspaces.com/Vednam/TeejFestival/ChandanRiChokdi/ChandanRiChokdi.m3u8" />
                <VideoPlayerHls hls="https://umwcontent.fra1.cdn.digitaloceanspaces.com/Vednam/TeejFestival/TeejPrastavna/TeejPrastavna.m3u8" />
              </>
            ) : (
              <Validation
                handleFacebookSignIn={handleFacebookSignIn}
                handleGoogleSignIn={handleGoogleSignIn}
              />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
