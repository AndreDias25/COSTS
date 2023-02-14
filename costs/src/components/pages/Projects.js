import { useLocation } from "react-router-dom"; //para pegar a mensagem do body do fetch que eu fiz no create Post no NewProject.js

import Message from "../layout/Message";

function Projects(){
    
    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message
    }
    
    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message msg={message} type="sucess"/>}
        </div>
    )
}

export default Projects;