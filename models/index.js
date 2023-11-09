/*SQL Relationships Part I:
One - To - One OR One - To - Many
============================
hasOne always goes on the model that does NOT have the foreign key
belongsTo always goes on the model that DOES have the foreign key
ModelA.hasOne(ModelB, {
  foreignKey: 'A_id',
  onDelete: 'CASCADE'
})
ModelB.belongsTo(ModelA,{
  foreignKey: 'A_id',
  onDelete: 'CASCADE'
}) */

/*
  1. Step 1: Set up any foreign keys                          Model file
  2. Step 2: Set up the index.js the models directory         models/index.js
  3. Step 3: Tell Sequelize when you want the joined data     route files
*/

/*
    CASCADE: If we delete an "owner" record, we also delete the associated record(s)
    SET NULL:  If we delete an "owner" record, the foreign key value in the associated 
     records is set to NULL
*/