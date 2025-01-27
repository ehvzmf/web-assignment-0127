import React, { useState } from "react";
import styled from "styled-components";

function Manager() {
    const [pmid, setPmid] = useState("");
    const [text, setText] = useState("");
    const [annotations, setAnnotations] = useState([]);

    const handleInsert = () => {
        alert("Inserting annotations...");
    };

    const handleDelete = () => {
        alert("Deleting annotations...");
    }; 

    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`

`;

export default Manager;