import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function Bomb({ shouldThrow = false }) {
  if (shouldThrow) throw new Error("");
  else return null;
}

describe("<ErrorBoundary />", () => {
  const consoleError = jest.spyOn(console, "error");
  consoleError.mockReturnValue();

  afterAll(() => {
    consoleError.mockRestore();
  });

  it("should output error text", () => {
    const { rerender } = render(<Bomb />, {
      wrapper: ErrorBoundary as any,
    });

    rerender(<Bomb shouldThrow />);
    //1 - ReactDOM, 2 - jest-dom, 3 - custom, 4 - Strict Mode
    expect(consoleError).toHaveBeenCalledTimes(4);
    expect(screen.getByRole("error").textContent).toMatchInlineSnapshot(
      `"Something went wrong!"`
    );
  });
});
