import React, { PureComponent } from 'react';
import { I18n, Translate } from 'react-redux-i18n';
import { AppBackgroundTypes } from '../../constants';
import { AppActions } from '../../actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class LicenseScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Set app background to license bg
    this.props.setAppBackground(AppBackgroundTypes.LICENSE_BG);
  }
  render() {
    return (
      <div className='licenseComponent'>
        <div className='container'>
          <h2> { I18n.t('license_screen.title') } </h2>
          <p><Translate value='license_screen.content' dangerousHTML/></p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAppBackground: AppActions.setAppBackgroundAction,
  }, dispatch);
}
export default connect(null, mapDispatchToProps)(LicenseScreen);
