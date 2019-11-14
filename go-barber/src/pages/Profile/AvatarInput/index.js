import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';
import api from '~/services/api';
import { updateTempIdProfile } from '~/store/modules/user/actions';

export default function AvatarInput() {
  const dispatch = useDispatch();
  const { defaultValue } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
    dispatch(updateTempIdProfile(id));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
