import React, { useState } from "react";
import classNames from "classnames";
import styles from "./list-title.scss";

const ListTitle = () => {
  const [newTitle, setNewTitle] = useState(
    "List title...      GiVE me a Naaaaame"
  );
  const [isEditMode, setIsEditMode] = useState(false);

  const inputClasses = classNames(styles.input, {
    [styles.visible]: isEditMode,
  });

  const editTitle = () => {
    setIsEditMode(true);
  };

  const editButtonClassName = classNames(styles.editButton, {
    [styles.hide]: isEditMode,
  });

  const changeInput = (e) => {
    setNewTitle(e.target.value);
  };

  const closeEdit = () => {
    setIsEditMode(false);
  };

  return (
    <div>
      {!isEditMode && <h1 className={styles.title}>{newTitle}</h1>}

      <input
        className={inputClasses}
        value={newTitle}
        onChange={(e) => changeInput(e)}
      ></input>
      <a className={editButtonClassName} onClick={editTitle}>
        Edit
      </a>
      {isEditMode && (
        <a className={styles.closeEditButton} onClick={closeEdit}>
          Save
        </a>
      )}
    </div>
  );
};

export default ListTitle;
