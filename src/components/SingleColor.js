import React, { useState, useEffect } from "react";

export default function Singlecolor({ weight, type, hexColor, index, weightColor }) {

  const [alert, setAlert] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(`#${hexColor}`)
    setAlert(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <div className={`color ${type === "shade" && 'color-light'}`} 
    style={{ background: `#${hexColor}` }} onClick={handleClick} >
      <p className="percent-value"> {weight}% </p>
      <p className="color-value"> #{hexColor} </p>
      { alert && <p className="alert"> copied to the clipboard </p>}
    </div>
  );
}
