const colors = ["red", "blue", "green", "purple", "orange", "aqua", "pink", "yellow", "olive", "lime"];

const rand = () => {
  const r = Math.floor(Math.random() * 10);
  return colors[r]
};

//console.log(rand());

export const themes = {
  light: {
    background: 'white',
    textColor: 'black',
    borderColor: 'gray',
  },
  dark: {
    background: 'black',
    textColor: 'white',
    borderColor: 'silver',
  },
  colored: {
    background: 'red',
    textColor: 'blue',
    borderColor: 'orange',
  },
  /*gluk: {
    background: rand(),
    textColor: rand(),
    borderColor: rand()
  }*/
};



