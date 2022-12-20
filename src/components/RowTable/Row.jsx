import { useState } from "react";
import styles from "../../assets/styles/Row.module.scss";

export default function Row(props) {
  const { english, transcription, russian, tags } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(props);

  function onEditClick() {
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    setInputText(props);
    setIsEdit(!isEdit);
  }

  return (
    <table>
      {isEdit ? (
        <tr className={styles.row}>
          <td>
            <input type="text" value={inputText.english} name={english} />
          </td>
          <td>
            <input
              type="text"
              value={inputText.transcription}
              name={transcription}
            />
          </td>
          <td>
            <input type="text" value={inputText.russian} name={russian} />
          </td>
          <td>
            <input type="text" value={inputText.tags} name={tags} />
          </td>
          <td>
            <button className={styles.save__btn}>Save</button>
            <button onClick={onCancelClick} className={styles.cancel__btn}>
              Exit
            </button>
          </td>
        </tr>
      ) : (
        <tr className={styles.row}>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>{tags}</td>
          <td>
            <button onClick={onEditClick} className={styles.edit__btn}>
              Edit
            </button>
            <button className={styles.del__btn}>Delete</button>
          </td>
        </tr>
      )}
    </table>
  );
}
