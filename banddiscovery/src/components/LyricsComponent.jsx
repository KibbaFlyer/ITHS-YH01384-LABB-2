import React, { useEffect } from "react";
import styles from "./LyricsComponent.module.css";
import lyricsAPI from "../api/lyrics";

const LyricsComponent = () => {
  const [artist, setArtist] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState(true);

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  function updateArtist(event) {
    setArtist(event.target.value);
  }

  const getLyrics = async () => {
    setLyrics("");
    const lyrics = await lyricsAPI(artist, title);
    if (lyrics.error) {
      setLyrics("Lyrics not found");
      return;
    }
    const firstRow = lyrics.lyrics.split("\n")[0];
    lyrics.lyrics = lyrics.lyrics.replace(firstRow, "");
    setLyrics(lyrics.lyrics);
    return;
  };

  useEffect(() => {
    if (artist != "" && title != "") {
      setDisabledButton(false);
      return;
    }
    setDisabledButton(true);
    return;
  }, [artist, title]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h2>Artist</h2>
          <input content={artist} onChange={updateArtist} />
        </div>
        <div className={styles.inputContainer}>
          <h2>Title</h2>
          <input content={title} onChange={updateTitle} />
        </div>
      </div>
      <div>
        <button disabled={disabledButton} onClick={getLyrics}>
          Get Lyrics
        </button>
      </div>
      <div className={styles.lyricsContainer}>
        <h1>Lyrics</h1>
        <div>
          {lyrics.split("\n").map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default LyricsComponent;
