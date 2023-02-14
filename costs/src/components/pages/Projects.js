import { useLocation } from "react-router-dom"; //para pegar a mensagem do body do fetch que eu fiz no create Post no NewProject.js

import styles from './Projects.module.css';

import Container  from '../layout/Container';
import LinkButton from '../layout/LinkButton';


import Message from "../layout/Message";

function Projects(){
    
    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message
    }
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message msg={message} type="sucess"/>}
            <Container customClass="Projetos">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects;