import { useState, useEffect } from "react";
import { getDate, getDay, getTime } from "../utils";
import css from "./app.module.css";
import { v4 as uuidv4 } from "uuid";

import { Input } from "./common/Input/Input";
import { Button } from "./common/Button";
import { TextArea } from "./common/TextArea/TextArea";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [notes, setNotes] = useState<{ value: string; description: string; id: string }[]>([]);
  const [editedId, setEditedId] = useState<string | null>(null)

  const addNoteHandler = () => {
    if (inputValue.trim().length === 0) {
      return alert("Не валидное имя задачи");
    }
    setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), value: inputValue, description: textAreaValue}]);
    setInputValue("");
    setTextAreaValue("");
  };

  const onEditStart = (id: string) => {
    setEditedId(id)
    const note = notes.find((note) => note.id === id);
    setInputValue(note!.value);
    setTextAreaValue(note!.description)
  }

  const onEditEnd = () => {
    setNotes(prevNotes => prevNotes.map(note => note.id === editedId ? { ...note, value: inputValue, description: textAreaValue } : note))
    setEditedId(null)
    setInputValue("")
    setTextAreaValue("")
  }

  const deleteNoteHandler = (id: string) => {
    setNotes((prevNotes) => [...prevNotes.filter(note => note.id !== id)]);
}

  return (
    <div className={css.container}>
      <div className={css.left_half}>
        <ul className={css.list}>
          {notes.map(note =>
            <div>
              <li key={note.id} className={css.item} onClick={() => onEditStart(note.id)}>
                <p className={css.itemTitle}>{note.value}</p>
                <p className={css.itemDescription}>{getTime()} {note.description}</p>
              </li>
              {editedId === note.id && <Button className={css.editedBtn} onClick={onEditEnd}>Сохранить заметку</Button>}
              {<Button className={css.deleteBtn} onClick={() => deleteNoteHandler(note.id)}>Удалить заметку</Button>}
            </div>)}
        </ul>
        <Button className= {css.addNoteBtn} onClick={addNoteHandler}>Добавить заметку</Button>
      </div>
      <div className={css.right_half}>
        <p className = {css.date}>
          {getDate()} {getDay()} {getTime()}
        </p>
        <Input
          className={css.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextArea
          className={css.textArea}
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />
      </div>
    </div>
  );
};
