import React,{useState} from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BuscarbyId,GetStatus} from '../../services/api';

const Form=styled.div`
    width:75%;
    background-color:#ccc;
    margin:0 auto;
    text-align:center;
    height:400px;
    border:4px solid black;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:6px;
`;
const Input=styled.input`
    width:65%;
    border-radius:4px;
    font-family:cursive;
    margin-right:15px;

`;
const Field=styled.div`
    display:flex;
    flex-direction:row;
    
`;
const Title=styled.h3`
    margin-top:10px;
    font-size:1.125em;
`;

const Dados=styled.div`
    border-radius:10px;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:75%;
    height:300px;
    background-color:#eee;
    scroll:smooth;
    overflow-y:scroll;
    
`;
const Nome=styled.h3`
    font-size:1.2em;
    margin-top:10px;
`;

const RightForm=()=>{

    const [id,setId]=useState("");
    const [dados,setDados]=useState(['','']);
    const [validar,setValidar]=useState(true);

    const Buscar=()=>{

        GetStatus(id).then((response)=>{
            response.status !== 200 ? setValidar(false) :
            setValidar(true)
        })

        if(validar===true){
            BuscarbyId(id).then((data)=>setDados([data.nome,data.poderes]))
        }
    
        /*
    fetch(url).then((response)=>console.log(response.status))
        try{
        BuscarbyId(id).then((data)=>setDados([data.nome,data.poderes]))}
        catch{
            console.log("Erroor");
        }
    */
    }
    

    return(
        <>
        
        <Form>
            <Title>Buscar Herói pelo nome</Title>
            <Field>
                <Input onChange={(e)=>setId(e.target.value)}/> 
                <button type="button" onClick={Buscar} className="btn btn-outline-primary">Clicar</button>
            </Field>
            <Dados>
            <div>{
                    validar === false? <h4 color="#f00">Erro na api</h4> : ""
                }</div>
            <div>
                {dados[0]!=="" && validar?  
            (
                <>
                <Nome>Nome: {dados[0]}</Nome>
    
                    <Nome>Poderes: </Nome>
                    {dados[1].split(",").map((i)=>{
                        if(i!==""){
                            return(<h6 key={i}>{i}</h6>)
                        }
                        
                    })}
     
                </>
            )
            
            : ""}</div>
            </Dados>

        </Form>

        
        </>
    );

}

export default RightForm;
