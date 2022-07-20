import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Update() {
    let history = useHistory();
    const [nik, setNik] = useState('');
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://62d65e4f15ad24cbf2d58279.mockapi.io/api/${ID}`, {
            nik,
            nama,
            email,
            pesan
        }).then(() => {
            history.push('/read')
        })
    }

    useEffect(() => {
        setNik(localStorage.getItem('nik'));
        setNama(localStorage.getItem('nama'));
        setEmail(localStorage.getItem('email'));
        setPesan(localStorage.getItem('pesan'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Nomor Induk Kependudukan</label>
                    <input name="nik"
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                        placeholder='Nomor Induk Kependudukan' />
                </Form.Field>
                <Form.Field>
                    <label>Nama Pelapor</label>
                    <input
                        name="nama"
                        value={nama}
                        placeholder='Nama Pelapor'
                        onChange={(e) => setNama(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Email Pelapor</label>
                    <input
                        name="email"
                        value={email}
                        placeholder='Email Pelapor'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Isi Pesan</label>
                    <input
                        name="pesan"
                        value={pesan}
                        placeholder='Isi Pesan'
                        onChange={(e) => setPesan(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}
