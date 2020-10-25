import React, {useState, useContext} from 'react'
import {HeaderContainer} from '../containers/Header'
import {Form} from "../components/"
import {FooterContainer} from '../containers/Footer'
import {useHistory} from 'react-router-dom'
import {FirebaseContext} from "../context/firebase"
import * as ROUTES from '../constants/routes'


export default function Sign() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [error, setError] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const isInvalid = (emailAddress === "") || (password === "")

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">

          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />

          <Form.Input
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />

          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up Now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>

        </Form.Base>
      </Form>
    </HeaderContainer>
    <FooterContainer />
    </>
  );

}
