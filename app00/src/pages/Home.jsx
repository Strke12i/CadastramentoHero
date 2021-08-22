import React from 'react';
import { Wrapper,CampL,CampR, Title, Formulario,} from './styles';
import Form from '../components/Form';
import RightForm from '../components/RightForm';

const Home=()=>{

    return(
        <Wrapper>
            <CampR>
                
                <Title>POST</Title>
                <Formulario>
                        <Form/>
                </Formulario>
            
            
            </CampR>
            <CampL>
            <Title>GET</Title>
            <RightForm/>
            </CampL>
            
        </Wrapper>
    )

}

export default Home;