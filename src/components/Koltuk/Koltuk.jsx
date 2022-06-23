import React from "react";
import "./Koltuk.css";
const Koltuk = (props) => {
  const { onClick, koltuk } = props;

  return (
    <div
      style={{
        backgroundColor:
          koltuk.alinabilir === 1
            ? koltuk.secildi === 1
              ? "#27408b"
              : "#ffffff"
            : "#8b8f88",
      }}
      onClick={onClick}
      className="koltuk"
    >
      {koltuk.id} 
    </div>
  );
};

export default Koltuk; // koltuk üzerinde yazacak sayıyı belirledik
