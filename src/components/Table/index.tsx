import { Container } from "./styles"
import { FiPlusCircle } from 'react-icons/fi';

interface ITableProps {
    titles: string[],
    data: Array<any[]>
    onClick: () => void;
    handleMonth: (month: string) => void;
};


export const Table = ({ data, titles, onClick, handleMonth }: ITableProps) => {
    return (
        <Container>
            <tr>
                {titles.map((title, index) => <th key={index}>{title}</th>)}
            </tr>
            {
                data.map((arr, index) => {
                    return (
                        <tr key={index}>
                            {
                                arr.map((item, index) => {
                                    const newItem = typeof item === 'number' ? item.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : item
                                    return (
                                        <>
                                            <td key={index}>{newItem}</td>
                                        </>
                                    )
                                }
                                )
                            }
                            <td
                                onClick={() => {
                                    onClick()
                                    handleMonth(arr[0])
                                }}
                             className="td-button"
                            >

                                Visualizar <FiPlusCircle />
                            </td>
                        </tr>
                    )
                })
            }

        </Container>
    )
}