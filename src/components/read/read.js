import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://62d65e4f15ad24cbf2d58279.mockapi.io/api`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, nik,nama,email,pesan ) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('Nik', nik)
        localStorage.setItem('Nama', nama)
        localStorage.setItem('Email', email)
        localStorage.setItem('Pesan', pesan)
    }

    const getData = () => {
        axios.get(`https://62d65e4f15ad24cbf2d58279.mockapi.io/api`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62d65e4f15ad24cbf2d58279.mockapi.io/api/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Nomor Induk Kependudukan</Table.HeaderCell>
                        <Table.HeaderCell>Nama Pelapor</Table.HeaderCell>
                        <Table.HeaderCell>Email Pelapor</Table.HeaderCell>
                        <Table.HeaderCell>Isi Pesan</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.nik}</Table.Cell>
                                <Table.Cell>{data.nama}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.pesan}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.nik, data.nama, data.email, data.pesan)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
