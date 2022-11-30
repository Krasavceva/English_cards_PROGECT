import React from 'react';
import Row from "./Row"
import styles from "./Table.module.scss";
import Words from "../../api/words.json"
import AddWord from '../Button/AddWord';


export default function Table(props) {
    return(

<div className={styles.wrapper}>
<div className={styles.title__table}>Словарь</div>
    <div className={styles.row}>
        <div className={styles.title}>Cлово</div>
        <div className={styles.title}>Транскрипция</div>
        <div className={styles.title}>Перевод</div>
        <div className={styles.title}>Теги</div>
        <div className={styles.title}>Редактирование</div>
       
    </div>
    
{
    Words.map((word) =>
<Row key={word.id}
english={word.english}
transcription={word.transcription}
russian={word.russian}
tags={word.tags}/>
    )
}
<AddWord/>
</div>
    )
}