import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
     <div className="transition-all duration-500 bg-green-50 absolute w-screen left-0 top-0 h-[40px] flex pl-9 items-center alert-warning alert-dismissible fade show" role="alert">
       {props.alert}
      </div>
  )
}