const fetch = require("node-fetch");


export const Postar=(content)=>{
    fetch("http://localhost:5000/enviar",
    {
        method:"POST",
        body:JSON.stringify(content),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then((response)=>console.log(response))
    

}

export const GetStatus=(id)=>{
    return(fetch("http://127.0.0.1:5000/buscar/"+id)
    )
}

export const BuscarbyId=(id)=>{
    const url="http://127.0.0.1:5000/buscar/"+id
    return(fetch(url).then((response)=>{return response.json()}))
    /*
    return(fetch(url,{
        method:"GET",
    }).then(response => response.json()).then((data)=>{
        return data
    }))
      */ 
}

