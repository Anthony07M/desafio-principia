import { useEffect, useState } from "react";
import { services } from "../../services/api";
import { Container } from "./styles";

interface IModalProps {
    month: string;
}

export const Modal = ({ month }: IModalProps) => {
    const [students, setStudents] = useState<any[]>([]);
    const { listStudentsPerMonth, update } = services;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const listStudents = async () => {
        const response = await listStudentsPerMonth(month);
        setStudents(response);
    }

    useEffect(() => {
        listStudents();
    }, [listStudents])

    return (
        <Container>
            <tr>
                <th>Matrícula</th>
                <th>Mês</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Pago</th>
            </tr>
            {
                students?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td key={index + 10}>{item[0]}</td>
                            <td key={index + 20}>{item[1]}</td>
                            <td key={index + 30}>{Number(item[2]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            <td key={index + 40}>{item[3]}</td>
                            <td key={index + 50}>
                                <input
                                    type="checkbox"
                                    name="mat"
                                    value={item[0]} id=""
                                    checked={item[3] === 'pago'}
                                    onChange={(event) => update(item[1], event.target.value)}
                                />
                            </td>
                        </tr>
                    )
                })
            }
        </Container>
    );
}