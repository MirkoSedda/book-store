import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Registration = () => {

    const [registration, setRegistration] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [isValid, setIsValid] = useState(false)

    const handleInput = (key, value) => {
        setRegistration({
            ...registration,
            [key]: value,
        })
    }

    const validForm = () => {

        registration.name.length >= 2 &&
            registration.surname.length >= 3 &&
            registration.password.length >= 8 &&
            registration.password ===
            registration.confirmPassword ?

            setIsValid(true) : setIsValid(false)

    }

    const handleRegistration = (e) => {
        e.preventDefault()
        setIsValid(true)
    }


    return (
        <div className="d-flex flex-column align-items-center">
            {isValid ? (
                <>
                    <h1>Thanks for joining us!</h1>
                    <h3>Your user info's are:</h3>
                    <p>{registration.name}</p>
                    <p>{registration.surname}</p>
                    <p>{registration.email}</p>
                </>
            ) : (
                <>
                    <h1>Please register</h1>
                    <Form onSubmit={handleRegistration}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="name"
                                onChange={(e) => handleInput("name", e.target.value)}
                                value={registration.name}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="surname"
                                onChange={(e) => handleInput("surname", e.target.value)}
                                value={registration.surname}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                placeholder="email"
                                onChange={(e) => handleInput("email", e.target.value)}
                                value={registration.email}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                placeholder="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

                                onChange={(e) => handleInput("password", e.target.value)}
                                value={registration.password}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                placeholder="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

                                onChange={(e) =>
                                    handleInput("confirmPassword", e.target.value)
                                }
                                value={registration.confirmPassword}
                            />
                        </Form.Group>
                        <Button type="submit" disabled={!isValid} className='mt-3'>
                            Register
                        </Button>
                    </Form>
                </>
            )}
        </div>
    )
}


export default Registration