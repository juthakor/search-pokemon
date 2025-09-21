import { gql } from "@apollo/client";

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      types
      image
      resistant
      weaknesses
      weight { minimum maximum }
      height { minimum maximum }
      classification
      attacks {
        fast { name type damage }
        special { name type damage }
      }
      evolutions {
        id
        number
        name
        types
        image
      }
    }
  }
`;
