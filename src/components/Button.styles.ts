import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  color: #fff;
  margin: 0px 10px;

  background-color: ${(props) => props.theme['green-500']};

  /*${(props) => {
    return css`
      background-color: ${ButtonVariants[props.variant]};
    `
  }}*/
`
