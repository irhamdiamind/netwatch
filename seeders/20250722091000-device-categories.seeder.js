"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("device_categories", [
      {
        name: "Server",
        description:
          "Physical or virtual machine used to host services or applications",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Router",
        description: "Network device that routes traffic between networks",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Switch",
        description: "Device for managing data flow within a local network",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Firewall",
        description: "Security appliance that filters network traffic",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Access Point",
        description:
          "Wireless device that allows connections to a wired network",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("device_categories", null, {});
  },
};
