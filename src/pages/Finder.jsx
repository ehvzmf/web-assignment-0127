import React, { useState } from "react";
import styled from "styled-components";

function Finder() {
    const [pmid, setPmid] = useState("");
    const [text, setText] = useState("");
    const [annotations, setAnnotations] = useState([]);

    const handleSearch = () => {
        // Mock search logic: simulate fetching data
        if (pmid === "30429607") {
          setText(
            "Autophagy maintains tumour growth through circulating arginine. Autophagy captures intracellular components and delivers them to lysosomes, where they are degraded and recycled to sustain metabolism and to enable survival during starvation. Acute, whole-body deletion of the essential autophagy gene Atg7 in adult mice causes a systemic metabolic defect that manifests as starvation intolerance and gradual loss of white adipose tissue, liver glycogen and muscle mass. Cancer cells also benefit from autophagy."
          );
          setAnnotations([
            { id: "mesh:D009369", mention: "tumour", obj: "disease", span: { begin: 20, end: 26 } },
            { id: "", mention: "arginine", obj: "compound", span: { begin: 43, end: 51 } },
            { id: "", mention: "Atg7", obj: "gene", span: { begin: 159, end: 163 } },
            { id: "", mention: "mice", obj: "species", span: { begin: 176, end: 180 } },
            { id: "", mention: "starvation intolerance", obj: "disease", span: { begin: 225, end: 247 } },
          ]);
        } else {
          alert("PMID not found");
        }
      };

    return (
        <Container>
            
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