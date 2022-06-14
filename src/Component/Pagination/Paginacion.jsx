import React from 'react'

function Paginacion({handlenext, Handleprev, next, prev}) {
  console.log(next)
  const handlenex = () => {
    handlenext();
  }
  const Handlepre = () => {
    Handleprev();
  }
  return (
    <div>
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
{prev? (
    <li className="page-item">
    <a className="page-link" onClick={Handlepre}> Previus</a>
  </li>
): null}

    {next? (
    <li className="page-item">
      <a  className="page-link"  onClick={handlenex}>Next</a>
  </li>
    ): null}

  </ul>
</nav>
    </div>
  )
}

export default Paginacion