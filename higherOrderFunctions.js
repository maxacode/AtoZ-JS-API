


    // // table from https://moduscreate.com/blog/managing-debug-output-google-chrome-console-api/

    // var data = [
    //     { firstName : 'Nigel', lastName : 'Bitters', type : 'admin' },
    //     { firstName : 'Sammy', lastName : 'Hamm', type : 'user' },
    //     { firstName : 'Mickey', lastName : 'Mouse', type : 'user' }
    // ];

    // // show all data
    // console.table(data);

    // // show only the 'lastName' and 'type' columns
    // console.table(data, ['lastName', 'type']);



const companies = [
    {name: "Comp 0.1", category: "Auto", start: 1981, end: 2001},
    {name: "Comp 1", category: "Auto", start: 1981, end: 2001},
    {name: "Comp 2", category: "Retail", start: 1998, end: 2013},
    {name: "Comp 3", category: "Auto", start: 1981, end: 1998},
    {name: "Comp 4", category: "Finance", start: 1979, end: 2015},
    {name: "Comp 5", category: "Auto", start: 1989, end: 1998},
    {name: "Comp 6", category: "Retail", start: 1981, end: 1992},
    {name: "Comp 7", category: "Auto", start: 1998, end: 2015},
    {name: "Comp 8", category: "Space", start: 1989, end: 1992},
];

const ages = [33, 34, 35, 36, 37, 38, 39, 5, 53, 21, 13, 14, 15, 41, 42, 43, 44, 100, 1];

function cj(variable) {
    return console.log(JSON.stringify(variable, true, 3));
};
function ct(variable) {
    return console.table(variable);
}
function cl(variable) {
    return console.log(variable);
}


// console.log(companies);
// console.log(ages);


    //ForEach
//old way 
    // for (let i = 0; i < companies.length; i++) {
    //     if(companies[i].start <= 1990) {
    //         console.log(companies[i].name);
    //     }
    // };

//new way
    // companies.forEach(function(company, index){
    //     if (company.end == 2015) {
    //         console.log(company + " " + index);
    //     }
    // })



// filter - filter things out of the array 
// get the ages that are 21 and over. 
//old way:
    // let canDrink = []
    // for (let i = 0; i < ages.length; i++) {
    //     if (ages[i] >= 21) {
    //         canDrink.push(ages[i]);
    //     }
    // }
    // console.log(canDrink);


//filter way
    // const canDrink = ages.filter(function(age){
    //     if(age >= 21 ) {
    //         return true;
    //     }
    // });
    // console.log(canDrink);


// arrow function - shorter new way ES6
    // const canDrink = ages.filter(age => age >= 21);
    // console.log(canDrink);


//filter based on category. 
    // const compCategory = companies.filter((company,index) => company.category === "Retail");
    // console.log(compCategory);

    // //indexd to get index X of it
    // const compIndex = companies.filter((company,index) => index >= 5);
    // console.log(compIndex);

    //companies that started in the 80's so 1980 to 1989
    // const companiesStarted80s = companies.filter(company => company.start <= 1989 && company.start < 1990);
    // cj(companiesStarted80s);

    // // company existed less than 10 years from start to end. 
    // const company10Years = companies.filter(company => company.end - company.start <= 10);
    // ct(company10Years);
    

//map - instead of just filtering we can create new arrays from current awary. 

    // //get company names and put in thier own array.
    // const companyNames = companies.map((function(company) {
    //     return company.name;
    // }));
    // ct(companyNames);

    // const companyNames = companies.map((function(company, index) {
    //     return `Name: ${company.name} and Start: ${index}`;
    // }));

    // //shorter way.
    // const companyNames = companies.map((company, index) => `company ${company.name} Index: ${index}`);
    // ct(companyNames);

    //     //Math on ages.
    // const agesSquare = ages.map(age => Math.sqrt(age));
    // const agesSquare2 = ages.map(age => age * 2);

    //Connecting two maps together on seperate lines
    // const agesSquare = ages
    //     .map(age => Math.sqrt(age))
    //     .map(age => age * 2);
    // ct(agesSquare);

    // // sort comparing 2 companies and compare the start day and move them up/down according with -1?? 
    // // NEED To research this 
    // const sortedCompany = companies.sort(function(c1, c2) {
    //     if(c1.start > c2.start) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });

    // // shorter way
    // const sortedCompany = companies.sort((a,b) => a.start > b.start ? 1 : -1 );
    // ct(sortedCompany);

    // //sort ages lower to higher 
    // // const sortedAges = ages.sort(function(a,b) {
    // //     if(a > b) { return 1 } else { return -1; }
    // // })
    // //const sortedAges= ages.sort((a,b) => a > b ? 1 : -1);
    // // or shorter
    // const sortedAges = ages.sort((a,b) => a - b);
    // ct(sortedAges);

//reduce - can do a lot but this is just to add all the ages together

    // //for loop - old way. 
    // let sumAges = 0

    // for (let i = 0; i < ages.length; i++) {
    //     sumAges += ages[i];
    // }

//const sumAges = ages.reduce(function(total,) { return total + b});
//const sumAges = ages.reduce((a,b) => a + b);
//cl(sumAges);

//total years of all companies
// const totalYears = companies.reduce((a, b) => 
//     (a.end - a.start) +
//     (b.end - b.start));

// const totalYears = companies.reduce(function(a, b) { 
//     return a + (b.end - b.start) ;
// },0)
// cl(totalYears);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);

cl(totalYears);