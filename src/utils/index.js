const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  createdAt,
  updatedAt,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt,
  updatedAt,
  username,
});

module.exports = { mapDBToModel };
