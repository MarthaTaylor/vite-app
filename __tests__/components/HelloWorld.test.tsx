import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";

test("renders hello world text", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello, Vite with TypeScript!")).toBeInTheDocument();
});


