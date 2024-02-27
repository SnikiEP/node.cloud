const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'db_node_cloud', // Database name
  'db_node_cloud_user', // User
  'CpuOIraLdNGRNBB1WGiLaMZNfm1M1DlA', // Password
  {
    host: 'dpg-cneqqu6n7f5s73e2g45g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
