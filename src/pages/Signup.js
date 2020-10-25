import React, {useState, useContext} from 'react'
import {HeaderContainer} from '../containers/Header'
import {FooterContainer} from '../containers/Footer'
import {Form} from "../components/"
import * as ROUTES from '../constants/routes'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'

export default function SignUp() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || emailAddress === '' || password === ''

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
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
          <Form.Base onSubmit={(e) => handleSignup(e)} method="POST">
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              type="email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
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
