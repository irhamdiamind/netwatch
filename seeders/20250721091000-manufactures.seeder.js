"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("manufactures", [
      {
        name: "H3C",
        support_url: "https://www.h3c.com/en/Support/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cisco",
        support_url: "https://www.cisco.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hewlett-Packard",
        support_url: "https://support.hp.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ubiquiti",
        support_url: "https://www.ui.com/support/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "HIK Vision",
        support_url: "https://www.hikvision.com/en/support/",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("manufactures", null, {});
  },
};
