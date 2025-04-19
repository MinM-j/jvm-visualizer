import React from "react"

function Frame({name}) {
return (<>
<div >
{name}
</div>
</>)
}
function StackFrames({frames}) {
  return <>
  <div >
    {frames.length > 0 && frames.map(frame => <><Frame name = {frame.name}/></> )}
  </div>
</>
}

export default StackFrames

