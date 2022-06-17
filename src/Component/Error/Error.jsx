import React from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
function Error(props) {
console.log(props)

function handlerror(){
    if(props.error.error){
        Swal.fire({
            title: 'Error',
            text: "Character Not Found",
            icon: 'error',
            timer: 3000,
            confirmButtonText: 'Close',
        }
          )
    }
}
  return (
    <div >
        {handlerror()}
    </div>
  )
}

export default Error