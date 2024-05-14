const fetchLyrics = async (artist, title) => {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${title}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchLyrics;
