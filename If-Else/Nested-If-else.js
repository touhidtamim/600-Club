//1
const gotInvitation = true;
const pocketMoney = 2300;

if (gotInvitation) {
  console.log("I will go");

  if (pocketMoney > 1000) {
    console.log("Gift kinbo");
  } else {
    console.log("khali hate jabo");
  }
} else {
  console.log("jabo na and oke friendlist theke ber kore dibo");
}

//2
const guestAsche = true;

if (guestAsche) {
  console.log("Cha khaben?");

  let chaKhaben = true;
  if (chaKhaben) {
    console.log("Biscuit khaben?");
  } else {
    console.log("Tea ready!");
  }

  let biscuitKhaben = true;
  if (biscuitKhaben) {
    console.log("Ok, wait koren, niye ashi!");
  } else {
    console.log("Tea ready!");
  }
} else {
  console.log("Star Jalsha dekhen");
}

//3
const isActive = true;

if (isActive) {
  console.log("subscription ache ?");

  let subscription = true;
  if (subscription) {
    console.log("premium feature available");
  } else {
    console.log("free version");
  }
} else {
  console.log("No account found, please sign up");
}

//4
const isFoodAvailable = false;

if (isFoodAvailable) {
  console.log("khabar ache, gorom korte hobe");
} else {
  console.log("khabar nai, Delivery nite hobe");

  let deliveryAvailable = false;
  if (deliveryAvailable) {
    console.log("order korbo");
  } else {
    console.log("ajke ami roja thakbo");
  }
}

//5
let guest = 100;

if (guest > 100) {
  console.log("party kora jay");

  let allGuestsWillGiveGift = true;
  if (allGuestsWillGiveGift) {
    console.log("Let's party all night");
  } else {
    console.log("I will party with myself");
  }
} else {
  console.log("party korbo na");
}
