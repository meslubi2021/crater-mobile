import {connect} from 'react-redux';
import {Reports} from '../../components/Reports';
import {reduxForm} from 'redux-form';
import {REPORTS_SEARCH} from '../../constants';
import {commonSelector} from 'stores/common/selectors';

const mapStateToProps = state => ({
  ...commonSelector(state)
});

const reportSearchReduxForm = reduxForm({
  form: REPORTS_SEARCH
})(Reports);

const SettingContainer = connect(mapStateToProps)(reportSearchReduxForm);

export default SettingContainer;
