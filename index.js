// Write your solution in this file!
var employee = {
    name : "Hiba" ,
    streetAddress : "Al-Maghreb st."
}
function updateEmployeeWithKeyAndValue(object , key , value){
    return{
        ...object,
        [key]:value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(object , key , value) {
   
        object[key]= value;
        return object;
    
}

function destructivelyDeleteFromEmployeeByKey(object , key) {
    
        delete object[key];
        return object;
    
}
function deleteFromEmployeeByKey(object,key){
    const newObject = {...object};
    delete newObject[key];
    return newObject;
}