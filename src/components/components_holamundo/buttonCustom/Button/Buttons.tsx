import type { ReactNode } from "react"
import styled from "styled-components"

type BtnProps = {
  isloadingBtn: boolean
}

const Btn = styled.button <BtnProps>`
  background-color: ${(props) => props.isloadingBtn ? 'blue':'red'};
  padding: 25px 30px;
  margin: 4px;
  border-radius: 10px
`;

type Props = {
  children: ReactNode;
  onClickButton: () => void;
  isLoadingBtn: boolean
  fnIsBool: () => void;
}

function Button({children, onClickButton, isLoadingBtn, fnIsBool}: Props) {

  const handleBtn =() => {
    onClickButton()
    fnIsBool()
  }

  return (
    <Btn
      onClick={handleBtn} isloadingBtn = {isLoadingBtn}
    >
      {children}
    </Btn>
  )
}

export default Button