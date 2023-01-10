import { useEffect, useState } from "react";
import { services } from "../../services/api";
import { Container } from "./styles";
import uuid from "react-uuid";

interface IModalProps {
    month: string;
}

export const Modal = ({ month }: IModalProps) => {
    const [students, setStudents] = useState<any[]>([]);
    const { listStudentsPerMonth, update } = services;

    const updated = async (month: string, mat: string) => {
        await update(month, mat);
        const response = await listStudentsPerMonth(month);
        setStudents(response);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await listStudentsPerMonth(month);
            setStudents(response);
        }

        fetchData();

    }, [listStudentsPerMonth, month])

    return (
        <Container>
            <tr>
                <th key={uuid()}>Matrícula</th>
                <th key={uuid()}>Mês</th>
                <th key={uuid()}>Valor</th>
                <th key={uuid()}>Status</th>
                <th key={uuid()}>Pago</th>
            </tr>
            {
                students?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td key={uuid()}>{item[0]}</td>
                            <td key={uuid()}>{item[1]}</td>
                            <td key={uuid()}>{Number(item[2]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            <td key={uuid()}>{item[3]}</td>
                            <td key={uuid()}>
                                <input
                                    type="checkbox"
                                    name="mat"
                                    value={item[0]} id=""
                                    checked={item[3] === 'pago'}
                                    onChange={(event) => updated(item[1], event.target.value)}
                                />
                            </td>
                        </tr>
                    )
                })
            }
        </Container>
    );
}