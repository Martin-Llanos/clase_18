const Club = require('../club');

describe('Club entity', () => {
  test('Should create entity club', () => {
    const clubMock = {
      id: 1000,
      name: 'Club Atletico Boca Juniors',
      shortname: 'Boca',
      tla: 'BOC',
      area_name: 'Argentina',
      area_id: 2072,
      crest_url: 'https://es.wikipedia.org/wiki/Club_Atlético_Boca_Juniors#/media/Archivo:CABJ70.png',
      address: '805 Brandsen St, C1161 CABA',
      phone: '+54 (11) 4309-4700',
      website: 'https://www.bocajuniors.com.ar/',
      email: 'marketing@bocajuniors.com.ar',
      founded: 1905,
      club_colors: 'Blue / Gold',
      venue: 'La Bombonera / Alberto J. Armando Stadium',
      created_at: 'today',
    };

    const clubMockEntity = new Club(clubMock);

    expect(clubMock).toEqual(clubMockEntity);
  });
});
