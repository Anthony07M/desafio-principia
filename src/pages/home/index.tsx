import { Container, Content } from "./styles"
import Lottie from "lottie-react";
import dashJson from '../../assets/animation-dashboard.json';
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from 'react-icons/md';

export const Home = () => {
    return (
        <Container>
            <Content>
                <div className="content-title">
                    <h1>Desafio Princípia</h1>
                    <p>
                        <strong>Processo seletivo caso prático, <span>inadimplência</span> de alunos.</strong>
                    </p>
                </div>
                <Lottie
                    animationData={dashJson}
                    style={{
                        height: 506,
                        width: 594
                    }}
                />
            </Content>
            <div className="content-link">
                <Link to="/dashboard">DASHBOARD <MdOutlineNavigateNext/></Link>
            </div>
        </Container>
    );
}