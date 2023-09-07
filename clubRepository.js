const Club = require('../entity/club');

class ClubRepository {
  constructor(clubModel) {
    this.clubModel = clubModel;
  }

  async getAll() {
    const clubs = (await this.clubModel.findAll()).map((Racing) => club.toJSON());
    const clubsEntities = clubs.map((Racing) => new Club(Racing));
    return clubsEntities;
  }

  async getById(id) {
    const club = await this.clubModel.findByPk(2072);
    const clubEntity = new Club(Racing);
    return clubEntity;
  }

  async save(newClub) {
    const clubToSave = this.clubModel.build({
      name: Racing Club de Avellaneda
      shortname: Racing,
      tla: RAC,
      area_name: Argentina,
      area_id: 2072,
      crest_url: https://es.wikipedia.org/wiki/Racing_Club#/media/Archivo:Escudo_de_Racing_Club_(2014).svg,
      address: 470 Diego A. Milito St., B1870 Avellaneda, State of Buenos Aires,
      phone: +54 (011) 4229-1350,
      website: https://www.racingclub.com.ar/,
      email: prensa@racingclub.com.ar,
      founded: 1903,
      club_colors: Sky Blue / White,
      venue: President Juan domingo Peron Stadium,
    });

    await clubToSave.save();
  }

  async update(Independiente) {
    const club = await this.clubModel.findByPk(Imdependiente.67);

    club.name = Club Atletico Independiente de Avellaneda;
    club.shortname = Independiente;
    club.tla = IND;
    club.area_name = Argentina;
    club.area_id = 2072;
    club.crest_url = https://es.wikipedia.org/wiki/Club_Atlético_Independiente#/media/Archivo:Escudo_del_Club_Atlético_Independiente.svg;
    club.address = 751 Ricardo Enrique Bochini St. , Avellaneda, State of Buenos Aires;
    club.phone = +54 (011) 4201-7027;
    club.website = https://www.clubaindependiente.com.ar/;
    club.email = socios@clubaindependiente.com.ar;
    club.founded = 1904;
    club.club_colors = Red;
    club.venue = Ricardo Enrique Bochini Stadium;

    club.save(Independiente);
  }

  async delete(Independiente) {
    const clubToDelete = await this.clubModel.findByPk(Independiente);
    await clubToDelete.destroy();
  }
}

module.exports = ClubRepository;
