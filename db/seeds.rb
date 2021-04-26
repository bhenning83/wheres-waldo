Character.delete_all
Coordinate.delete_all

waldo = Character.create({name: 'Waldo'})
wenda = Character.create({name: 'Wenda'})
odlaw = Character.create({name: 'Odlaw'})

Coordinate.create([{character: waldo, location: '4,7'},
                   {character: waldo, location: '4,8'},
                   {character: waldo, location: '4,9'},
                   {character: waldo, location: '4,10'},
                   {character: waldo, location: '4,11'},
                   {character: wenda, location: '54,35'},
                   {character: wenda, location: '54,36'},
                   {character: wenda, location: '55,35'},
                   {character: wenda, location: '55,36'},
                   {character: odlaw, location: '54,10'},
                   {character: odlaw, location: '54,11'},
                   {character: odlaw, location: '54,12'}
                  ])