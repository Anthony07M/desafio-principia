import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { Chart } from "../../components/Chart";
import { Table } from "../../components/Table";
import { options, titles } from "../../utils";
import { services } from "../../services/api";
import { DropDown } from "../../components/DropDown";
import { CgCloseO } from "react-icons/cg";
import { FiPercent } from "react-icons/fi";
import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import { TbCurrencyReal} from 'react-icons/tb';
import { CiWallet } from 'react-icons/ci';
import { BsCalendar2Check } from 'react-icons/bs'

export const Dashboard = () => {
    const [data, setData] = useState<any>([]); // mudar nome 
    const [itemTotal, setItemTotal] = useState<any>({});
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [itemSelected, setItemSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');

    const list = async (month = 'todos') => {
        const { listStudents } = services;
        const { data, result, lastArray } = await listStudents(month)

        setItemSelected(month)
        setItemTotal(lastArray ? lastArray : data);
        setData(result);
    }

    useEffect(() => {
        list(); // mudar nome da funação
    }, [])


    return (
        <Container>
            <h1>Dashboard</h1>
            <Content>
                <Card
                    Icon={FiPercent}
                    title='Total Inadiplência'
                    value={itemTotal.percentage}
                    type='blue'
                />
                <Card
                    Icon={TbCurrencyReal}
                    title='Total pago'
                    isMoeda
                    type="green"
                    value={itemTotal.pago}
                />
                <Card
                    Icon={CiWallet}
                    title="Em aberto"
                    value={itemTotal.open}
                    type="red"
                    isMoeda
                />
                <Card
                    Icon={BsCalendar2Check}
                    title="Mês"
                    value={itemTotal.final}
                    type="black"
                />
            </Content>
            <div className="content-drop-down">
                <DropDown
                    itemSelected={itemSelected}
                    handleSelect={(month) => list(month)}
                />
            </div>
            <div className="content-chart">
                <Chart
                    chartType="Bar"
                    width="70vw"
                    height='500px'
                    data={[titles.chartTitle, ...data]}
                    options={options}
                />
                <Table
                    data={data}
                    titles={titles.tableTitle}
                    onClick={() => setOpenModal(true)}
                    handleMonth={(month) => setMonthSelected(month)}
                />
            </div>
            <div className={`${openModal ? 'modal-open' : 'modal-close'} `}>
                <CgCloseO onClick={() => setOpenModal(false)} />
                <h3>Lista referente ao mês {monthSelected}</h3>
                <Modal
                    month={monthSelected}
                />
            </div>
        </Container>
    );
};
