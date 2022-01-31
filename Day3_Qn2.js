// My resume in JSON format

let myResume = [
    {
        Credentials:
        {
            FirstName: "Shubham",
            LastName: "Savantre",
            PhoneNo: "7019298685",
            EmailID: "savantreshubh@gmail.com"
        },
    
        WorkExperience:
        {
            TotalExp: "4 years",
            RelativeExp: "3 years",
            CurrentOrg: "Ubisoft India Studio",
            CurrentPosition: "Game Tester",

        },

        Education:
        {
            School:
            {
                SchoolName: "K.L.E. School",
                City: "Nipani",
                University: "Rani Channamma University",
                Percent: "80%",
                CompletionYear: "2010"
            },

            PreUniversity:
            {
                CollegeName: "G.I. Bagewadi PU College",
                City: "Nipani",
                University: "Rani Channamma University",
                Percent: "60%",
                CompletionYear: "2012"
            },

            Bachelors:
            {
                CollegeName: "Jain College of Engineering",
                City: "Belgaum",
                University: "VTU",
                Percent: "62%"
            }    
        },

        PersonalInfo:
        {
            FullName: "Shubham Bhimappa Savantre",
            DoB: "10/04/1994",
            Strengths: ["Quick learner", "Time management", "Team player"],
            Languages: ["English", "Hindi", "Marathi", "Kannada"]
        }
    }
]


console.log(myResume)