const pname = "Tomas";
const age = "30";
const job = "Webo";
const city = "Rafaela";

// Without template strings (es5);
let templatelessHTML;
templatelessHTML = "<ul> <li>Name: " + pname + "</li><li>Age: " + age + " </li></ul>";
//document.body.innerHTML = templatelessHTML;

// With template (es6)
let templateHTML;
templateHTML = `
    <ul>
        <li> Name: ${pname} </li>
        <li> Age: ${age} </li>
    </ul>
`;

document.body.innerHTML = templateHTML;