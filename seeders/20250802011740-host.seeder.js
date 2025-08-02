"use strict";

const { Device } = require("../models"); // Make sure models are accessible

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch all device types
    const devices = await Device.findAll();
    const getRandomDevice = () =>
      devices[Math.floor(Math.random() * devices.length)];

    const hosts = [];

    for (let i = 1; i <= 30; i++) {
      const device = getRandomDevice();
      const baseName = device.name.toLowerCase().replace(/\s+/g, "-");

      hosts.push({
        name: `${baseName}-${String(i).padStart(2, "0")}`,
        description: `${device.name} device number ${i}`,
        ip_address: `192.168.1.${100 + i}`,
        location: `Zone-${(i % 5) + 1}`,
        status: ["active", "inactive", "maintenance"][
          Math.floor(Math.random() * 3)
        ],
        device_id: device.id,
        three_object_id: i,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert("hosts", hosts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hosts", null, {});
  },
};
