import { useState, useEffect } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;

  button {
    background-color: #007bff;
  }
`;

function Home() {
  const [treinos, setTreinos] = useState(() => {
    const data = localStorage.getItem("treinos");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("treinos", JSON.stringify(treinos));
  }, [treinos]);

  const handleDelete = (indexToDelete) => {
    const updatedTreinos = treinos.filter((_, index) => index !== indexToDelete);
    setTreinos(updatedTreinos);
  };

  return (
    <div>
      <h2>Atividades Registradas</h2>
      <Grid>
        {treinos.map((treino, index) => (
          <Card key={index}>
            <h3>{treino.nome}</h3>
            <p>Repetições: {treino.repeticoes}</p>
            <p>Peso: {treino.peso}</p>
            <p>Duração: {treino.duracao} minutos</p>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Home;