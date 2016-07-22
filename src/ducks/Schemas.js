import { Schema, arrayOf, normalize } from 'normalizr';

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where posts and comments are placed in, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

const postSchema = new Schema('posts');

const Schemas = {
  POST: postSchema,
  POST_ARRAY: arrayOf(postSchema)
};

export default Schemas;
