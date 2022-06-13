module.export = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: sequelize.DATE,
            allowNull: false
        },
    },{ tableName: 'media'});
    return Media;
}