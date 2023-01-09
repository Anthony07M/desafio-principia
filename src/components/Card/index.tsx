import { IconType } from "react-icons";
import { Container, variantType } from "./styles";

interface ICardProps {
    title: string,
    value: string | number,
    Icon: IconType,
    isMoeda?: boolean,
    type: variantType,
}

export const Card = ({ Icon, title, value, type ,isMoeda = false }: ICardProps) => {
    const newValue = isMoeda ? (Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) : value;
    return (
        <Container type={type}>
            <Icon data-testid='card-icon' />
            <p>{newValue}</p>
            <h3>{title}</h3>
        </Container>
    );
}