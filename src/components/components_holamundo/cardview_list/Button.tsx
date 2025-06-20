import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
  onClickButton: () => void;
  isLoadingButton: boolean;
}

function Button({children, isLoadingButton, onClickButton}: Props) {
  return (
    <button
      onClick={onClickButton}
      disabled = {isLoadingButton}
      type="button" 
      className={`btn btn-${isLoadingButton ? 'secondary': 'primary'}`}
    >
      { isLoadingButton ? 'Cargando boton...' : children}
    </button>
  )
}

export default Button