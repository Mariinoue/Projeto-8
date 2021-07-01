const series=require("../models/series.json")

const home=(request,response)=>{
    response.status(200).send(
        {
            "message":"lá, bem vinda ao {Reprograma}Flix!"
        }
        
    )
}

const getAll=(request,response)=>{
    response.status(200).send(series);
}

const getByTitle=(request,response)=>{
    const requisetedTitle=request.query.title.toLowerCase()

    const filteredTitle=series.find(serie=>serie.title.toLowerCase().includes(requisetedTitle))

    if(filteredTitle===""||filteredTitle===undefined){
        response.status(404).send(
            {
                "message":"Por favor, insira um título válido"
        })
    }else{
        response.status(200).send(filteredTitle)
    };
    response.status(200).send(filteredTitle)
}

const getById=(request,response)=>{
    const requisetedId=request.params.id;

    const filteredId=series.find(serie=>serie.id==requisetedId)

    response.status(200).send(filteredId)
}


module.exports={home,getAll,getById,getByTitle}