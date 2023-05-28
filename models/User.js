class User{
  constructor(id,name,userName,email,password,registerDate){
    this._id= id,
    this.name= name,
    this.userName = userName,
    this.email= email,
    this.password= password,
    this.registerDate= registerDate
  };
}

module.exports = User;

