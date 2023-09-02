import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import style from "../styles/Register.module.css";
import { useUserAuth } from "../context/UserAuthContext.tsx";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  const isAlphaNumericWithUnderscore = (input) => /^[a-zA-Z0-9_]*$/.test(input);

  const handleDisplayNameChange = (e) => {
    const newValue = e.target.value;
    if (isAlphaNumericWithUnderscore(newValue) && newValue.length <= 16) {
      setDisplayName(newValue);
    }
  };

 const handleEmailChange = (e) => {
   const newValue = e.target.value;

   // Use a regular expression to allow only letters, numbers, and the @ symbol
   const validEmail = /^[a-zA-Z0-9@.]*$/;

   if (validEmail.test(newValue) || newValue === "") {
     setEmail(newValue);
   }
 };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    if (!/[^a-zA-Z0-9@]/.test(newValue) && newValue.length <= 13) {
      setPassword(newValue);
    }
  };

  const handleConPasswordChange = (e) => {
    const newValue = e.target.value;
    if (!/[^a-zA-Z0-9@]/.test(newValue) && newValue.length <= 13) {
      setConPassword(newValue);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!displayName || !email || !password || !conPassword) {
      setError("Please enter all the required information.");
      return;
    }

    if (!email.endsWith("@tupp.ac.th")) {
      setError("Please use an email address from @tupp.ac.th");
      return;
    }

    if (conPassword !== password) {
      setError("Confirm Password was Invalid");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      await signUp(email, password, displayName);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    }
  };

  return (
    <div className={style.contain}>
      <div className={style.InsideContain}>
        <form onSubmit={handleSubmit}>
          <p className={style.textHead}>Join us!</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className={style.setBoxMargin}>
            <input
              type="text"
              placeholder="Username"
              value={displayName}
              onChange={handleDisplayNameChange}
            />
          </div>
          <div className={style.setBoxMargin}>
            <input
              type="text"
              placeholder="Email address @tupp.ac.th"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={style.setBoxMargin}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className={style.setBoxMargin}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={handleConPasswordChange}
            />
          </div>

          <div className={style.Mainbutton}>
            <button className={style.button} type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <div className={style.test}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
