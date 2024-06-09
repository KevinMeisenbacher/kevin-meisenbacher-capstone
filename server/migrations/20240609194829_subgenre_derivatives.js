exports.up = function(knex) {
  return knex('subgenres')
    .where('subgenre_name' === 'Power Metal')
    .update({
        derivative_name: 'Speed Metal',
        derivative_id: 1
    }),
    knex('subgenres')
    .where('subgenre_name' === 'Death Metal'
        || 'subgenre_name' === 'Groove Metal'
        || 'subgenre_name' === 'Thrash Punk')
    .update({
        derivative_name: 'Thrash Metal',
        derivative_id: 8
    }),
    knex('subgenres')
    .where('subgenre_name' === 'Drone Metal'
        || 'subgenre_name' === 'Sludge Metal')
    .update({
        derivative_name: 'Doom Metal',
        derivative_id: 11
    }),
    knex('subgenres')
    .where('subgenre_name' === 'Groove Metal')
    .update({
        derivative_name: 'Thrash Metal',
        derivative_id: 8
    }),
    knex('subgenres')
    .where('subgenre_name' === 'Skate Punk')
    .update({
        derivative_name: 'Pop Punk',
        derivative_id: 41
    })
};

exports.down = function(knex) {
  return knex('subgenres')
    .update({
        derivative_name: null,
        derivative_id: null
    })
};
