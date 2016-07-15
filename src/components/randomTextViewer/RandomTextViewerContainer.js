import { connect } from 'react-redux';
import RandomTextViewer from './RandomTextViewer';
import { requestRandomText } from 'actions/randomText';
import { getRandomText } from 'reducers/randomText';

const mapStateToProps = (state) => ({
  text: getRandomText(state),
});

export default connect(mapStateToProps, {
  requestRandomText,
})(RandomTextViewer);
