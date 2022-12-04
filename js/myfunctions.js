
// 1
function checkerArg(input, expDtype){
    // ************************************
    //  Title:
    //  
    //  
    //  Details:
    //  
    //      undefined
    //      boolean
    //      number
    //      string
    //      bigint
    //      symbol
    //      object
    //      function
    //      
    //  
    //  Args:
    //      input (any) :
    //      expDtype (str) : Expected data type of input
    //
    //  Returns:
    //
    //  Raises:
    //
    //
    //  Examples:
    //
    //  Notes:
    //
    //
    // ************************************
    
    
    // list of data type *ref:https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures 
    const arrDtype = ["boolean", "number", "string", "bigint", "symbol", "object"];
    console.log(undefined == undefined)
    
    try{
        // Checking if expDtype is one of acceptable data types
        if(arrDtype.includes(expDtype)){
            // Checking if the data type of input is equal to expDtype
            let inputDtype = typeof input;
            if(inputDtype == expDtype){
                return [0, 0];
            }else{
                console.log(`ERROR 110 / input data type : ${inputDtype} is not same as expected one : ${expDtype}`);
                return [-1, 110];
                
            };
        // one of the arguments is null(undefined)     
        }else if( expDtype == undefined || input == undefined){
            console.log(`ERROR 100 / the arguments should not be null`)
            return [-1, 100]

        }else{
            console.log(`ERROR 101 / expected data type : ${expDtype} is not listed in the accepted data types`)
            return [-1, 101]
    };

    // all unexpected events are supposed to be caught
    }catch(error){
        console.error( error.name, error.message );
    }
 
}

//2
function cnvrtDecimal(deg, min, sec){
    // ************************************
    //  Title:
    //  
    //  
    //  Details:
    //  
    //  
    //  Args:
    //      input (any) :
    //      expDtype () :
    //
    //  Returns:
    //
    //  Raises:
    //
    //
    //  Examples:
    //
    //  Notes:
    //
    //
    // ************************************

    try{
        // chech if the arguments are number
        if(checkerArg(deg, "number") && checkerArg(min, "number") && checkerArg(sec, "number")){
            // Convertion from hexiadecimal to decimal because lati and long are hexiadecimal, but google map accept decimal.
            let decimal = deg * 60**0 + min / 60**1 +  sec / 60**2;
            return [0, decimal]
        } else{
            console.log("ERROR 200 / The data type of the all arguments should be number");
            return [-1, 200]
        }
    }catch(error){
        console.error( error.name, error.message);
    }
}