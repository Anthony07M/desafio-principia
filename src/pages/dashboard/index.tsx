import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { Chart } from "../../components/Chart";
import { Table } from "../../components/Table";
import { services } from "../../services/api";
import { DropDown } from "../../components/DropDown";
import { CgCloseO } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { FiPercent } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";
import { options, titles } from "../../utils";
import { BsCalendar2Check } from "react-icons/bs"
import { Container, Content } from "./styles";
import { useEffect, useState } from "react";

export const Dashboard = () => {
    const [data, setData] = useState<Array<string[] | number[]>>([]);
    const [itemTotal, setItemTotal] = useState<any>({});
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [itemSelected, setItemSelected] = useState<string>('');
    const [monthSelected, setMonthSelected] = useState<string>('');

    const list = async (month = 'todos') => {
        const { listStudents } = services;
        const { data, result, lastArray } = await listStudents(month)
        
        setItemSelected(month)
        setItemTotal(lastArray ? lastArray : data);
        setData(result);
    }

    useEffect(() => {
        list();
    }, [setOpenModal, openModal])

    return (
        <Container>
            <h1>Dashboard</h1>
            <Content>
                <Card
                    Icon={FiPercent}
                    title="Total Inadiplência"
                    value={itemTotal.percent}
                    type="blue"
                />
                <Card
                    Icon={TbCurrencyReal}
                    title="Total pago"
                    isMoeda
                    type="green"
                    value={itemTotal.paidOut}
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
                    value={itemTotal.month}
                    type="gray"
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
                    height="500px"
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
            <div className={`${openModal ? "modal-open" : "modal-close"} `}>
                <CgCloseO onClick={() => setOpenModal(false)} />
                <h3>Lista referente ao mês {monthSelected}</h3>
                <Modal
                    month={monthSelected}
                />
            </div>
        </Container>
    );
};
