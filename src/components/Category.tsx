import { Container } from "@mui/material";
import { ReactNode } from "react";

interface CategoryProps {
    name: string;
    children: ReactNode;
    categoryBackgroundColor: string;
}

function CategoryComponent({
    name,
    children,
    categoryBackgroundColor,
}: CategoryProps) {
    return (
        <Container maxWidth="xs">
            <h1
                style={{
                    textAlign: "center",
                    backgroundColor: categoryBackgroundColor,
                    width: "50%",
                    margin: "5% auto",
                    padding: "1%",
                    borderRadius: "16px",
                }}
            >
                {name}
            </h1>
            <hr />
            {children}
        </Container>
    );
}

export default CategoryComponent;
