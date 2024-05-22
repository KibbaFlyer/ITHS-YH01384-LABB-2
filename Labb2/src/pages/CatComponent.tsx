import { useState, useEffect } from 'react';
import fetchCatPic from '../api/catpic';
import { Button } from '../styling/LyricsComponentStyling';

const CatComponent = () => {
    const [picArray, setPicArray] = useState<string[]>([]);

    const fetchAndSetPic = async () => {
        const pic = await fetchCatPic();
        if (pic) {
            setPicArray(prevArray => [...prevArray, pic.toString()]);
        }
    };

    useEffect(() => {
        fetchAndSetPic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Button style={{
                    margin:"30px"
                }}
                onClick={fetchAndSetPic}>Generate more!</Button>
            <div
                style={{
                    position: "fixed",
                    overflow: "auto",
                    height: "100%",
                    padding:"30px"
                }}
            >
                {picArray.map((pic, index) => {
                    return <img key={index} src={pic} style={{ padding: "30px" }} />;
                })}
            </div>
        </div>
    )
}

export default CatComponent;