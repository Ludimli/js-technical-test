// Dummy data to start!
let users = [
  {
    login: 'Utilisateur n°1',
    id: 1,
    avatarUrl: 'https://avatars0.githubusercontent.com/u/26329569?v=3&s=40',
    color: '#409074'
  },
  {
    login: 'Utilisateur n°2',
    id: 2,
    avatarUrl: 'https://avatars0.githubusercontent.com/u/26329569?v=3&s=40',
    color: '#6941CA'
  },
];

let data = {
  users: users,
  filteredUserIds: [1],
  issue: {
    id: 1,
    title: 'Ticket #2',
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
      {
        id: 3,
        body: 'Corps du message #3 par utilisateur #1',
        user: users[0],
      },
    ]
  },
};

export default data;
