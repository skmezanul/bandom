import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks } from '../../actions/track_actions';

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    currentUser: state.session.currentUser,
    errors: {errors: state.errors.session}
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
