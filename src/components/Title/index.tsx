import { Title as TituloEstilo } from './styles'

export type Props = {
  //tipagem
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Title
