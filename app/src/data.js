// Dummy data to start!
let users = [
  {
    login: 'Utilisateur n°1',
    id: 1,
    avatar_url: 'https://avatars0.githubusercontent.com/u/26329569?v=3&s=40',
  },
  {
    login: 'Utilisateur n°2',
    id: 2,
    avatar_url: 'https://avatars0.githubusercontent.com/u/26329569?v=3&s=40',
  },
];

let data = {
  users: users,
  issue: {
    id: 1,
    title: 'Ticket #1',
    body: 'Corps du ticket #1',
    user: users[0],
    messages: [
      {
        id: 1,
        body: 'Corps du message #1 par utilisateur #2',
        user: users[1],
      },
      {
        id: 2,
        body: 'Corps du message #2 par utilisateur #1',
        user: users[0],
      },
    ]
  },
};

export default data;
