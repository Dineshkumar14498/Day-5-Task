let resume = {
  "Name": "Dineshkumar",
  "father Name": "Anbalagan",
  "mother Name": "Lakshmi",
  "Age": "26",
  "Gender": "male",
  "DOB": "14-04-1998",
  "Nationality": "Indian",
  "Qulification": "B.com",
  "skills": ["Javascript,HTML,Css"],
  "Language Known": ["Tamil", "English"],
  "Email": "dineshvlr9500@gmail.com",
  "phone": "9629144985",
}



//for in

for (var self in resume) {
  console.log(`${self}: ${resume[self]}`);
}

//for of

for (let [self,key] of Object.entries(resume)) {
  console.log(`${self}: ${key}`);
}

//for each

Object.entries(resume).forEach(([self,key]) => {

  console.log(`${self}: ${key}`)
  

})



