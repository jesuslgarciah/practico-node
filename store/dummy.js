const db = {
  user: [
    {
      id: 1,
      name: 'Yisus',
      username: 'elyisus'
    },
    {
      id: 2,
      name: 'Yisus2',
      username: 'elyisus2'
    },
  ]
}

async function list(table) {
  return await db[table];
}

async function get(table, id) {
  const col = await list(table);
  return col.find(item => item.id == id) || null;
}

async function upsert(table, data) {
  const col = await list(table);
  col.push(data);
}

async function remove(table, id) {
  const col = await list(table);
  return col.filter(item => item.id == id) || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
}