module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20 && item.enhancement >= 0) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return {...item}
  }
}

function fail(item) {
  if (item.enhancement >= 15 && item.enhancement <= 16) {
    return { ...item, durability: item.durability - 10 }
  } else if (item.enhancement > 16) {
    return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
  } else {
    return {...item, durability: item.durability - 5}
  }
}


function repair(item) {
  if(item.durability >= 0 && item.durability <= 100) {
    return { ...item, durability: 100 };
  } 
}


