import React, {useState} from 'react';

function Slides({slides}) {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
    const [prevDisable, setPrevDisable] = useState(true);
    const [nextDisable, setNextDisable] = useState(false);
    const [restartDisable, setRestartDisable] = useState(true);
    const nextSlideHandler = () => {
        if(currentSlideNumber === slides.length - 1){
            setNextDisable(true);
            setCurrentSlideNumber(currentSlideNumber => currentSlideNumber + 1);
        } else{
            setCurrentSlideNumber(currentSlideNumber => currentSlideNumber + 1);
            setPrevDisable(false);
            setRestartDisable(false);
        }
    }

    const prevSlideHandler = () => {
        if(currentSlideNumber === 2){
            setPrevDisable(true);
            setRestartDisable(true);
            setCurrentSlideNumber(currentSlideNumber => currentSlideNumber - 1);
        } else{
            setCurrentSlideNumber(currentSlideNumber => currentSlideNumber - 1);
            setNextDisable(false);
        }
    }

    const restartHandler = () => {
        setCurrentSlideNumber(1);
        setPrevDisable(true);
        setRestartDisable(true);
        setNextDisable(false);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled = {restartDisable} onClick = {restartHandler}>Restart</button>
                <button data-testid="button-prev" className="small" disabled = {prevDisable} onClick = {prevSlideHandler}>Prev</button>
                <button data-testid="button-next" className="small" disabled = {nextDisable} onClick = {nextSlideHandler}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlideNumber - 1].title}</h1>
                <p data-testid="text">{slides[currentSlideNumber - 1].text}</p>
            </div>
        </div>
    );

}

export default Slides;
