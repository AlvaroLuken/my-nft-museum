// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {id: 1, name: 'Rambo'},
  {id: 2, name: 'Darth Vader'}
];

export default (req, res) => {
  const { query: { id } } = req;

  res.json({
    ...users.find(user => user.id === parseInt(id)),
  });
}