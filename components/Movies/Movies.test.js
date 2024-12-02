import { render, screen } from "@testing-library/react";
import Movies from ".";
import userEvent from "@testing-library/user-event";

const initialMovies = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders list of movies", () => {
  render(<Movies initialMovies={initialMovies} />);

  initialMovies.forEach((movie) => {
    const heading = screen.getByRole("heading", {
      name: movie.name,
    });

    expect(heading).toBeInTheDocument();
  });
});

test("submitted movie gets renders in the list", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={initialMovies} />);

  const input = screen.getByLabelText("Name");
  // document.querySelector()
  await user.type(input, "Conclave");

  const submitButton = screen.getByRole("button", {
    name: "Add",
  });
  await user.click(submitButton);

  const heading = screen.getByRole("heading", {
    name: "Conclave",
  });

  expect(heading).toBeInTheDocument();
});
