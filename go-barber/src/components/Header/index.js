import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdPower } from 'react-icons/md';
import { Container, Content, Profile, Sair } from './styles';
import Notification from '~/components/Notifications';
import logo from '~/assets/logo_roxo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleSigout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <Sair
              onClick={() => {
                handleSigout();
              }}
              type="button"
            >
              <MdPower color="#7159c1" size={20} />
            </Sair>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile"> Meu Perfil </Link>
            </div>
            <Link to="/profile">
              <img
                src={
                  profile.avatar
                    ? profile.avatar.url
                    : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt="Felipe"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
