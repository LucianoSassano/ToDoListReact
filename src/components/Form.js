import React from "react";

class Form extends React.Component {

    render() {
        return (
            <div className="card mb-3">
                    <div className="card-header">
                        <h2>Nueva Tarea</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <label>
                                <textarea placeholder="titulo"></textarea>
                            </label>
                        </form>
                        <form>
                            <label>
                                <textarea placeholder="descripcion"></textarea>
                            </label>
                        </form>
                        <button className="btn btn-primary"  >Agregar</button>
                    </div>
                </div>
        )
    }
}

export default Form