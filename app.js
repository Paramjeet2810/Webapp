click("signin-button",logInUser);

var user1={
  id: 1,
  name: "Kunal",
  username: "kunalvarma05",
  sayHello: function(){
    console.log("Hello");
  }
};


var user2={
  id: 2,
  name: "Khatri",
  username: "Khatrivarma05",
  sayHello: function(){
    console.log("Hello" + this.name);
    console.log(this.id+" "+ this.name);
  }
};

var users = [
  user1,
  user2
];

users[1].sayHello();  
