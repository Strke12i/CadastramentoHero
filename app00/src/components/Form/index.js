
import React,{useState} from 'react';
import styled from 'styled-components';
import { RiAddFill } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Postar} from '../../services/api';

const Forms=styled.form`
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Input=styled.input`
    width:60%;
    margin-top:5px;
    margin-bottom:10px;
    border-radius:4px;
    font-family:cursive;
`;

const Label=styled.label`
    font-size:16px;
    margin-bottom:5px

`;

const Button=styled.button`
    margin-top:10px;
    height:40px;
`;

const Form=()=>{
    const [Personagem, setPersonagem] = useState('')
    const [nomeReal, setNomeReal] = useState('')
    const [poderes, setPoderes] = useState([])
    const [send,setSend]=useState(false);
    const addInputButton=(e)=>{
        e.preventDefault();
        setPoderes([...poderes,""])

    }

    const handleChangePoder=(e,i)=>{
        poderes[i]=e.target.value;
        setPoderes([...poderes])
    }

    const GetValues=()=>{

        let str='';
        poderes.map((poder)=>{
            if(poder!=="")
                str+=poder+','
            
        })        
        const content={
            id:Personagem,
            realnome:nomeReal,
            poderes:str
        };

        Postar(content);
        setSend(true);

        setPoderes([]);
        setNomeReal("")
        setPersonagem("");
    }

    return(
        <Forms>
            
            <Label>Personagem</Label>
            <Input value={Personagem} onChange={(e)=>setPersonagem(e.target.value)} placeholder="Personagem"/>
            <Label>Nome Real</Label>
            <Input value={nomeReal} onChange={(e)=>setNomeReal(e.target.value)} placeholder="Nome Real"/>
            <Label>Poderes <button onClick={addInputButton} className="btn btn-secondary btn-sm">
                <RiAddFill/>
            </button>
            </Label>

            <span>{send?"Enviado com sucesso":""}</span>


            <div>
                
                {
                   poderes.map((poder,i)=>(
                    <div key={i}>
                    <Input key={i} id={`poder${i}`}  placeholder="Poder" onChange={(e)=>handleChangePoder(e,i)} />
                    </div>
                   ))

                }
            </div>

            <Button onClick={GetValues} type="button" className="btn btn-outline-success">Enviar</Button>
            


        </Forms>
    )
}

export default Form;