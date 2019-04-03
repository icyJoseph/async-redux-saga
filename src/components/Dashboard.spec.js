// Must have at least one test file in this directory or Mocha will throw an error.
import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  const { container } = render(<Dashboard />);
  it("renders", () => {
    expect(container).toBeDefined();
  });
});
