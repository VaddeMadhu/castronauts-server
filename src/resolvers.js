const resolvers = {
  Query: {
    tracksForCatsHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForCatsHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrackById(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getModulesByTrackId(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        const { status, body } = err.extensions.response;
        return {
          code: status,
          success: false,
          message: body,
          track: null,
        };
      }
    },
  },
};

module.exports = resolvers;
