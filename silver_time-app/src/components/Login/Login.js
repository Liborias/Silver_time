import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  /*níže vidíme použití hooks, což je náhrada za state a setState.
  Teď se nastavuje přímo uvnitř funkce, což dřív nešlo, šlo to jenom v classách.
  První hodnota je název proměnné, která drží stav, druhá hodnota je funkce, 
  která mění její stav. Pozor definice hooku nesmí být podmíněná "if" */
  const [isEmailValid, setValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);
  const [isTouched, setTouched] = useState(false);
  let history = useHistory();

  const validateEmail = (mail) => {
    setValidity(true);
    if (!mail.includes("@")) {
      console.log("neodpovídá");
      setValidity(false);
    }
  };

  const validatePassword = (pass) => {
    //Minimálně osm znaků, nejméně jedno velké písmeno, jedno malé písmeno, jedno číslo a jeden speciální znak:
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!regex.test(pass)) {
      setPasswordValidity(false);
      return;
    }
    setPasswordValidity(true);
  };

  const redirectHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="app">
      <header className="appHeader">
        <div className="loginForm">
          <h2>Přihlašovací formulář</h2>
          <form className="innerLoginForm" onSubmit={(e) => redirectHome(e)}>
            <label>
              Email:&nbsp;
              <input
                type="email"
                name="email"
                className={!isEmailValid && isTouched ? "error" : ""}
                onFocus={() => setTouched(true)}
                onChange={(e) => validateEmail(e.target.value)}
              />
            </label>
            <label>
              Heslo:&nbsp;
              <input
                type="password"
                name="password"
                className={!isPasswordValid && isTouched ? "error" : ""}
                onFocus={() => setTouched(true)}
                onChange={(e) => validatePassword(e.target.value)}
              />
            </label>
            <p className="errorMessage">
              {!isPasswordValid && isTouched
                ? "Heslo má mít malý a velký znak, hieroglif a číslo."
                : ""}
            </p>
            <button type="submit" disabled={!isEmailValid || !isPasswordValid}>
              Potvrdit
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
