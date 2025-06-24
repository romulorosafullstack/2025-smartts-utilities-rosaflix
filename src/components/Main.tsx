import Movie from "./Movie";

export function Main(){
  return(
    <main>
      <Movie title="Star Wars" year={1980} director="George Lucas" genre="Ficção" />
      <Movie title="Star Wars 2" year={1980} director="Spilberg" genre="Ficção" />
      <Movie title="Star Wars 3" year={1980} director="Stallone" genre="Ficção"/>
    </main>
  )
}
