import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div ref={node => (this.root = node)}>
          <main>
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </main>
      </div>
    );
  }
}

export default Layout;
