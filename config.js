var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var SQUARE_COORDINATES = {
  x : 550,
  x2 : 550
};

var randomStuff = {
  x : Math.floor ((Math.random () * 100) + 50),
  heightOnCanvas : 300 - Math.floor ((Math.random () * 100) + 50),
  height : Math.floor ((Math.random () * 100) + 50)
};

var howFast = {
  fastOne : 1,
}

var image2 = new Image();
 image2.src = 'https://pbs.twimg.com/profile_images/549465149703077888/fJahizBS_400x400.jpeg';

var imageBackground = new Image ();
  imageBackground.src = 'https://i.ytimg.com/vi/ML8bhOYuT4s/maxresdefault.jpg';

var image = new Image ();
  image.src = 'https://bitcoinist.com/wp-content/uploads/2016/09/PayCoin-logo-300x300.png';
