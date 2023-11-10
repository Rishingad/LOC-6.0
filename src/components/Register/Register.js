import React from "react";

function Register() {
  return (
    <div class="form-container">
      <div
        style={{
          color: "#06F8DB",
          fontSize: 64,
          fontFamily: "Orbitron",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Register Now
      </div>
      <div
        style={{
          width: 285.7,
          height: 28.74,
          color: "white",
          fontSize: 12,
          fontFamily: "Nunito",
          fontWeight: "700",
          lineHeight: 28,
          letterSpacing: 0.25,
          wordWrap: "break-word",
          background: "black",
          borderRadius: 20,
          border: "1px #06F8DB solid",
        }}
      >
        First name
      </div>
      <div
        style={{
          width: 363.18,
          height: 55.18,
          background: "black",
          borderRadius: 20,
          border: "1px #06F8DB solid",
        }}
      />
    </div>
  );
}

export default Register;
