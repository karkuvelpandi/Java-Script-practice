let goTomovie=(success,failure)=>{
    let amount=200
    if(amount>500){
        success("got tickets and enjoy")
    }
    else{
        failure("go to pg")
    }
}

//goTomovie(1,2) we send function as a arguments
goTomovie((tickets)=>{console.log(tickets);},
            (err)=>{console.log(err);})