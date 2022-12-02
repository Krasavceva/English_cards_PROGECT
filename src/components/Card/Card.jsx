import React from "react";
import { useState } from 'react';
import styles from "./Card.module.scss";





export default function Card(props) {
    const [isTranslate, setIsTranslate] = useState(false);

    function onClick(){
        setIsTranslate(!isTranslate);
    }



    return(
        <div className={styles.card__container}>
            <div className={styles.card}>
                <p className={styles.english}>{props.english}</p>
                <p className={styles.transcription}>{props.transcription}</p>
                {isTranslate
                ? <div className={styles.russian} onClick={onClick}>{props.russian}</div>
                : <button className={styles.btn} onClick={onClick}>Проверить</button>
                }
            </div>
            
        </div>
        
    )
}