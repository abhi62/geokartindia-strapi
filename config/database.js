const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", "db/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
