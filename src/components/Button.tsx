import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
  onClickButton: () => void;
}

function Button({children, onClickButton}: Props) {
  return (
    <button
      onClick={onClickButton}
      type="button" 
      className= "btn btn-primary"
      style={{
        margin: '4px'
      }}
    >
      {children}
    </button>
  )
}

export default Button