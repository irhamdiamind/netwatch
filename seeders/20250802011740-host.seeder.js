"use strict";

const { DeviceType } = require("../models"); // Make sure models are accessible

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch all device types
    const deviceTypes = await DeviceType.findAll();
    const getRandomDeviceType = () =>
      deviceTypes[Math.floor(Math.random() * deviceTypes.length)];

    const hosts = [];

    for (let i = 1; i <= 30; i++) {
      const deviceType = getRandomDeviceType();
      const baseName = deviceType.type.toLowerCase().replace(/\s+/g, "-");

      hosts.push({
        name: `${baseName}-${String(i).padStart(2, "0")}`,
        description: `${deviceType.type} device number ${i}`,
        ip_address: `192.168.1.${100 + i}`,
        location: `Zone-${(i % 5) + 1}`,
        status: ["active", "inactive", "maintenance"][
          Math.floor(Math.random() * 3)
        ],
        device_type_id: deviceType.id,
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
