import React from "react";
import "./SongList.css";

const SongList = ({ songs, select }) => {
  const renderedList = songs.map((song) => {
    return (
      <div key={song.name} className="ui list">
        <div className="item">
          <h3>{song.name}</h3>
          <p>{song.duration}</p>
          <button className="ui right floated button primary" onClick={() => select(song)}>Select</button>
        </div>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default SongList;
