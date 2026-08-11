let collegeName = "SVECW";
let estdYear = 2000;
let isWomenclg = true;
function getClgInfo(Name:string, Estdyear:number):string {
    return `${Name} was a women's college establised in ${Estdyear}).`;
}
//Array annotations
let branches = ["CSE", "AI&DS", "AI&ML", "MEC", "ECE"];
//Annotated variables and functions
const info = getClgInfo(collegeName, estdYear);
console.log(info);
console.log(`Branches:${branches.join(",")}`);
console.log(`Is it an women's college?${isWomenclg ? "Yes it is!" : "No"}`);