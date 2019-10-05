import { render } from "@testing-library/react";
import Home from "./home.component";
import React from "react";

describe("<HomeComponent/>", () => {
  test("Renders successfully", () => {
    render(<Home />);
  });
});
