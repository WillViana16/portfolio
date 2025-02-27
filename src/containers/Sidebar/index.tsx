import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Willian Gonçalves Viana</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        WillViana16
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack Python
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
