import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No minino 6 caracteres')
    .required('A senha é obrigátória'),
});
export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Salvar</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
