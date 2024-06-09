exports.up = function(knex) {
  return knex('subgenres')
    .insert([
        //#region metal
        {
            subgenre_name: 'Speed Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Power Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Classical Music',
            inspiration_id: '101',
        },
        {
            subgenre_name: 'Pop Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Pop',
            inspiration_id: '109'
        },
        {
            subgenre_name: 'Hair Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Rock',
            inspiration_id: '104'
        },
        {
            subgenre_name: 'Neoclassical Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Symphonic Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Prog Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        {
            subgenre_name: 'Thrash Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Black Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Death Metal',
            origin_name: 'Metal',
            origin_id: '104',
        },
        {
            subgenre_name: 'Doom Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Rock',
            inspiration_id: '104'
        },
        {
            subgenre_name: 'Drone Metal',
            origin_name: 'Metal',
            origin_id: '104',
        },
        {
            subgenre_name: 'Sludge Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Groove Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Southern Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Country',
            inspiration_id: '102'
        },
        {
            subgenre_name: 'Nu Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Rap',
            inspiration_id: '110'
        },
        {
            subgenre_name: 'Industrial Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'EDM',
            inspiration_id: '111',
        },
        {
            subgenre_name: 'Funk Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Funk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Southern Metal',
            origin_name: 'Metal',
            origin_id: '104',
            inspiration_name: 'Country',
            inspiration_id: '102'
        },
        {
            subgenre_name: 'Stoner Metal',
            origin_name: 'Metal',
            origin_id: '104',
        },
        //#endregion
        //#region rock
        {
            subgenre_name: 'Blues Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Blues',
            inspiration_id: '103'
        },
        {
            subgenre_name: 'Rockabilly',
            origin_name: 'Rock',
            origin_id: '106',
        },
        {
            subgenre_name: 'Southern Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Country',
            inspiration_id: '102'
        },
        {
            subgenre_name: 'Psychadelic Rock',
            origin_name: 'Rock',
            origin_id: '106',
        },
        {
            subgenre_name: 'Hard Rock',
            origin_name: 'Rock',
            origin_id: '106',
        },
        {
            subgenre_name: 'Punk Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Alt Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Pop Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Pop',
            inspiration_id: '109'
        },
        {
            subgenre_name: 'Prog Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        {
            subgenre_name: 'Symphonic Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Stoner Rock',
            origin_name: 'Rock',
            origin_id: '106',
        },
        {
            subgenre_name: 'Funk Rock',
            origin_name: 'Rock',
            origin_id: '106',
            inspiration_name: 'Funk',
            inspiration_id: '108',
        },
        //#endregion
        //#region punk
        {
            subgenre_name: 'Afro Punk',
            origin_name: 'Punk',
            origin_id: '108',
        },
        {
            subgenre_name: 'Anarcho Punk',
            origin_name: 'Punk',
            origin_id: '108'
        },
        {
            subgenre_name: 'Art Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        {
            subgenre_name: 'Crust Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Metal',
            inspiration_id: '104'
        },
        {
            subgenre_name: 'Egg Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'EDM',
            inspiration_id: '111',
        },
        {
            subgenre_name: 'Glitter Punk',
            origin_name: 'Punk',
            origin_id: '108',
        },
        {
            subgenre_name: 'Hardcore Punk',
            origin_name: 'Punk',
            origin_id: '108',
        },
        {
            subgenre_name: 'Thrash Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Metal',
            inspiration_id: '104'
        },
        {
            subgenre_name: 'Horror Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Metal',
            inspiration_id: '104'
        },
        {
            subgenre_name: 'Pop Punk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Pop',
            inspiration_id: '109'
        },
        {
            subgenre_name: 'Skate Punk',
            origin_name: 'Punk',
            origin_id: '108',
        },
        {
            subgenre_name: 'Trallpunk',
            origin_name: 'Punk',
            origin_id: '108',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        //#endregion
        //#region funk
        {
            subgenre_name: 'Deep Funk',
            origin_name: 'Funk',
            origin_id: '107',
        },
        {
            subgenre_name: 'Go-go',
            origin_name: 'Funk',
            origin_id: '107',
        },
        {
            subgenre_name: 'Afrobeat',
            origin_name: 'Funk',
            origin_id: '107',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        {
            subgenre_name: 'Boogie',
            origin_name: 'Funk',
            origin_id: '107',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        {
            subgenre_name: 'Samba',
            origin_name: 'Funk',
            origin_id: '107',
            inspiration_name: 'Rock',
            inspiration_id: '104'
        },
        //#endregion
        //#region blues
        {
            subgenre_name: 'Delta Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'Chicago Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'Boogie Woogie',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'Memphis Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'Jump Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'West Coast Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'New Orleans Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        {
            subgenre_name: 'Texas Blues',
            origin_name: 'Blues',
            origin_id: '103',
        },
        //#endregion
        //#region country
        {
            subgenre_name: 'Classic Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Western Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Honky Tonk',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Outlaw Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Prog Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Truck Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Bro Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        {
            subgenre_name: 'Neotraditional Country',
            origin_name: 'Country',
            origin_id: '102',
        },
        //#endregion
        //#region classical
        {
            subgenre_name: 'Baroque',
            origin_name: 'Classical',
            origin_id: '101',
        },
        {
            subgenre_name: 'Opera',
            origin_name: 'Classical',
            origin_id: '101',
        },
        //#endregion
        //#region rap
        {
            subgenre_name: 'Gangster Rap',
            origin_name: 'Rap',
            origin_id: '110'
        },
        {
            subgenre_name: 'Country Rap',
            origin_name: 'Rap',
            origin_id: '110',
            inspiration_name: 'Country',
            inspiration_id: '102'
        },
        //#endregion
        //#region pop (ew)
        {
            subgenre_name: 'Afro Pop',
            origin_name: 'Pop',
            origin_id: '109',
            inspiration_name: 'Funk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Baroque',
            origin_name: 'Pop',
            origin_id: '109',
            inspiration_name: 'Classical Music',
            inspiration_id: '101',
        },
        {
            subgenre_name: 'Country Pop',
            origin_name: 'Pop',
            origin_id: '109',
            inspiration_name: 'Country',
            inspiration_id: '102'
        },
        {
            subgenre_name: 'Electro Pop',
            origin_name: 'Pop',
            origin_id: '109',
            inspiration_name: 'EDM',
            inspiration_id: '111',
        },
        {
            subgenre_name: 'Progressive Pop',
            origin_name: 'Pop',
            origin_id: '109',
            inspiration_name: 'Jazz',
            inspiration_id: '105',
        },
        //#endregion
        //#region edm
        {
            subgenre_name: 'House',
            origin_name: 'EDM',
            origin_id: '111'
        },
        {
            subgenre_name: 'Dubstep',
            origin_name: 'EDM',
            origin_id: '111'
        },
        {
            subgenre_name: 'Trance',
            origin_name: 'EDM',
            origin_id: '111'
        },
        //#endregion
        //#region jazz (Oh boy)
        {
            subgenre_name: 'Acid',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Disco'
        },
        {
            subgenre_name: 'Bebop',
            origin_name: 'Jazz',
            origin_id: '105',
        },
        {
            subgenre_name: 'Big Band',
            origin_name: 'Jazz',
            origin_id: '105',
        },
        {
            subgenre_name: 'Chamber Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Crossover Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Ethio Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Funk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Nu Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'EDM',
            inspiration_id: '111',
        },
        {
            subgenre_name: 'Orchestral Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        },
        {
            subgenre_name: 'Punk Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Punk',
            inspiration_id: '108',
        },
        {
            subgenre_name: 'Third-stream Jazz',
            origin_name: 'Jazz',
            origin_id: '105',
            inspiration_name: 'Classical Music',
            inspiration_id: '101'
        }
    ])
};

exports.down = function(knex) {
  return knex('subgenres')
    .delete()
};