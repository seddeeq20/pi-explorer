import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import {injectIntl} from 'react-intl'

import LedgerTable from './LedgerTableContainer'
import OperationTable from './OperationTable'
import TransactionTable from './TransactionTableContainer'
import Title from './shared/TitleWithLink'

const panelHeader = (title, viewAllLabel, viewAllLink) => (
  <Title
    rightLinkAddr={viewAllLink}
    rightLinkLabel={viewAllLabel}
    title={title}
  />
)

class Home extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    const viewAllStr = formatMessage({id: 'view.all'})
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <Panel
              header={panelHeader(
                formatMessage({id: 'latest.operations'}),
                viewAllStr,
                '/operations'
              )}
            >
              <OperationTable compact fill limit={25} refresh />
            </Panel>
          </Col>
          <Col md={4}>
            <Panel
              header={panelHeader(
                formatMessage({id: 'latest.txs'}),
                viewAllStr,
                '/txs'
              )}
            >
              <TransactionTable compact fill limit={10} refresh />
            </Panel>
            <Panel
              header={panelHeader(
                formatMessage({id: 'latest.ledgers'}),
                viewAllStr,
                '/ledgers'
              )}
            >
              <LedgerTable fill limit={10} refresh />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default injectIntl(Home)
