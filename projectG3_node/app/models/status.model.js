module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("status", {
        userans: {
            type: Sequelize.STRING
          },

          remainingtime: {
            type: Sequelize.TIME
          }
    //       ,
      
    //   questionid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'questions',
    //         key:'id'
    //     }
    // },
    // userid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'users',
    //         key:'id'
    //     }
    // }
      
      
    },
    
    {
      timestamps: false
  });
  
    return Status;
  };