import 'whatwg-fetch';
const Helper=(url,method,body)=>{
    if(body!==undefined){
        return(
            fetch(url,{
                method:method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:body
            })
            .then((response)=>{
                return response.json();
            })
            .catch((err)=>{
                return err;
            })
        );
    }
    else{
        return(
            fetch(url,{
                method:method,
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                return response.json();
            })
            .catch((err)=>{
                return err;
            })
        );
    }
}

export default Helper;