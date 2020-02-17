import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      done: ""
    };
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h2>Nueva Tarea</h2>
        </div>
        <div className="card-body">
          <form>
            <label>
              <textarea id = "content-title" placeholder="titulo"></textarea>
            </label>
          </form>
          <form>
            <label>
              <textarea id ="content-text" placeholder="descripcion"></textarea>
            </label>
          </form>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.addCard(document.getElementById("content-title").value);
              this.props.addCard(document.getElementById("content-text").value)
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
