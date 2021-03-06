import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* sigIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });
    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Desculpe essa aplicacao é apenas para prestadores');
      return;
    }

    yield put(signInSuccess(token, user));
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* sigUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', { name, email, password, provider: true });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro verifique seus dados');
    yield put(signFailure());
  }
}

export function setTokenOnApi({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setTokenOnApi),
  takeLatest('@auth/SIGN_IN_REQUEST', sigIn),
  takeLatest('@auth/SIGN_UP_REQUEST', sigUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
