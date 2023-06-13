import { render, screen,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Category from "../component/Category/Category"

describe("Rendering",() => {
  it("button text", async ()=>{
    render(<Category />); 
    const categoryItem = screen.getByTestId("category-list")
    const categoryDiv = screen.getByTestId("category-div")
    userEvent.click(categoryItem)
    await waitFor(() => {
      screen.debug(categoryDiv)
    });
  })
});