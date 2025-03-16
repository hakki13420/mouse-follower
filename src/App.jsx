import { React, useEffect } from "react";
import "./App.css";
import { useState } from "react";


function MouseFolower() {

  const [activate, setActivate] = useState(false)
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handlMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })

    }
    window.addEventListener("pointermove", handlMove);
    return () => window.removeEventListener("pointermove", handlMove)
  }, [activate])



  return (
    <div className="container" onContextMenu={(e) => {
      e.preventDefault()
      setShow(!show)
    }}>
      {activate && <span className="mouse" style={{ "transform": `translate(${position.x}px, ${position.y}px)` }} ></span>}
      {show &&
        <button style={{ "transform": `translate(${position.x - 15}px, ${position.y - 10}px)` }}
          onClick={() => {
            setActivate(!activate)
            setShow(false)
          }}>
          {activate ? "Desactivate" : "Activate"} Mouse
        </button>
      }

    </div>
  )
}

export default MouseFolower


