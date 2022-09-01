import React from 'react';

const Delete = (props) => {
  

    return (
      <>
        <div
          onClick={() => {
            props.cardSelect();
          }}
          style={{
            position: "fixed",
            zIndex: "1",
            width: "6%",
            height: "5%",
            left: "89%",
            top: "84%",
            border: "1px solid",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alineItems: "center",
          }}
        >
          <h5> Delete</h5>
        </div>
      </>
    );
  };
  
  export default Delete;
  