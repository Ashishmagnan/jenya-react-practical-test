import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";


import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
    Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>


            <Container sx={{ mt: 4 }}>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/crud")}
                >
                    CRUD Operation
                </Button>
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Product List
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Brand</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {products.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.title}
                                    </TableCell>

                                    <TableCell>
                                        ${item.price}
                                    </TableCell>

                                    <TableCell>
                                        {item.brand}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}

export default ProductList;