import { render, fireEvent } from "@testing-library/react";
import Banner from "./banner.component";
import React from "react";

describe("<BannerComponent/>", () => {
  test("Renders successfully", () => {
    const wrapper = render(<Banner />);
    expect(wrapper.getByText("Welcome to Developer Circles Eldoret")).not.toBe(
      null
    );
    expect(
      wrapper.getByText(
        "We are community-driven program based in Eldoret sponsored by Facebook free to join and open to any developer."
      )
    ).not.toBe(null);
    expect(wrapper.getByAltText("Diversity icon")).not.toBe(null);
    expect(wrapper.getByText("Join our Facebook Group")).not.toBe(null);
  });
});
