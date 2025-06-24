import { useState } from "react";
import styled from "styled-components";

const Form__Wrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: center;
  height: 22rem;
  width: 100%;
`

const Form__Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Form__Title = styled.h2`
  color: var(--color-black);
  font-size: 2rem;
  font-weight: 700;
`

interface MovieProps{
  title: string;
  year: string;
  director: string;
  genre: string;
}

export function FormRegisterMovie(){
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [director, setDirector] = useState("")
  const [genre, setGenre] = useState("")
  const [movie, setMovie] = useState<MovieProps>()

  function registerMovie(){
    setMovie({
      title: title,
      year: year,
      director: director,
      genre: genre
    })
  }

  return(
    <div>
      <Form__Wrapper>
      <Form__Container>
        <Form__Title>Cadastrar Filme</Form__Title>
        <input placeholder="Título do Filme" value={title} onChange={ (e) => setTitle(e.target.value) }/>
        <input placeholder="Ano do Filme" value={year} onChange={ (e) => setYear(e.target.value) }/>
        <input placeholder="Diretor" value={director} onChange={ (e) => setDirector(e.target.value) }/>
        <input placeholder="Gênero" value={genre} onChange={ (e) => setGenre(e.target.value) }/>
        <button onClick={registerMovie}>Cadastrar Filme</button>
      </Form__Container>
    </Form__Wrapper>

    <div>
      <h2>Filme Cadastrado</h2>
      <p>Título: {movie?.title}</p>
      <p>Ano: {movie?.year}</p>
      <p>Diretor: {movie?.director}</p>
      <p>Gênero: {movie?.genre}</p>
    </div>
    </div>
  )
}
