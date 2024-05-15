import React, { useEffect } from "react";
import fetchLyrics from "../api/lyrics";

// Styled Components
import { ComponentContainer, RowContainer, H2Comp, Input, Button, InputContainer, LyricsContainer } from '../styling/LyricsComponentStyling';

const LyricsComponent: React.FC = () => {
  const [artist, setArtist] = React.useState("Ed Sheeran");
  const [title, setTitle] = React.useState("Perfect");
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
      <ComponentContainer>
        <RowContainer>
          <InputContainer>
            <H2Comp>Artist</H2Comp>
            <Input value={artist} onChange={updateArtist}/>
          </InputContainer>
          <InputContainer>
            <H2Comp>Title</H2Comp>
            <Input value={title} onChange={updateTitle}/>
          </InputContainer>
        </RowContainer>
        <Button disabled={disabledButton} onClick={getLyrics}>
          Get Lyrics
        </Button>
        <LyricsContainer>
          <H2Comp>Lyrics</H2Comp>
          <div>
            {lyrics.split("\n").map((line, index) => {
              return <p key={index}>{line}</p>;
            })}
          </div>
        </LyricsContainer>
      </ComponentContainer>
    </>
  );
};

export default LyricsComponent;
