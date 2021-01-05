const TABLE = 'user'

module.exports = function (injectedStore){
  let store = injectedStore;

  if (!store){
    store = require('../../../store/dummy');
  }
  async function list() {
    return await store.list(TABLE);
  }

  async function get(id) {
    return await store.get(TABLE, id);
  }

  async function upsert(data) {
    return await store.upsert(TABLE, data);
  }

  async function remove(id) {
    return await store.remove(TABLE, id);
  }

  return {
    list,
    get,
    upsert,
    remove,
  }
}