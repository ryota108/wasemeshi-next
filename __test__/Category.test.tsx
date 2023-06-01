import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Category from "../component/Category/Category"

describe("Rendering", () => {
  it("Should render title text", () => {
    render(<Category />); 
    expect(screen.queryByText("¥1000")).toBeTruthy
  });
});