// Set up a few beaches
if (Caravans.find({}).count() === 0) {

  Beaches.insert({
    name: 'Watergate Bay',
    latitude: 50.4439,
    longitude: -5.0489,
    blueFlag: false,
    dogFriendly: true,
    waterQuality: 4,
    description: 'Watergate Bay is a long privately owned North West facing beach, about 3 miles from Newquay. Large open bay at bottom of steep cliffs, frequently picking up Atlantic swells and therefore highly popular with surfers.',
    lifeguard: true,
    beachType: 'Sandy',
    imageUrl: 'http://www.thebeachguide.co.uk/public/geophotos/956776.jpg'
  });
  Beaches.insert({
    name: 'Mawgan Porth',
    latitude: 50.4675,
    longitude: -5.0339,
    blueFlag: false,
    dogFriendly: true,
    waterQuality: 5,
    description: 'Mawgan Porth is a sandy beach four miles from Newquay. Sheltered by high cliffs at both ends and well-served by local village amenities, Mawgan Porth is popular with families and surfers.',
    lifeguard: true,
    beachType: 'Sandy',
    imageUrl: 'http://www.thebeachguide.co.uk/public/geophotos/2561263.jpg'
  });
  Beaches.insert({
    name: 'Holywell Bay',
    latitude: 50.3931,
    longitude: -5.1465,
    blueFlag: true,
    dogFriendly: true,
    waterQuality: 5,
    description: 'A mile-long sandy beach six miles west of Newquay, yet retaining an unspoilt rural backdrop. Gets pretty busy in summer. Plenty of parking and amenities in the village.',
    lifeguard: true,
    beachType: 'Sandy',
    imageUrl: 'http://www.thebeachguide.co.uk/public/geophotos/2959626.jpg'
  });
  Beaches.insert({
    name: 'Porth Joke',
    latitude: 50.4019,
    longitude: -5.1365,
    blueFlag: true
  });

  // Setup a couple of Regions
  Regions.insert({
    name: 'Cornwall',
    latitude: 50.46858,
    longitude: -4.7214
  });
  Regions.insert({
    name: 'Devon',
    latitude: 50.46858,
    longitude: -4.7214
  });

  // Get a region and set up some associated Locations
  var regionId = Regions.findOne({
    name: 'Cornwall'
  })._id;

  console.log('RegionId: ' + regionId);

  // Set up some Locations
  Locations.insert({
    name: 'Bodmin',
    region: regionId,
    latitude: 50.46858,
    longitude: -4.7214
  });

  Locations.insert({
    name: 'Bude',
    region: regionId,
    latitude: 50.82366,
    longitude: -4.53323
  });
  Locations.insert({
    name: 'Falmouth',
    region: regionId,
    latitude: 50.14907,
    longitude: -5.08684
  });
  Locations.insert({
    name: 'Fowey',
    region: regionId,
    latitude: 50.33653,
    longitude: -4.63513
  });
  Locations.insert({
    name: 'Looe',
    region: regionId,
    latitude: 50.35715,
    longitude: -4.47456
  });
  Locations.insert({
    name: 'Marazion',
    region: regionId,
    latitude: 50.12482,
    longitude: -5.46735
  });
  Locations.insert({
    name: 'Newquay',
    region: regionId,
    latitude: 50.41304,
    longitude: -5.073
  });
  Locations.insert({
    name: 'Padstow',
    region: regionId,
    latitude: 50.53366,
    longitude: -4.96651
  });
  Locations.insert({
    name: 'Penzance',
    region: regionId,
    latitude: 50.1163,
    longitude: -5.54089
  });
  Locations.insert({
    name: 'Perranporth',
    region: regionId,
    latitude: 50.34167,
    longitude: -5.15134
  });
  Locations.insert({
    name: 'St Agnes',
    region: regionId,
    latitude: 50.30819,
    longitude: -5.19127
  });
  Locations.insert({
    name: 'St Ives',
    region: regionId,
    latitude: 50.20276,
    longitude: -5.4786
  });
  Locations.insert({
    name: 'Truro',
    region: regionId,
    latitude: 50.26241,
    longitude: -5.05347
  });

  // Add some owners
  Owners.insert({
    emailAddress: 'heather_whitehouse@yahoo.com',
    created: new Date(2014, 10, 5, 9, 34),
    name: 'Heather Whitehouse',
    telephone: '01332792614',
    mobile: '07897744170',
    address: {
      company: 'Heathers Caravans',
      building: '',
      houseNameNumber: '31',
      street: 'Chellaston Lane',
      locality: 'Aston on Trent',
      town: 'Derby',
      postcode: 'DE72 2AX'
    },
    status: 'Active'

  });
  Owners.insert({
    emailAddress: 'micky.mouse@gmail.com',
    created: new Date(2015, 3, 15, 18, 10),
    name: 'Mr Micky Mouse',
    telephone: '0148477891',
    mobile: '05871039982',
    address: {
      company: '',
      building: 'Walt Disney Mansion',
      houseNameNumber: '101',
      street: 'Main Drive',
      locality: 'Hinkley',
      town: 'Leicester',
      postcode: 'LE1 2PA'
    },
    status: 'Active'
  });


  // Get an owner from owners
  var ownerId = Owners.findOne({
    emailAddress: 'heather_whitehouse@yahoo.com'
  })._id;
  var beach1Id = Beaches.findOne({
    name: 'Holywell Bay'
  })._id;
  var beach2Id = Beaches.findOne({
    name: 'Porth Joke'
  })._id;
  var nearestTownId = Locations.findOne({
    name: 'Newquay'
  })._id;

  console.log('CREATING CARAVAN 1');
  console.log('Owner: ' + ownerId);
  console.log('Beach 1: ' + beach1Id);
  console.log('Beach 2: ' + beach2Id);
  console.log('Nearest town: ' + nearestTownId);

  // Add some caravans
Caravans.insert({
      created: new Date(2014, 7, 22, 15, 22),
      ownerId: ownerId,
      location: {
        postCode: 'TR8 5PW',
        latitude: 50.3852220954649,
        longitude: -5.12973073182378,
        region: regionId,
        nearestTown: nearestTownId, // Newquay
        distToTown: 12.4,
        nearestBeaches: [
          {
            beachId: beach1Id,
            distance: 0.5
          },
          {
            beachId: beach2Id,
            distance: 3.2
          }
        ],
        distToNearestBeach: 0.5, // de-normalised for search
        nearestAttractions: [], // Future development
        nearestPubs: [], // Future development
      },
      images: [
        {
          description: 'Outside',
          image: 'http://www.directholidayhomes.co.uk/caravan/pic_3512_1.jpg'
        },
        {
          description: 'Lounge area',
          image: 'http://www.directholidayhomes.co.uk/caravan/pic_3512_4.jpg'
        },
        {
          description: 'Kitchen area',
          image:'http://www.directholidayhomes.co.uk/caravan/pic_3512_3.jpg'
        },
        {
          description: 'Double bedroom',
          image: 'http://www.directholidayhomes.co.uk/caravan/pic_3512_5.jpg'
        },
        {
          description: 'View from patio',
          image: 'http://www.directholidayhomes.co.uk/caravan/pic_6618_7.jpg'
        }
      ],
      primaryImage: 1,
      caravanModel: 'Supreme 35',
      length: 35,
      width: 12,
      summary: 'Cornish, pet friendly holiday home on the amazing White Acres in Holywell Bay; ideal for anglers and non anglers alike, providing a great holiday for all visitors.',
      description: 'There are some lovely pubs and restaurants in the local area and also a McDonalds, Morrison\'s and Aldi for your shopping needs. We do not provide linen (duvet covers, sheets, towels or tea towels) as this would be an additional cost added to the hire charges and most people prefer to use their own; they know who it was last used by and how clean it is etc! We do buy new pillows and quilts each year for your comfort. Cleaning of the caravan is not included in the hire price as we are trying to keep your costs down to a minimum. All we ask is that you ensure the next holiday guest has a great time without having to clean up after you. We have never had any problems with this policy as our guests are always considerate of the next user. If there is a problem you should contact me as soon as possible. The maintenance and site staff are there to help make your holiday enjoyable so we do not want you worrying about anything whilst you are there. Get in touch we do appreciate it.',
      features: {
        bedrooms: 2,
        maxOccupency: 6,
        childredAllowed: true,
        sameSexGroups: false,
        disabledAccess: false,
        petsAllowed: true,
        facilities: [
          {name: 'Bar',
          value: 'b'},
          {name: 'Barbecue',
          value: 's'},
          {name: 'Childrens Club',
          value: 's'},
          {name: 'Childrens Entertainment',
          value: 's'},
          {name: 'Mini Market',
          value: 'b'},
          {name: 'Amusements',
          value: 'b'},
          {name: 'Play Area',
          value: 's'},
          {name: 'Restaurant',
          value: 'l'},
          {name: 'Outdoor Pool',
          value: 's'},
          {name: 'Indoor Pool',
          value: 'l'},
          {name: 'Takeaway / Snackbar',
          value: 'b'},
          {name: 'Linen',
          value: 's'},
          {name: 'Cot Hire',
          value: 's'}
        ]
      },
      startDays: [
        6, 1
      ]
    });
}
