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
  "Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing",
  "Elit", "Curabitur", "Vel", "Hendrerit", "Libero", "Eleifend", "Blandit",
  "Nunc", "Ornare", "Odio", "Ut", "Orci", "Gravida", "Imperdiet", "Nullam",
  "Purus", "Lacinia", "A", "Pretium", "Quis", "Congue", "Praesent", "Sagittis",
  "Laoreet", "Auctor", "Mauris", "Non", "Velit", "Eros", "Dictum", "Proin", "Accumsan",
  "Sapien", "Nec", "Massa", "Volutpat", "Venenatis", "Sed", "Eu", "Molestie", "Lacus",
  "Quisque", "Porttitor", "Ligula", "Dui", "Mollis", "Tempus", "At", "Magna", "Vestibulum",
  "Turpis", "Ac", "Diam", "Tincidunt", "Id", "Condimentum", "Enim", "Sodales", "In",
  "Hac", "Habitasse", "Platea", "Dictumst", "Aenean", "Neque", "Fusce", "Augue", "Leo",
  "Eget", "Semper", "Mattis", "Tortor", "Scelerisque", "Nulla", "Interdum", "Tellus",
  "Malesuada", "Rhoncus", "Porta", "Sem", "Aliquet", "Et", "Nam", "Suspendisse", "Potenti",
  "Vivamus", "Luctus", "Fringilla", "Erat", "Donec", "Justo", "Vehicula", "Ultricies",
  "Varius", "Ante", "Primis", "Faucibus", "Ultrices", "Posuere", "Cubilia", "Curae",
  "Etiam", "Cursus", "Aliquam", "Quam", "Dapibus", "Nisl", "Feugiat", "Egestas",
  "Class", "Aptent", "Taciti", "Sociosqu", "Ad", "Litora", "Torquent", "Per", "Conubia",
  "Nostra", "Inceptos", "Himenaeos", "Phasellus", "Nibh", "Pulvinar", "Vitae", "Urna",
  "Iaculis", "Lobortis", "Nisi", "Viverra", "Arcu", "Morbi", "Pellentesque", "Metus",
  "Commodo", "Ut", "Facilisis", "Felis", "Tristique", "Ullamcorper", "Placerat", "Aenean",
  "Convallis", "Sollicitudin", "Integer", "Rutrum", "Duis", "Est", "Etiam", "Bibendum",
  "Donec", "Pharetra", "Vulputate", "Maecenas", "Mi", "Fermentum", "Consequat", "Suscipit",
  "Aliquam", "Habitant", "Senectus", "Netus", "Fames", "Quisque", "Euismod", "Curabitur",
  "Lectus", "Elementum", "Tempor", "Risus", "Cras"
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
