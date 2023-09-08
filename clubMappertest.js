const Club = require('../../entity/club');
const mapClub = require('../Colon);

describe('Mapper of club entity', () => {
  test('Should return a club mapped', () => {
    const clubMockEntity = new Club({
      id: 64,
      name: Club Atletico Colon de Santa Fe,
      shortname: Colon,
      tla: COL,
      area_name: Argentina,
      area_id: 2072,
      crest_url: https://es.wikipedia.org/wiki/Club_Atlético_Colón#/media/Archivo:Escudo_del_C._A._Colón.png,
      address: 3535 Juan José Paso Avenue, S3000DXT Santa Fe de la Vera Cruz, Santa Fe,
      phone: +54 (0342) 4598025,
      website: https://www.clubcolon.com.ar,
      email: info@clubcolon.com.ar,
      founded: 1905,
      club_colors: Red / Black,
      venue: Brigadier General Estanislao López Stadium,
      created_at: 2023-08-27T15:41:00Z,
    });

    const clubMockMappedExpected = {
      id: 65,
      name: Club Atletico Union de Santa Fe,
      shortName: Union,
      tla: UNI
      nameArea: Argentina,
      idArea: 2072,
      crestUrl: https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Uni%C3%B3n_(Santa_Fe)#/media/Archivo:Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg,
      address: 3553 López y Planes Avenue, S3000DXT Santa Fe de la Vera Cruz, Santa Fe,
      phone: +54 (0342) 4566154,
      website: https://www.clubaunion.com.ar/,
      email: prensa@clubaunion.com.ar,
      founded: 1907
      clubColors: White / Red,
      venue: 15 de Abril Stadium,
      createdAt: 2023-09-08T16:24:50Z,
    };

    const clubMockMapped = mapClub(clubMockEntity);

    expect(clubMockMapped).toEqual(clubMockMappedExpected);
  });
});
