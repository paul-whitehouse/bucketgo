
if(Locations.find().count() === 0) {

  Locations.insert({
    name: 'Cornwall',
    towns: [
      {
        name: 'Bodmin',
        latitude: 50.46858,
        longitude: -4.7214
      },
      {
        name: 'Bude',
        latitude: 50.82366,
        longitude: -4.53323
      },
      {
        name: 'Falmouth',
        latitude: 50.14907,
        longitude: -5.08684
      },
      {
        name: 'Fowey',
        latitude: 50.33653,
        longitude: -4.63513
      },
      {
        name: 'Looe',
        latitude: 50.35715,
        longitude: -4.47456
      },
      {
        name: 'Marazion',
        latitude: 50.12482,
        longitude: -5.46735
      },
      {
        name: 'Newquay',
        latitude: 50.41304,
        longitude: -5.073
      },
      {
        name: 'Padstow',
        latitude: 50.53366,
        longitude: -4.96651
      },
      {
        name: 'Penzance',
        latitude: 50.1163,
        longitude: -5.54089
      },
      {
        name: 'Perranporth',
        latitude: 50.34167,
        longitude: -5.15134
      },
      {
        name: 'St Agnes',
        latitude: 50.30819,
        longitude: -5.19127
      },
      {
        name: 'St Ives',
        latitude: 50.20276,
        longitude: -5.4786
      },
      {
        name: 'Truro',
        latitude: 50.26241,
        longitude: -5.05347
      }
    ]
  });
}
