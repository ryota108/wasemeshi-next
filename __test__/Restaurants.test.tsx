import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Explain from "../component/Explain/Explain";

describe("Rendering", () => {
  it("Should render hello text", () => {
    render(<Explain />); 
    expect(screen.getByRole("heading")).toBeInTheDocument()
  });
});
