import React, { useState } from "react";

function Login() {
    const initialState = {
        username: "",
        password: "",
    };
    const initialStateErrors = {
        username: [],
        password: [],
    };

    const [loginForm, setLoginForm] = useState(initialState);
    const [errors, setErrors] = useState(initialStateErrors);
    const ERRORS = {
        USERNAME_LENGTH:
            "El nombre de usuario debe tener al menos 10 caracteres",
        id: 1,
    };

    const validateLength = (value, length) => {
        return value.length < length;
    };

    const validateUsernameLength = (value) => {
        return validateLength(value, 10);
    };

    const findError = (from, id_error) => {
        return errors[from].find((error) => error.id == id_error);
    };

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
        console.log(loginForm);
    };

    const handleAbortInput = () => {
        // Completar esto
    };

    const handleLogin = (e) => {
        e.preventDefault();
        users.forEach((user) => {
            if (
                user.password === loginForm.password &&
                user.username === loginForm.username
            ) {
                localStorage.setItem("user", JSON.stringify(user));
                // return navigate('/home')
            }
        });
        // setErrors({...errors, global:[ERROS.USER_NOT_FOUND]});
    };

    return (
        <main>
            <h1>Iniciar sesion</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        placeholder="John Smith"
                        id="username"
                        name="username"
                        onChange={handleChangeValue}
                        value={loginForm.username}
                        onBlur={handleAbortInput}
                    />
                    {errors.username.length > 0 &&
                        errors.username.map((err) => (
                            <span>{err.message}</span>
                        ))}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        onChange={handleChangeValue}
                        value={loginForm.password}
                    />
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
        </main>
    );
}

export default Login;
