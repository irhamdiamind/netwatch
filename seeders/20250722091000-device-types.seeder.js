"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("device_types", [
      {
        type: "Server",
        description:
          "Physical or virtual machine used to host services or applications",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Router",
        description: "Network device that routes traffic between networks",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Switch",
        description: "Device for managing data flow within a local network",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Firewall",
        description: "Security appliance that filters network traffic",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: "Access Point",
        description:
          "Wireless device that allows connections to a wired network",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("device_types", null, {});
  },
};
