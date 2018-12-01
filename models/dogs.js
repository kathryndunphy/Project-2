module.exports = function(sequelize, DataTypes) {
    const Dog = sequelize.define("Dog", {
        "id": {
            "type"        : DataTypes.UUID,
            "defaultValue": DataTypes.UUIDV4,
            "allowNull"   : false,
            "primaryKey"  : true
        },
        
        "Dog_id": {
            "type"     : DataTypes.UUID,
            "allowNull": false,
            "validate" : {
                "isUUID": {
                    "args": 4,
                    "msg" : "Please enter a valid UUID."
                }
            }
        }

    }, {"underscored": true});

    // Create associations
    Dog.associate = function(models) {
        Dog.belongsTo(models.Animal, {"onDelete": "CASCADE"});
    }

    return Dog;
}