import { render, screen } from "@testing-library/react";
import Movie from "./index";

test("renders the title of the movie", () => {
  render(<Movie name="Conclave" />);

  const heading = screen.getByRole("heading", {
    name: "Conclave",
  });

  expect(heading).toBeInTheDocument();
});
