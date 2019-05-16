const getrupee = (dollar)=> { 
    if (typeof dollar === 'number') {return dollar * 72}
    else{
        throw error('not number')
    }

        
    }
    try {
        const myvalue = getrupee(5)
        console.log(myvalue);

    } catch (error) {
        console.log(error);
          
    }


