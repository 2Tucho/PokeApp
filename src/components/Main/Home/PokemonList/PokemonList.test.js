import React from "react";
import { shallow } from "enzyme";
import PokemonList from "./PokemonList";

describe("PokemonList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonList />);
    expect(wrapper).toMatchSnapshot();
  });
});
