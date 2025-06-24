interface MovieProps{
  title: string;
  year: number;
  director: string;
  genre: string
}

export default function Movie({title, year, director, genre}: MovieProps){
  return(
    <div>
      <h1>Título: {title}</h1>
      <h2>Ano: {year}</h2>
      <h2>Diretor: {director}</h2>
      <h2>Gênero: {genre}</h2>
    </div>
  )
}
