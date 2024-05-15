import React, { useEffect } from "react";
import fetchLyrics from "../api/lyrics";

// Styled Components
import { Container, H2Comp, Input, Button, InputContainer, LyricsContainer } from '../styling/LyricsComponentStyling';

const LyricsComponent = () => {
  const [artist, setArtist] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState(true);

  function updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function updateArtist(event: React.ChangeEvent<HTMLInputElement>) {
    setArtist(event.target.value);
  }

  const getLyrics = async () => {
    setLyrics("");
    const lyrics = await fetchLyrics(artist, title);
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
      <Container>
        <InputContainer>
          <H2Comp>Artist</H2Comp>
          <Input content={artist} onChange={updateArtist} />
        </InputContainer>
        <InputContainer>
          <H2Comp>Title</H2Comp>
          <Input content={title} onChange={updateTitle} />
        </InputContainer>
      </Container>
      <div>
        <Button disabled={disabledButton} onClick={getLyrics}>
          Get Lyrics
        </Button>
      </div>
      <LyricsContainer>
        <h1>Lyrics</h1>
        <div>
          {lyrics.split("\n").map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </div>
      </LyricsContainer>
    </>
  );
};

export default LyricsComponent;
