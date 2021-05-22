'use strict';

//  HW - prototypes

// const schoolAgeWomen = users.filter(isSchoolAgeWoman);
const schoolAgeWomen = users.filter(isSchoolAgeWoman)
.map(getUserFullName);
console.table(schoolAgeWomen);
// const schoolAgeWomenFullNames = schoolAgeWomen.map(getUserFullName); 

function isSchoolAgeWoman(user, i, arr) {
    return user.age >= 6 && user.age <= 18 && !user.isMale;
};

function getUserFullName(user, i, arr) {
    return user.getFullName();
};

