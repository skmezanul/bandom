import {connect} from 'react-redux';
import Search from './search';
import {withRouter} from 'react-router-dom';
import {fetchAlbums, fetchAlbum} from '../../actions/album_actions';
import {fetchArtists, fetchArtist} from '../../actions/artist_actions';

const mapStateToProps = (state) => {
  let artistNames = [];
  Object.values(state.entities.albums).forEach((album) => {
    if (!artistNames.includes(album.artistName)) {
      artistNames.push(album.artistName);
    }
  });
  return({
    albums: Object.values(state.entities.albums),
    artists: artistNames
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
