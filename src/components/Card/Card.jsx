import React from "react";
import "./Card.css";



export default function Card(props) {
    return(
        <div className="container__card">
            <div className="card">
                <div className="english">{props.english}</div>
                <div className="transcription">транскрипция:{props.transcription}</div>
                <div className="russian">{props.russian}</div>
                <div className="tags">{props.tags}</div>
                <button className="btn">Перевод</button>
            </div>
        </div>
    )
}