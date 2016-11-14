import 'app/containers/index/style'

import React       from 'react'
import { connect } from 'react-redux'

import translate, { TranslateFunc } from 'app/hoc/translate'

declare var require: any

interface OwnProps {
  translate: TranslateFunc
}

interface StateProps {
  locale: string
}

interface DispatchProps {

}

type Props = OwnProps & StateProps & DispatchProps

/**
 * Container for the 'index' view.
 */
class IndexContainer extends React.Component<Props, void> {
  render() {
    return (
      <article className="index-container">
        <h1>
          {this.props.translate('INDEX_CONTAINER', 'TITLE')}
        </h1>
      </article>
    )
  }
}

const smart = connect<StateProps, DispatchProps, OwnProps>(
  state => ({
    locale: state.locale
  })
)

export default translate(smart(IndexContainer), require('app/resource').default)
