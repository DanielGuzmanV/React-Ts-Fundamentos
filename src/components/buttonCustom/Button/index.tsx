import type { ReactNode } from "react"
import styled from "styled-components"

type BtnProps = {
  isloadingBtn: boolean
}

const Btn = styled.button <BtnProps>`
  background-color: ${(props) => props.isloadingBtn ? 'blue':'red'};
  padding: 25px 30px;
  margin: 4px;
`;

type Props = {
  children: ReactNode;
  onClickButton: () => void;
  isLoadingBtn: boolean
}

function Button({children, onClickButton, isLoadingBtn}: Props) {

  return (
    <Btn
      onClick={onClickButton} isloadingBtn = {isLoadingBtn}
    >
      {children}
    </Btn>
  )
}

export default Button