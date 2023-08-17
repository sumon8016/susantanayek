import React from 'react'

export default function Alert(props) {
  return (
    <>
            props.alerts &&<div className="alert  alert-warning alert- dismissible fade show "role="alert">
            <strong>{props.alerts.typ}</strong>:{props.alerts.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}

