import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormControl } from "../FormControl";

describe('<FormControl />', () => {
    it('should render the label and the input', () => {
        render(<FormControl label="Test Label" />);
        expect(screen.getByText('Test Label')).toBeVisible();
        expect(screen.getByRole('textbox')).toBeVisible();
    });

    describe('when the input is of type password', () => {
        it("should render the forgot password link", () => {
            render(<FormControl label="Password" type="password" />);
            expect(screen.getByText('Forgot password?')).toBeVisible();
        });
    });

    describe('when the input has an error', () => {
        it('should include aria-invalid attribute as true', () => {
            render(<FormControl label="Test Label" error />);
            expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
        });
    });
});