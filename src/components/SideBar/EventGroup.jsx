import React, { Component } from 'react';
import './EventGroup.less';

class EventGroup extends Component {
  render() {
    const { id, onClick, data, name } = this.props;
    return (
      <div className='eventgroup-node-container' key={ id } onClick={ onClick  }>
        <div className={ `eventgroup-label-container${data.isSelected ? '-selected' : ''}` }>
          <label>{ name }</label>
        </div>
      </div>
    );
  }
}

export default EventGroup;
