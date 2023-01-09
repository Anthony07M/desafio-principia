import { render, screen } from "@testing-library/react";
import { Card } from ".";
import { AiFillAlert } from "react-icons/ai";

describe("Card", () => {
    test('should be render with props', () => {
        render(
            <Card
                Icon={AiFillAlert}
                title="Title"
                value={200}
                type="gray"
                isMoeda
            />
        )

        const title = screen.getByRole('heading', { level: 3, name: 'Title' });
        const value = screen.getByText('R$ 200,00');
        const icon = screen.getByTestId('card-icon');

        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Title');

        expect(value).toBeInTheDocument();
        expect(value).toHaveTextContent('R$ 200,00');

        expect(icon).toBeInTheDocument();
    });

    test('should be render value 200', () => {
        render(
            <Card
                Icon={AiFillAlert}
                title="Title"
                value={200}
                type="gray"
            />
        )


        const value = screen.getByText('200');

        expect(value).toBeInTheDocument();
        expect(value).toHaveTextContent('200');
    });
});