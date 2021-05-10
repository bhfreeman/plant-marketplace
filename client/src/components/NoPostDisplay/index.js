import React from "react";

function NoPostDisplay() {
  return (
    <div
      className="is-flex
      is-flex-direction-column"
      // className={styles.cardContent}
      style={{
        width: "250px",
        minHeight: "300px",
        marginBottom: "2em",
        border: "black 1px dashed",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: " 0 10px 20px rgba(0,0,0,.4)",
      }}
    >
      <h2>You have no plants to display!</h2>
      <p>Use the form above to create a post and sell your plant. </p>
    </div>
  );
}

export default NoPostDisplay;
