import React, { useEffect, useState,useRef} from 'react';


// const ICON = require('./assets/lock.json');
// const playerRef = useRef<Player>(null);
function get_values_from_obj_array(arr, type){
      console.log("arr ", arr)
      if(type == "array:C"){
          return arr
                .map(obj => Object.entries(obj)[0][1])
                .map(charCode => String.fromCharCode(charCode))
                .join("")
      }else if(type.startsWith("array:")){
          return arr
                .map(obj => Object.entries(obj)[0][1])
}

    return arr.map(obj => {
        switch(typeof(obj)){
            case "string":
                return  obj == "Uninitialized" ? "??" : obj;

            case "object":
                  const [key, value] = Object.entries(obj)[0]
                  if(key == "Reference" || key == "Ref") {
                    return `Ref: ${value.replace("Object Id: ", "")}`
                  }else{
                    return `${key}: ${value}`
                }

            default:
            alert("unhandled value type");
        }
    })
}

function normaliseJavaLangType(type){
    if(type.startsWith("array:")){
        switch(type){
            case "array:C":
                return "array:char"
            case "array:I":
              return "array:int"
        default:
        return type;
        }
    }
    else if(type.startsWith("java"))
        return type.split("/").pop();
    else
        return type;
}
//function normalizeArrayValues(itemType, values){
//
//}
//
//function normalizeDumpedValues(type, values){
    //if(type.startsWith("array:")){
        //type.slice("array:".length) == "C" ? "char" :
//
//
        //switch(type){
            //case "array:C":
                //const itemType = "char";
                //return ["array:char", normalizeArrayValues(, values)]
            //case "array:I":
              //return "array:int"
        //default:
        //return type
        //}
    //}
//}

function normaliseMemory(memory){
//console.log("memory y/o", memory)
    return memory.map(obj => {
        const [ref, type, static_values, instanceValues] = obj
        const mappedInstanceValues = get_values_from_obj_array(instanceValues, type)
        const typeInfo =  normaliseJavaLangType(type);
        return {type: typeInfo, values: mappedInstanceValues, ref: ref}
    })
}

const MemoryAllocation = ({memory: {young, old}, memorySize}) => {

    console.log("memory", young, old, memorySize)
    const youngMemory = normaliseMemory(young)
    const oldMemory = normaliseMemory(old)
    console.log("youngMemory, oldMemory", youngMemory, oldMemory, memorySize)

return (
 <div className="border-[3px] border-black flex flex-col min-h-80 w-[36vw] mt-10">
      {/* Young Generation Section */}
      <div className="flex-1 border-b-2 border-black p-2 overflow-y-auto bg-lime-50 bg-opacity-60">
        <p className="font-bold mb-2 text-xl text-left pl-6 pt-1">Young:</p>
        <div className="space-y-1">
        { youngMemory.length > 0 && youngMemory.map(({type, values, ref}) => 
              <p class="border border-yellow-500 p-[1px]">
                {ref}: {type}, {typeof(values) == "string" ? `"${values}"` : values.join(" | ")} 
              </p>
        )}
        </div>
      </div>

       {/* Old Generation Section */}
      <div className="flex-1 p-2 overflow-y-auto bg-red-100 bg-opacity-60">
        <p className="font-bold mb-2 text-xl text-left pl-6 pt-1">Old:</p>
        <div className="space-y-1">
        { oldMemory.length > 0 && oldMemory.map(({type, values, ref}) =>
          <p class="border border-yellow-500 p-[1px]">
            {ref}: {type}, {typeof(values) == "string" ? `"${values}"` : values.join(" | ")} 
          </p>
        )}
        </div>
      </div>
    </div>
)
}

export default MemoryAllocation
