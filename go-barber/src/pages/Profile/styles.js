import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin-bottom: 20px;
      margin-top: 10px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.9s;

      &:hover {
        background: ${darken(0.3, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.5;
      transition: opacity 0.9s;
      &:hover {
        opacity: 1;
      }
    }

    span {
      color: rgb(209, 63, 49);
    }
  }
  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #fb6f91;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.9s;

    &:hover {
      background: ${darken(0.5, '#fb6f91')};
    }
  }
`;
