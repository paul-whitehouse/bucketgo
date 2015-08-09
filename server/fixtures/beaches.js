if(Beaches.find({}).count() === 0) {
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
  Beaches.inser({
    name: 'Porth Joke',
    latitude: 50.4019,
    longitude: -5.1365,
    blueFlag: true
  });
  
}
