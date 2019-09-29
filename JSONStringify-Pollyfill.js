function polyfill(obj){
    var result
    var seperator
    var objValue
    var objKey 
    result = Object.keys(obj).reduce( (acc , key , i) => {
       objKey = "\"" + key + "\"" + ":"
       seperator = Object.keys(obj).length - 1 == i ? "" : ",";
       objValue = (typeof(obj[key]) == "string" ? "\"" + obj[key] + "\"" : obj[key])
       acc = acc + objKey + ( typeof obj[key] == "object" ? polyfill( obj[key] )  : objValue ) + ( seperator )
       return acc
    } , "" )
    
    return "{" + result + "}"
}