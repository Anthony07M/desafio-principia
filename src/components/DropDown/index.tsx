import { useState } from "react"
import { Container } from "./styles"

interface IDropDownProps {
    itemSelected: string,
    handleSelect: (month: string) => void,
}

export const DropDown = ({ itemSelected, handleSelect }: IDropDownProps) => {
    const [active, setActive] = useState(false);
    return (
        <Container onClick={() => setActive(!active)} data-testid='dropdown'>
            <h4>{itemSelected}</h4>
            <ul className={`${active ? 'active': 'inactive'}`}>
                <li onClick={() => handleSelect('2022-01')}>2022-01</li>
                <li onClick={() => handleSelect('2022-02')}>2022-02</li>
                <li onClick={() => handleSelect('2022-03')}>2022-03</li>
                <li onClick={() => handleSelect('2022-04')}>2022-04</li>
                <li onClick={() => handleSelect('todos')}>Todos</li>
            </ul>
        </Container>
    )
}