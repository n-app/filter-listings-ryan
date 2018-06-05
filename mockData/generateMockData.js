const db = require('../database/index.js')

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getNumberForAllEntries = (min, max, numberOfEntries) => {
  let allValues = [];
  for (let i = 0; i < numberOfEntries; i++) {
    allValues.push(getRandomInteger(min, max))
  }
  return allValues;
}

const getRoomPicUrl = (numberOfEntries) => {
    let allUrls = [];
    for (let i = 0; i < numberOfEntries; i++) {
        allUrls.push('https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_' + i + '.jpg')
    }
    return allUrls;
}

const loremIpsum = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
  'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
  'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
  'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
  'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
  'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
  'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
  'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
  'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
  'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
  'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
  'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
  'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
  'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
  'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
  'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
  'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
  'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
  'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
  'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
  'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
  'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
  'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
  'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
  'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
  'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
  'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
  'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
  'elementum', 'tempor', 'risus', 'cras'
];

const getNameForAllEntries = (words, numberOfEntries) => {
  let allWords = [];
  for (let i = 0; i < numberOfEntries; i++) {
    let numberOfRandomWords = words.length;
    let numberOfWordsInName = getRandomInteger(1, 3)
    let nameOfRoom = [];
    for (let j = 0; j < numberOfWordsInName; j++) {
      nameOfRoom.push(words[getRandomInteger(0, numberOfRandomWords)])
    }
    nameOfRoom = nameOfRoom.join(' ')
    allWords.push(nameOfRoom);
  }
  return allWords;
}

const allRoomNames = getNameForAllEntries(loremIpsum, 600);
const allPrices = getNumberForAllEntries(50, 750, 600);
const allNumberOfRooms = getNumberForAllEntries(1, 7, 600);
const allRatings = getNumberForAllEntries(1, 5, 600);
const allNumberOfReviews = getNumberForAllEntries(0, 500, 600);
const allUrls = getRoomPicUrl(600);

const columnData = [allRoomNames, allPrices, allNumberOfRooms, allRatings, allNumberOfReviews, allUrls]

const createRecords = (columns) => {
  let records = [];
  for (let i = 0; i < columns[0].length; i++) {
    let record = [];
    columns.forEach((column)=> {
      record.push(column[i])
    })
    records.push(record)
  }
  return records;
}

const allRecords = createRecords(columnData);

db.insertRecords(allRecords);
