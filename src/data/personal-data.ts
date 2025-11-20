import {PersonalData} from "@/src/types";

export const personalData: PersonalData = {
name: {
firstName:"Luis Miguel",
lastNames:["Alonso", "Ferreiro"],
nickname:"LuisMi",
},
title: "Junior Software Engineer",
birthDate: new Date("2000-02-06"),
location: {
city: "Gijón",
country: "Spain",
},
contact: {
email: "lumialfe@hotmail.com",
phone: {
countryCode: 34,
number: "633332848"
},
linkedin: "https://www.linkedin.com/in/luis-miguel-alonso-ferreiro-b3898a211/",
github: "https://github.com/lumialfe"
}
}