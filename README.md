# search-pokemon

A Next.js (App Router) + TypeScript application that searches Pokémon data using a public GraphQL API.
Deployed on Vercel.

## Features

- Search Pokémon by name via query param (?q=Bulbasaur)
- Display Pokémon info (types, classification, image)
- Show attacks (fast & special)
- Show evolutions and allow navigation by clicking an evolution
- Apollo Client with caching + ISR (revalidate = 3600)
- Responsive layout with clean separation of components

## Testing

- Jest + Testing Library setup
- Includes mock data for Bulbasaur, Charmander, and Squirtle
- Tests assert that each has the correct primary type (Grass, Fire, Water)

## Run tests

```bash
npm test
```

## Tech Stack

- Next.js 15 (App Router, TypeScript)
- Apollo Client (GraphQL)
- Jest