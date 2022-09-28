import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Users from "./users";


const List = () => {
    let history = useNavigate();

    const hundleDelete = (id) => {
        let index = Users.map((e) => { return e.id }).indexOf(id);
        Users.splice(index, 1);
        history('/')
    }
    const hundleEdit = (id, name) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        history('/')
    }

    return (
        <Fragment>
            <div style={{ margin: '10rem' }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users && Users.length > 0 ?
                                Users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => hundleEdit(user.id, user.name)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => hundleDelete(user.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : "No Records Found"

                        }
                    </tbody>
                </Table>
                <br></br>
                <Link to={'/create'} className='d-grid gap-2'>
                    <Button >Create</Button>
                </Link>
            </div>
        </Fragment>
    )

}

export default List