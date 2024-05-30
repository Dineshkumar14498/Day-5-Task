const resume={
  "Name":"Dineshkumar",
  "father Name":"Anbalagan",
  "mother Name":"Lakshmi",
  "Age":"26",
  "Gender":"male",
  "DOB":"14-04-1998",
  "Nationality":"Indian",
  "Qulification": "B.com",
  "skills":["Javascript,HTML,Css"],
  "Language Known": ["Tamil","English"],
  "Email":"dineshvlr9500@gmail.com",
  "phone": "9629144985",

}

console.log(resume.skills)


//for in

for (var self in resume) {
  console.log(self + resume[self]);
}

//for of

for (const value of resume) {
  console.log(value);
}
