import { IconType } from "react-icons";
import { Container } from "./styles";

interface ICardProps {
    title: string,
    value: string | number,
    Icon: IconType // melhorar
    isMoeda?: boolean
}

export const Card = ({ Icon, title, value, isMoeda = false }: ICardProps) => {
    const newValue = isMoeda ? (Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) : value;
    return (
        <Container>
            <Icon data-testid='card-icon' />
            <p>{newValue}</p>
            <h3>{title}</h3>
        </Container>
    );
}