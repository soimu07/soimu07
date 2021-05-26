import React, { useState } from "react";
import styles from "./list.scss";
import classNames from "classnames";
import ListTitle from "../../components/list-title";
import ListItemV2 from "../../components/list-title-v2";

const List = () => {
  const [newInput, setNewInput] = useState("");
  const [inputs, setInputs] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null);

  const handleNewInputChange = (e) => {
    e.preventDefault();
    setNewInput(e.target.value.trimLeft());
  };

  const handleNewInput = (e) => {
    e.preventDefault();
    if (newInput.length < 1) return;
    e.target.reset();
    setInputs([...inputs, { id: Date.now(), text: newInput }]);
    setNewInput("");
  };

  const deleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id != id));
  };

  const editInput = (e, itemId) => {
    setNewInput(e.target.value);
  };

  const getClasses = (inputId) => {
    return classNames(styles.editInputContainer, {
      [styles.display]: isEditMode === true && inputId === activeItemId,
    });
  };
  const showEditInputContainer = (id) => {
    setIsEditMode(true);
    const input = inputs.find((element) => element.id === id).text;
    setNewInput(input);
    setActiveItemId(id);
  };

  const editClasses = (inputId) =>
    classNames(styles.editButton, {
      [styles.noDisplay]: isEditMode === true && inputId === activeItemId,
    });

  const saveClasses = (inputId) => {
    return classNames(styles.saveButton, {
      [styles.display]: isEditMode === true && inputId === activeItemId,
    });
  };

  const saveNewInput = (id) => {
    let newChangedInput = null;
    let index = 0;
    for (let i = 0; i < inputs.length; i++) {
      const elem = inputs[i];
      if (elem.id === id) {
        elem.text = newInput;
        newChangedInput = elem; // id, text
        index = i;
      }
    }
    if (newChangedInput) {
      inputs[index] = newChangedInput;
      setInputs([...inputs]);
    }

    setIsEditMode(false);
  };

  return (
    <div className={styles.listContainer}>
      <ListTitle></ListTitle>
      <ListItemV2></ListItemV2>
      <form onSubmit={handleNewInput}>
        <input
          placeholder="Keep'em coming"
          onChange={handleNewInputChange}
          onFocus={() => setIsEditMode(false)}
        ></input>
      </form>
      <ul className={styles.list}>
        {inputs.map((input) => (
          <div key={input.id} className={styles.itemContainer}>
            <li>
              {input.text}
              <a onClick={() => deleteInput(input.id)}>DeleteME</a>
            </li>
            <input
              className={getClasses(input.id)}
              type="text"
              value={newInput}
              onChange={(e) => editInput(e)}
            ></input>
            <a
              className={editClasses(input.id)}
              onClick={() => showEditInputContainer(input.id)}
            >
              Edit
            </a>
            <a
              className={saveClasses(input.id)}
              onClick={() => saveNewInput(input.id)}
            >
              Save
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
