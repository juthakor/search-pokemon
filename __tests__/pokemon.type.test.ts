import { bulbasaur, charmander, squirtle } from "../test-utils/fixtures/pokemon.mocks";

describe("Pokemon primary type", () => {
  it("Bulbasaur is Grass", () => {
    expect(bulbasaur.types).toContain("Grass");
  });
  it("Charmander is Fire", () => {
    expect(charmander.types).toContain("Fire");
  });
  it("Squirtle is Water", () => {
    expect(squirtle.types).toContain("Water");
  });
});
