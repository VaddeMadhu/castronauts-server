const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForCatsHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
  getTrackById(trackId) {
    return this.get(`track/${trackId}`);
  }
  getModulesByTrackId(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
  incrementTrackViews(id) {
    return this.patch(`track/${id}/numberOfViews`);
  }
}

module.exports = TrackAPI;
