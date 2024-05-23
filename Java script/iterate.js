




//for in
 var jsonObject = {
        'name': 'Dineshkumar',
        'Age': '26'
    };

for (var prop in jsonObject) {
  console.log("Key:" + prop);
  console.log("Value:" + jsonObject[prop]);
}

//for of

const num = [100, 200, 300];

for (const value of num) {
  console.log(value);
}
