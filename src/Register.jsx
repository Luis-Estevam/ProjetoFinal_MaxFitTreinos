import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Container = styled.div`
  margin-left: 500px;
  padding: 20px;
  max-width: 1200px;
`;

function Register() {
    
  const [nome, setNome] = useState("");
  const [repeticoes, setRepeticoes] = useState("");
  const [peso, setPeso] = useState("");
  const [duracao, setDuracao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || isNaN(repeticoes) || isNaN(peso) || isNaN(duracao) || duracao <= 0) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const novoTreino = { nome, repeticoes, peso, duracao };
    const treinos = JSON.parse(localStorage.getItem("treinos")) || [];
    treinos.push(novoTreino);
    localStorage.setItem("treinos", JSON.stringify(treinos));

    setNome("");
    setRepeticoes("");
    setPeso("");
    setDuracao("");
    alert("Atividade registrada com sucesso!");
  };

  return (
    <Container>
      <h2>Registrar Nova Atividade</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Exercicio"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Repetições"
          value={repeticoes}
          onChange={(e) => setRepeticoes(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Duração (minutos)"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
        />
        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
};

export default Register;