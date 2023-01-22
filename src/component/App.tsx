import "../style/App.css";
import {useEffect, useState} from "react";
import {getFiltered, getRandom} from "../api/pexels";

function App(): JSX.Element {
    const [word, setWord] = useState("");
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        if (word === "") {
            getRandom().then(photos => {
                // @ts-ignore
                setPictures(photos);
            })
        }
    }, [])

    useEffect(() => {
        if (word === "") {
            getRandom().then(photos => {
                // @ts-ignore
                setPictures(photos);
            })
        }
    }, [word])

    function updateResults(e: any) {
        setWord(e.target.value);
        if (word !== "") {
            getFiltered(word).then(photos => {
                // @ts-ignore
                setPictures(photos)
            })
        }
    }

    function categoryButtonClicked(e: any) {
        updateResults(e);
    }

    return (
        <>
            <div id="app">
                <h1>SnapShot</h1>
                <input
                    value={word}
                    onChange={updateResults}
                    placeholder="Search..."
                />
                <div id="buttons">
                    {["Mountain", "Beaches", "Birds", "Food"].map(category => {
                        return <button key={category} onClick={categoryButtonClicked}>{category}</button>
                    })}
                </div>
                <h1>{word} Pictures</h1>
                <div id="pictures">
                    {pictures.length > 0 ?
                        pictures.map(picture => {
                            return <img key={picture} src={picture["urls"]["regular"]} alt=""/>
                        })
                        : <></>}
                </div>
            </div>
        </>
    );
}

export default App;
