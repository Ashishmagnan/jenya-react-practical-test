import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Paper
} from "@mui/material";

import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(form)).then(() => {
            navigate("/products");
        });
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={3}
                sx={{ padding: 4, marginTop: 8 }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Login
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        margin="normal"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                username: e.target.value
                            })
                        }
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password: e.target.value
                            })
                        }
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;