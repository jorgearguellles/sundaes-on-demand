import { render, screen, fireEvent } from "@testing-library/react"; // render the components, screen allows us find elements and fireEvent simulated user interactive
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Testing <SummaryForm />", () => {
  test("1. Initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test("2. Checkbox enables button on first click and disables on second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test("3. Popover responds to hover", () => {
    render(<SummaryForm />);
    //popover starts out hidden

    //popover appears upon mouseover of checkbox label

    //popover disappear when we mouse out
  });
});
