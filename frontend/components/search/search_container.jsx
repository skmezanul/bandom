import {connect} from 'react-redux';
import Search from './search';
import {withRouter} from 'react-router-dom';
import {fetchAlbums, fetchAlbum} from '../../actions/album_actions';
import {fetchArtists, fetchArtist} from '../../actions/artist_actions';

const mapStateToProps = (state) => {
  let artistObjects = [];
  let artistNames = [];
  let allTracks = [];
  Object.values(state.entities.albums).forEach((album) => {
    if (!artistNames.includes(album.artistName)) {
      artistObjects.push(
        {artist:
          {name: album.artistName,
          id: album.artistId,
          pic: album.artistPic}});
      artistNames.push(album.artistName);
    }
  });
  Object.values(state.entities.albums).forEach((album) => {
    if (album.tracks) {
      album.tracks.forEach((track) => {
        allTracks.push({track:
          {title: track.title,
            id: track.id,
            pic: album.trackImage,
            ord: track.ord,
            albumId: album.id}});
          });
    } else {
      return;
    }
  });
  return({
    albums: Object.values(state.entities.albums),
    artists: artistObjects,
    tracks: allTracks
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
