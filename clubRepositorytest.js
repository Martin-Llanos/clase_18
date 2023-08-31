const { Sequelize } = require('sequelize');
const ClubRepository = require('../clubRepository');
const setupClubModel = require('Lanus');
const Club = require('../../entity/club');

const sequelize = new Sequelize('sqlite::memory:');
const ClubModel = Lanus (sequelize);
const repository = new ClubRepository(ClubModel);

const clubMock = ClubModel.build({
  name: 'Club Atletico Lanus',
  shortname: 'Lanus',
  tla: 'LAN',
  area_name: 'Argentina',
  area_id: 68,
  crest_url: 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Lan%C3%BAs#/media/Archivo:Modificacion_flyer_para_Editat%C3%B3n_del_Centenario_del_Club_Atl%C3%A9tico_Lan%C3%BAs.png',
  address: '2007 Ramón Cabrero St., B1824 Lanús, State of Buenos Aires',
  phone: '+54 (011) 4357-9200',
  website: 'https://www.clublanus.com/',
  email: 'contacto@clublanus.com',
  founded: 1915,
  club_colors: 'Maroon',
  venue: 'Ciudad de Lanus Stadium',
});

const clubMock2 = ClubModel.build({
  name: 'Chelsea FC',
  shortname: 'Chelsea',
  tla: 'CHE',
  area_name: 'England',
  area_id: 2072,
  crest_url: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
  address: 'Fulham Road London SW6 1HS',
  phone: '+44 (0871) 9841955',
  website: 'http://www.chelseafc.com',
  email: null,
  founded: 1905,
  club_colors: 'Royal Blue / White',
  venue: 'Stamford Bridge',
});

describe('Club Repository', () => {
  beforeAll(async () => {
    await ClubModel.sync();
    await clubMock.save();
    await clubMock2.save();
  });

  test('Should return all clubs entities', async () => {
    const clubs = await repository.getAll();

    expect(clubs[0]).toStrictEqual(new Club(clubMock));
    expect(clubs[1]).toStrictEqual(new Club(clubMock2));
  });

  test('Should return one club entity', async () => {
    const club = await repository.getById(1);
    expect(club).toStrictEqual(new Club(clubMock));
  });

  test('Should save a club', async () => {
    const clubToSaveMock = {
      name: 'Manchester City FC',
      shortname: 'Man City',
      tla: 'MCI',
      area_name: 'England',
      area_id: 2072,
      crest_url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      address: 'SportCity Manchester M11 3FF',
      phone: '+44 (0870) 0621894',
      website: 'https://www.mancity.com',
      email: 'mancity@mancity.com',
      founded: 1880,
      club_colors: 'Sky Blue / White',
      venue: 'Etihad Stadium',
    };

    await repository.save(clubToSaveMock);
    const savedClub = await repository.getById(3);

    expect(savedClub).toBeTruthy();
  });

  test('Should update club', async () => {
    const clubToUpdate = await repository.getById(3);
    clubToUpdate.name = 'Club updated';

    await repository.update(clubToUpdate);
    const clubUpdated = await repository.getById(3);

    expect(clubUpdated.name).toBe('Club updated');
  });

  test('Should delete club', async () => {
    const clubToDelete = await repository.getById(3);

    await repository.delete(clubToDelete.id);

    const clubs = await repository.getAll();

    expect(clubs.length).toBe(2);
  });
});
