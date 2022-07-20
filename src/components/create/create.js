import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [nik, setNik] = useState('');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://62d65e4f15ad24cbf2d58279.mockapi.io/api`, {
      nik,
      nama,
      email,
      pesan
    }).then(() => {
      history.push('/read')
    })
  }
  return (
    <div>
      <Form>
      <Form.Field>
          <label>Masukan Nik</label>
          <input name="nik" 
          onChange={(e) => setNik(e.target.value)} 
          placeholder='Nik' />
        </Form.Field>
        <Form.Field>
          <label>Masukan Name</label>
          <input name="nama" 
          onChange={(e) => setNama(e.target.value)} 
          placeholder='Name' />
        </Form.Field>

        <Form.Field>
          <label>Masukan Email</label>
          <input 
          name="email" 
          placeholder='Email ' 
          onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Masukan Pesan</label>
          <input name="pesan" 
          onChange={(e) => setPesan(e.target.value)} 
          placeholder='Isi Pesan' />
        </Form.Field>
        <Button type='submit'      color="blue" onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}
