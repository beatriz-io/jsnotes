import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Redirect } from "react-router-dom";
import UserService from '../../../services/users';

function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if(redirectToLogin == true){
        return <Redirect to={{pathname: '/login'}} />
    }

    const handleSubmit = async (evt) => {
      evt.preventDefault();

      try {
        const user = await UserService.register({name: name, email:email, password: password});
        setRedirectToLogin(true);
      } catch (error) {
        setError(true)
      }

    }

  return (
    <Fragment>
      <Section>
          <Column.Group centered>
            <form onSubmit={handleSubmit}>
              <Column size={12}>
                <Field>
                  <Label size="small">Name:</Label>
                  <Control>
                    <Input 
                      type="name"
                      required
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Email:</Label>
                  <Control>
                    <Input 
                      type="email" 
                      required
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Password:</Label>
                  <Control>
                    <Input 
                      type="password" 
                      required
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Column.Group breakpoint="mobile">
                      <Column>
                        <a className="button is-white has-text-custom-purple" onClick={e => setRedirectToLogin(true)}>Login or</a>
                      </Column>
                      <Column>
                        <Button color="custom-purple" outlined>Register</Button>
                      </Column>
                    </Column.Group>
                  </Control>
                </Field>
                {error && <Help color='danger'> Email or Password invalid</Help>}
              </Column>
            </form>
          </Column.Group>
        </Section>
    </Fragment>
  )
}

export default RegisterForm;