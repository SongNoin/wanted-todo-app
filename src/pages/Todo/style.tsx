import styled from 'styled-components'
import { CommonInput } from 'components/commons/inputs/CommonInput'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

interface todoInputProps {
  type: string
  value: string
  placeholder?: string
  autoFocus?: boolean
  testId?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

export const TodoInput = (props: todoInputProps) => (
  <CommonInput fontSize='36px' height={80} {...props} />
)
