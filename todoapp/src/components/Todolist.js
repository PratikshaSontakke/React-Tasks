import React from "react";

function Todolist() {
  return (
    <div className="todo-list">
      <div style={{ masHeight: "210px", overflowY: "auto" }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          <li>
            <div> Pay electricity bill </div>
            <div className="icon">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <i title="Complete" className="fas fa-check-circle pointer" />
                <i title="Delete" className="fas fa-trash-alt pointer" />
              </div>
            </div>
          </li>

          <li>
            <div> Grocery shopping  </div>
            <div className="icon">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <i title="Complete" className="fas fa-check-circle pointer" />
                <i title="Delete" className="fas fa-trash-alt pointer" />
              </div>
            </div>
          </li>

          <li>
            <div> Complete tasks for the day </div>
            <div className="icon">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <i title="Complete" className="fas fa-check-circle pointer" />
                <i title="Delete" className="fas fa-trash-alt pointer" />
              </div>
            </div>
          </li>

          <li>
            <div> Take doc appointment </div>
            <div className="icon">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <i title="Complete" className="fas fa-check-circle pointer" />
                <i title="Delete" className="fas fa-trash-alt pointer" />
              </div>
            </div>
          </li>

          <li>
            <div> Read a book </div>
            <div className="icon">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <i title="Complete" className="fas fa-check-circle pointer" />
                <i title="Delete" className="fas fa-trash-alt pointer" />
              </div>
            </div>
          </li>








        </ul>
      </div>
    </div>
  );
}

export default Todolist;
