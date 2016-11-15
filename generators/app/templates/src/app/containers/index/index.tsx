import 'app/containers/index/style'

import React       from 'react'
import { connect } from 'react-redux'

import translate, { TranslateFunc } from 'app/hoc/translate'

declare var require: any

interface IOwnProps {
  translate: TranslateFunc
}

interface IStateProps {
  locale: string
}

interface IDispatchProps {

}

type Props = IOwnProps & IStateProps & IDispatchProps

/**
 * Container for the 'index' view.
 */
class IndexContainer extends React.Component<Props, void> {
  public render() {
    return (
      <article className="index-container">
        <h1>
          {this.props.translate('INDEX_CONTAINER', 'TITLE')}
        </h1>
      </article>
    )
  }
}

const smart = connect<IStateProps, IDispatchProps, IOwnProps>(
  state => ({
    locale: state.locale,
  })
)

export default translate(smart(IndexContainer), require('app/resource').default)
