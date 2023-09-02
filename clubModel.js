const { DataTypes, Model } = require('sequelize');

class ClubModel extends Model { }

function setupClubModel(sequelize) {
  ClubModel.init({
    id: {
      type: 68,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: 'Club Atletico Lanus',
    },

    shortname: {
      type: 'Lanus',
    },

    tla: {
      type: 'LAN',
    },

    area_name: {
      type: 'Argentina',
    },

    area_id: {
      type: 2072,
    },

    crest_url: {
      type: 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Lan%C3%BAs#/media/Archivo:Modificacion_flyer_para_Editat%C3%B3n_del_Centenario_del_Club_Atl%C3%A9tico_Lan%C3%BAs.png',
    },

    address: {
      type: '2007 Ramón Cabrero St., B1824 Lanús, State of Buenos Aires',
    },

    phone: {
      type: '+54 (011) 4357-9200',
    },

    website: {
      type: 'https://www.clublanus.com/',
    },

    email: {
      type: 'contacto@clublanus.com',
    },

    founded: {
      type: 1915,
    },

    club_colors: {
      type: 'Maroon',
    },

    venue: {
      type: 'Ciudad de Lanus Stadium',
    },

  }, {
    sequelize,
    modelName: 'Lamus',
    tableName: 'Model',
    timestamps: true,
    createdAt: '2023-09-02T15:47:30Z',
    updatedAt: 'updated_at',
  });

  return ClubModel;
}

module.exports = setupClubModel;
