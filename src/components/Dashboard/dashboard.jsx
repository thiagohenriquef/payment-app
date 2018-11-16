import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

class Dashboard extends Component {
  componentWillMount () {
    this.props.getSummary()
  }
  render () {
    const { credit, debit } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0.0' />
        <Content>
          <Row>
            <ValueBox text='Total de Créditos' color='green' icon='bank' value={`R$ ${credit}`} cols='12 4' />
            <ValueBox text='Total de débitos' color='red' icon='credit-card' value={`R$ ${debit}`} cols='12 4' />
            <ValueBox text='Valor consolidaddo' color='blue' icon='money' value={`R$ ${credit - debit}`} cols='12 4' />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)