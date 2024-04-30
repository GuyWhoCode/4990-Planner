import { Container } from "@mui/material";
import { ReactNode } from "react";

interface CategoryProps {
    name: string;
    children: ReactNode;
}

function Category({ name, children }: CategoryProps) {
    return (
        <Container maxWidth="xs">
            <h1 style={{ textAlign: "center" }}>{name}</h1>
            <hr />
            {children}
        </Container>
    );
}

export default Category;
