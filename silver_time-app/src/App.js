import React from "react";
import logo from "./logo.svg";
import "./App.css";

function validatePassword(pass) {
  //Minimálně osm znaků, nejméně jedno velké písmeno, jedno malé písmeno, jedno číslo a jeden speciální znak:
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!regex.test(pass)) {
    console.log("neodpovídá");
  }
}

function validateEmail(mail) {
  if (!mail.includes("@")) {
    console.log("neodpovídá");
  }
}

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="loginForm">
          <h2>Přihlašovací formulář</h2>
          <form className="innerLoginForm">
            <label>
              Email:&nbsp;
              <input
                type="email"
                name="email"
                onBlur={(e) => validateEmail(e.target.value)}
              />
            </label>
            <label>
              Heslo:&nbsp;
              <input
                type="text"
                name="email"
                onBlur={(e) => validatePassword(e.target.value)}
              />
            </label>
            <button type="submit">Potvrdit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
