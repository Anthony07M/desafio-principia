/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { DropDown } from ".";

describe("DropDown", () => {
    const handleSelectMock = jest.fn();
    beforeEach(() => {
        render(
            <DropDown
                handleSelect={handleSelectMock}
                itemSelected="Todos"
            />,
        );
    });

    test("should be render item default Todos", () => {
        const itemSelected = screen.getByRole("heading", { level: 4, name: "Todos"});

        expect(itemSelected).toBeInTheDocument();
        expect(itemSelected).toHaveTextContent("Todos");
    });

    test("should be render list 5 items", () => {
        const dropdown = screen.getByTestId("dropdown");
        
        fireEvent.click(dropdown);

        const items = screen.getAllByRole("listitem");

        expect(items.length).toEqual(5);

        expect(items[0]).toHaveTextContent("2022-01");
        expect(items[1]).toHaveTextContent("2022-02");
        expect(items[2]).toHaveTextContent("2022-03");
        expect(items[3]).toHaveTextContent("2022-0");
        expect(items[4]).toHaveTextContent("Todos");
    });

    test("should be called function handleSelect", () => {
        const dropdown = screen.getByTestId("dropdown");
        
        fireEvent.click(dropdown);

        const items = screen.getAllByRole("listitem");

        fireEvent.click(items[1]);

        expect(handleSelectMock).toBeCalledTimes(1);

    });

});