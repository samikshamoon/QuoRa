import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "../css/Quora.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Quora() {
  return (
    <div className="quora">
      <QHeader />
      
      <div className="quora__content" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:10}}>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Quora;