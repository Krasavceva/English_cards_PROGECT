import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";



export default function Card(props) {
    return(
        <div className={styles.card__container}>
            <div className={styles.card}>
                <div className="english">{props.english}</div>
                <div className="transcription">транскрипция: {props.transcription}</div>
                <div className="russian">{props.russian}</div>
                <div className="tags">{props.tags}</div>
                <Button className={styles.btn}/>
            </div>
            
        </div>
        
    )
}