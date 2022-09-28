import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
import Users from "./users";


const Add = () => {
    let history = useNavigate();

    const [name, setName] = useState('')

    const hundleSubmit = () => {
        let id = Users[Users.length - 1].id + 1;
        Users.push({ id, name });
        history('/')
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group controlId="forName">
                    <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                    <br></br>
                    <Button type="submit" onClick={() => hundleSubmit()}>Submit</Button>
                </Form.Group>

            </Form>
        </div>
    )

}

export default Add