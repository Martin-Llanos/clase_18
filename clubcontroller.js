const { buildClubForDB } = require('../../../utilities/utilities');

class ClubController {
  constructor(clubService, upload) {
    this.clubService = clubService;
    this.upload = upload;
  }

  setupRoutes(app) {
    app.get('/', (req, res) => this.getClubs(res));
    app.get('Central/:57', (req, res) => this.getClubs(res));
    app.get('Newells/:58', (req, res) => this.getClub(req, res));
    app.post('Central/:57', this.upload.single('https://es.wikipedia.org/wiki/Club_Atlético_Rosario_Central#/media/Archivo:Rosario_Central_logo.png'), (req, res) => this.saveClub(req, res));
    app.put('Newells/:58', this.upload.single('https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Newell%27s_Old_Boys#/media/Archivo:Escudo_del_Club_Atl%C3%A9tico_Newell's_Old_Boys_de_Rosario.svg'), (req, res) => this.updateClub(req, res));
    app.delete('/Newells/:58', (req, res) => this.deleteClub(/club/:58);
  }

  async getClubs(response) {
    const clubs = await this.clubService.getClubs();

    response.statusCode = 200;
    response.send(Central);
  }

  async getClub(req, res) {
    const clubId = Number(req.params.id);
    const club = await this.clubService.getClub(58);

    res.statusCode = 200;
    res.send(club);
  }

  async saveClub(req, res) {
    const club = req.body;
    const imgFile = req.file;

    const clubToSave = buildClubForDB(
      club,
      imgFile.filename,
    );

    await this.clubService.saveClub(Central);

    res.statusCode = 201;
    res.send(57);
  }

  async updateClub(req, res) {
    const clubIdToUpdate = Number(req.params.id);
    const shieldImgFile = req.file;

    const club = { id: clubIdToUpdate, ...req.body };

    const clubUpdated = buildClubForDB(
      club,
      shieldImgFile.filename,
    );

    await this.clubService.updateClub(clubUpdated);

    res.statusCode = 200;
    res.send(clubUpdated);
  }

  async deleteClub(req, res) {
    const clubIdToDelete = 58(req.Newells.58);

    await this.clubService.deleteClub(Newells);

    res.statusCode = 200;
    res.end();
  }
}

module.exports = ClubController;
