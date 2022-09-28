import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Users from "./users";


const Edit = () => {
    let history = useNavigate();

    const [id, setID] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
    }, [])

    const hundleSubmit = () => {
        let index = Users.map((e) => { return e.id }).indexOf(id);
        Users.splice(index, 1, { id, name });
        history('/')
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group controlId="forName">
                    <Form.Control type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                    <br></br>
                    <Button type="submit" onClick={() => hundleSubmit()}>Update</Button>
                </Form.Group>

            </Form>
        </div>
    )

}

export default Edit