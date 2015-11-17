import React, { PropTypes, Component } from 'react';
import ClassNames from '../decorators/ClassNames';
import styles from './style';

@ClassNames(styles)
class Card extends Component {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    classNames: PropTypes.func,
    raised: PropTypes.bool
  }

  render () {
    const {
      children,
      className,
      classNames,
      raised,
      ...otherProps
    } = this.props;

    const classes = classNames('card', {
      'raised': raised
    }, className);

    return (
      <div
        data-react-toolbox="card"
        className={classes}
      >
        {children}
      </div>
    );
  }
}

export default Card;
