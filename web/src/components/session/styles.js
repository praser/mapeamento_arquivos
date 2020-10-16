import styled from "styled-components"
import { COLORS_VARIANTS } from "../../utils/constants"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  height: 100%;
  color: #6a7580;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1.5rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #c3c5c7;
  margin-bottom: 10px;
  &::placeholder {
    opacity: 0.3;
  }
`

export const Button = styled.button`
  padding: ${({ small }) => (small ? 5 : 10)}px;
  font-size: ${({ small }) => (small ? 0.8 : 1)}rem;
  border-radius: ${({ small }) => (small ? 2.5 : 5)}px;
  border: 0;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: ${({ variant }) =>
    variant ? COLORS_VARIANTS[variant] : COLORS_VARIANTS.primary};
  color: #ffffff;
  opacity: 0.8;
  transition: opacity 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
