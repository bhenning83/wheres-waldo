Coordinate.delete_all
Score.delete_all
Character.delete_all

waldo = Character.create({name: 'Waldo'})
wenda = Character.create({name: 'Wenda'})
odlaw = Character.create({name: 'Odlaw'})

Coordinate.create([{character: waldo, location: '4,11', level: 1},
                   {character: waldo, location: '5,10', level: 1},
                   {character: waldo, location: '5,9', level: 1},
                   {character: waldo, location: '5,8', level: 1},
                   {character: waldo, location: '5,7', level: 1},
                   {character: waldo, location: '4,7', level: 1},
                   {character: waldo, location: '4,8', level: 1},
                   {character: waldo, location: '4,9', level: 1},
                   {character: waldo, location: '4,10', level: 1},
                   {character: wenda, location: '56,36', level: 1},
                   {character: wenda, location: '54,35', level: 1},
                   {character: wenda, location: '57,35', level: 1},
                   {character: odlaw, location: '56,12', level: 1},
                   {character: odlaw, location: '56,11', level: 1},
                   {character: odlaw, location: '56,10', level: 1},
                   {character: waldo, location: '55,30', level: 2},
                   {character: waldo, location: '55,29', level: 2},
                   {character: wenda, location: '66,60', level: 2},
                   {character: wenda, location: '66,61', level: 2},
                   {character: wenda, location: '65,61', level: 2},
                   {character: odlaw, location: '71,35', level: 2},
                   {character: odlaw, location: '70,35', level: 2},
                   {character: odlaw, location: '70,34', level: 2},
                   {character: odlaw, location: '71,34', level: 2},
                   {character: odlaw, location: '71,33', level: 2},
                   {character: odlaw, location: '70,33', level: 2},
                   {character: waldo, location: '12,11', level: 3},
                   {character: waldo, location: '12,10', level: 3},
                   {character: wenda, location: '56,18', level: 3},
                   {character: wenda, location: '56,17', level: 3},
                   {character: odlaw, location: '64,13', level: 3},
                   {character: odlaw, location: '64,12', level: 3},
                   {character: odlaw, location: '65,13', level: 3},
                  ])

Score.create({ms: '2733000', player: 'Mac', location: 'Philly', level: 1})
Score.create({ms: '3406000', player: 'Dennis', location: 'Philly', level: 2})
Score.create({ms: '4453700', player: 'Charlie', location: 'Philly', level: 3})