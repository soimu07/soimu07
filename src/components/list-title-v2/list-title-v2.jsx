import React, { useState } from "react";

const RENDER_MODES = {
  DEFAULT: "default",
  EDIT: "edit",
};

const ListItemV2 = () => {
  const [renderMode, setRenderMode] = useState(RENDER_MODES.DEFAULT);
  const [title, setTitle] = useState("Title");

  const onEditTitle = () => {
    setRenderMode(RENDER_MODES.EDIT);
  };

  const onSave = () => {
    setRenderMode(RENDER_MODES.DEFAULT);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  if (renderMode === RENDER_MODES.DEFAULT) {
    return (
      <div>
        <h1>{title}</h1>
        <div onClick={onEditTitle}>Edit</div>
      </div>
    );
  }

  return (
    <div>
      <input type="text" value={title} onChange={(e) => onChangeTitle(e)} />
      <div onClick={onSave}>Save</div>
    </div>
  );
};

export default ListItemV2;
