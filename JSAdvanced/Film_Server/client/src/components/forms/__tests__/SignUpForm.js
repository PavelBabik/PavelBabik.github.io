import React from "react";
import RegistrationForm from "../RegistrationForm";
import { MemoryRouter } from "react-router-dom";
import {render} from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

test("SignUp form", async () => {
    const { container } = render(
        <MemoryRouter>
            <RegistrationForm />
        </MemoryRouter>
    );

    const result = await axe(container);
    expect(result).toHaveNoViolations()
});