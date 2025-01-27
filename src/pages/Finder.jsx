import React, { useState } from "react";
import styled from "styled-components";

function Finder() {
    const [pmid, setPmid] = useState("");
    const [text, setText] = useState("");
    const [annotations, setAnnotations] = useState([]);

    const handleSearch = () => {

      };

    return (
        <Container>
          <Section>
            <Label htmlFor="pmid">PMID:</Label>
            <Input
              id="pmid"
              value={pmid}
              onChange={(e) => setPmid(e.target.value)}
              placeholder="Enter PMID"
            />
            <Button onClick={handleSearch}>Search</Button>
          </Section>

          <Section>
            <Label>Text:</Label>
            <TextArea value={text} readOnly />
          </Section>
        </Container>
    )
}

const Container = styled.div`

`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Finder;