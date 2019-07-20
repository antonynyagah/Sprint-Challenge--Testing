exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980},
        {id: 2, title: 'Pokémon Gold', genre: 'RPG', releaseYear: 1996},
        {id: 3, title: 'Super Smash Brothers', genre: 'Platform Game', releaseYear: 1985}
      ]);
    });
}; 