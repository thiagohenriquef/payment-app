import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'

import Tab from '../../common/tab/tab'
import TabsContent from '../../common/tab/tabsContent'
import TabsHeader from '../../common/tab/tabsHeader'
import TabHeader from '../../common/tab/tabHeader'


class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tab>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList'/>
              <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tab>
        </Content>
      </div>
    )
  }
}
export default BillingCycle