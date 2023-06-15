let codingBootCamp = {
    team: {
        instructor: {
            name: 'Zoe Chalk',
            city: 'Okinawa',
            catchPhrase () {
                console.log("Peace and love");
            }
        },
        teachingAssistants: {
            female: {
                name: 'Kathryn Wilkinson',
                city: 'Columbus',
                catchPhrase () {
                    console.log("Are you excited? Because I'm excited");
                }
            },
            male: {
                name: 'Jon Jackson',
                city: 'Raleigh',
                catchPhrase () {
                    console.log("I love teaching");
                }
            }
        }
    }
};

console.log(codingBootCamp);

codingBootCamp.students = [
    {
      name: "Curtis",
      city: "Jacksonville",
      catchPhrase() {
        console.log("It's pizza time.");
      },
    },
  ];

  console.log(codingBootCamp);

  codingBootCamp.students.push({
    name: "Grace",
    city: "Chicago",
    catchPhrase() {
      console.log("Hakuna Matata");
    },
  });

  console.log(codingBootCamp);

  codingBootCamp.students.push([
    {
      name: "Manna",
      city: "Washington D.C.",
      catchPhrase() {
        console.log("Practice makes perfect");
      },
    },
  ]);

  console.log(codingBootCamp);

codingBootCamp.students.splice(2,2);
console.log(codingBootCamp);

console.log(codingBootCamp.students[1]);
