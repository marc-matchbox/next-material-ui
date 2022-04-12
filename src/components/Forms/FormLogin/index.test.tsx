import { InternationalizationContextProvider } from "../../../context/InternationalizationContext";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormLogin } from ".";

describe("Shoul testing LoginForm", () => {
  const handleSubmit = jest.fn();

  it("should be show FormLogin", async () => {
    render(
      <InternationalizationContextProvider>
        <FormLogin onSubmit={(values) => handleSubmit(values)} />
      </InternationalizationContextProvider>
    );

    const inputEmail = screen.getByRole("input-email");
    const inputPassword = screen.getByRole("input-password");

    const emailValue = "marc@teste.com";
    const passwordValue = "12345678";

    // catch field email and input 'marc@teste.com' in value field
    userEvent.type(inputEmail, emailValue, { delay: 1 });

    // catch field password and input '12345678' in value field
    userEvent.type(inputPassword, passwordValue, { delay: 1 });

    await waitFor(() => userEvent.click(screen.getByRole("button")));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: emailValue,
        password: passwordValue,
      })
    );
  });
});
