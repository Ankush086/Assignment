import React from "react";
import "../React video/style.css";
function Validation({ handleGoogleSignIn, handleFacebookSignIn, user }) {
  return (
    <div className="valid-buttons">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
    </div>
  );
}

export default Validation;
