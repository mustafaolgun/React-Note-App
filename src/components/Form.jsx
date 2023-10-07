import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFunc } from "../redux/dataSlice";
import { nanoid } from "nanoid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#9c9191");
  const [noteColor, setNoteColor] = useState("#6a727a");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
  };

  const handleClick = () => {
    if (!text) return;
    dispatch(addFunc({ id: nanoid(), title, text, textColor, noteColor }));
    setTitle("");
    setText("");
  };

  return (
    <section className="col-lg-6 mx-auto" style={{ minWidth: "300px" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label fs-4">
            Enter Note This Area
          </label>
          <input
            type="text"
            className="form-control form-control-lg mb-2"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="textarea"
            className="form-control form-control-lg"
            placeholder="Enter add note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <label
            htmlFor="TextColorInput"
            className="form-label align-self-center fs-5"
          >
            Text
          </label>
          <input
            type="color"
            id="TextColorInput"
            className="form-control form-control-color form-control-lg"
            title="Choose your text color"
            onChange={(e) => setTextColor(e.target.value)}
            value={textColor}
          />
          <label
            htmlFor="ColorInput"
            className="form-label align-self-center fs-5 ms-3"
          >
            Card
          </label>
          <input
            type="color"
            id="ColorInput"
            className="form-control form-control-color form-control-lg"
            title="Choose your card color"
            onChange={(e) => setNoteColor(e.target.value)}
            value={noteColor}
          />
          <button
            type="button"
            className="btn btn-success btn-lg ms-3"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
