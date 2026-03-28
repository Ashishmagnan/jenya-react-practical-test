import React, { useState } from "react";

import {
    Container,
    TextField,
    Button,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Stack
} from "@mui/material";

import {
    addProduct,
    deleteProduct,
    updateProduct
} from "../features/products/productSlice";

import { useDispatch, useSelector } from "react-redux";

function CrudPage() {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );

    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        if (!title) return;

        dispatch(
            addProduct({
                id: Date.now(),
                title
            })
        );

        setTitle("");
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setTitle(item.title);
    };

    const handleUpdate = () => {
        dispatch(
            updateProduct({
                id: editId,
                title
            })
        );

        setEditId(null);
        setTitle("");
    };

    return (
        <>

            <Container sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                    >
                        Total Records: {products.length}
                    </Typography>

                    <TextField
                        fullWidth
                        label="Product Name"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    {editId ? (
                        <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={handleUpdate}
                        >
                            Update Product
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={handleAdd}
                        >
                            Add Product
                        </Button>
                    )}

                    <List>
                        {products.map((item) => (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                handleEdit(item)
                                            }
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            color="error"
                                            variant="outlined"
                                            onClick={() =>
                                                dispatch(
                                                    deleteProduct(
                                                        item.id
                                                    )
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </Stack>
                                }
                            >
                                <ListItemText
                                    primary={item.title}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </>
    );
}

export default CrudPage;