import type { ReactNode } from "react"
import stylesCss from "./Button.module.css"

type Props = {
  children: ReactNode;
  onClickButton: () => void;
}

function Button({children, onClickButton}: Props) {

  const classNameStyle = [
    stylesCss.button, 
    stylesCss.padded
  ].join(' ');

  return (
    <button
      onClick={onClickButton}
      type="button" 
      className= {classNameStyle}
      
    >
      {children}
    </button>
  )
}

export default Button