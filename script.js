function handlesubmit() {
  let message = document.getElementById('message');
  const regNo = document.getElementById('regNo').value;
  const manYear = document.getElementById('manYear').value;
  const modelNo = document.getElementById('modelNo').value;
  // let vType = document.getElementById('vType').value;

  let regex = new RegExp(/^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$/);
  message.style.display = 'none';
  //check if registration number is empty
  if (regNo.length == 0) {
    message.innerText = 'Please enter valid Registration Number!';
    message.style.display = 'block';
    return false;
  }
  // Return true if the registration number matches
  if (regex.test(regNo.toUpperCase()) == false) {
    message.innerText = 'Please enter valid Registration Number!';
    message.style.display = 'block';
    return false;
  }
  //check if manufactured year is empty
  if (manYear.length == 0) {
    message.innerText = 'Please enter Manufactured year!';
    message.style.display = 'block';
    return false;
  }
  //check if model number  is empty
  if (modelNo.length == 0) {
    message.innerText = 'Please enter Model number!';
    message.style.display = 'block';
    return false;
  }

  alert('Booking complete');
  return false;
}

//array of offers
let offerArr = document.querySelectorAll('.offerOption');
let offerCount = 0;
const vehicleType = document.getElementById('vType').value;

//obtaining clicked offers
for (let i = 0; i < 4; i++) {
  offerArr[i].addEventListener('click', () => checkToggle(offerArr[i].id));
  //id of clicked offer passed to function checkToggle()
}

function checkToggle(id1) {
  //for matching offer with vehicle type
  let x = vehicleOfferMatch(id1);
  // console.log(x);
  if (x == 0) {
    document.getElementById(id1).checked = false;
    return;
  }
  //add offer and increment offerCount
  let boxToggle = document.getElementById(id1).checked;
  if (boxToggle == true) {
    if (offerCount < 2) {
      offerCount++;
      alert('offer Selected');
    } else if ((offerCount) => 2) {
      alert('max offers selected');
      document.getElementById(id1).checked = false;
    }
    console.log(offerCount);
  }

  //to check if offer is already selected or not ,if yes remove offer
  if (boxToggle == false) {
    offerCount--;
    alert('offer removed');
  }
}

//check for offer and vehicle mismatch
function vehicleOfferMatch(oid) {
  switch (oid) {
    case 'off20for4':
      if (vehicleType == '2 Wheeler') {
        alert('Offer dont match with 2 wheeler !');
        return 0;
      } else {
        return 1;
      }
    case 'off20for2':
      if (vehicleType == '4 Wheeler') {
        alert('Offer dont match with 4 wheeler !');
        return 0;
      } else {
        return 1;
      }
    default:
      return 1;
  }
}

//calculate final price after discounts added
function calcOffers() {
  let discountP = 0;
  let discountV = 0;
  let finalPrice = 0;
  for (let i = 0; i < 4; i++) {
    if (offerArr[i].checked == true) {
      discountP = discountP + Number(offerArr[i].value);
    }
    // console.log(discountP);
  }
  console.log(discountP);
  if (vehicleType == '2 Wheeler') {
    var price = 500;
    discountV = (discountP / 100) * price;
    console.log(discountV);
    finalPrice = price - discountV;
    console.log(finalPrice);
  }
  if (vehicleType == '4 Wheeler') {
    var price = 1500;
    discountV = (discountP / 100) * price;
    console.log(discountV);
    finalPrice = price - discountV;
    console.log(finalPrice);
  }
  document.getElementById('totala').value = finalPrice;
}
