"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("devices", [
      {
        name: "Cisco Switch 2960",
        model: "WS-C2960-24TT-L",
        description: "Layer 2 switch with 24 ports",
        documentation_url:
          "https://www.cisco.com/c/en/us/products/switches/catalyst-2960-series-switches/index.html",
        three_model_path: "/models/cisco_switch.glb",
        manufacture_id: 1,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "HP ProCurve",
        model: "J9776A",
        description: "Gigabit managed switch",
        documentation_url: "https://support.hpe.com",
        three_model_path: "/models/hp_switch.glb",
        manufacture_id: 2,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("devices", null, {});
  },
};
