import React, { Component } from 'react';
import { Button } from 'antd';

class SyncError extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this._onReloadClick = this._onReloadClick.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          { 'Fail to Sync With Blockchain' }
        </div>
        <Button type='primary' size='large' onClick={ this._onReloadClick }>
          { 'Click here to retry' }
        </Button>
      </div>
    );
  }

  _onReloadClick(e) {
    if (e) {
      e.preventDefault();
    }

    this.context.router.push('/home');
  }
}


export default SyncError;
