// Create an array of user objects
const users = [
    {
        name : "Jack",
        email : "jack@bigmir.net",
        age : 26,
        address : {
            city : "Torino",
            street : "Green"
        }
    },
    {
        name : "Amy",
        email : "sunshineamy@gmail.com",
        age: 19,
        address :
            {
                city : "Miami",
                street : "Roosevelt"
            }
    },
    {
        name : "Taras",
        email : "tarasmsy@i.ua",
        age: 40
        // Note: no address provided - need to handle by default value
    }
];

// Loop through the objects in users array and destructure all properties
for (const { name, email, age, address = "unknown" } of users) {
    // Define all needed strings
    const userInfo = `User ${name} is ${age} years old.`;
    const contactInfo = "Contact information:";
    const emailInfo = `\te-mail: ${email}`;
    const addressInfo = `\taddress: ${JSON.stringify(address)}`;

    // Create separator that will repeat the line 56 times if address is not provided in user
    // I created this only to try out the "?" ternary operator
    const separator = "-".repeat(address !== "unknown" ? addressInfo.length + 8 : 56);

    // Print all info
    console.log([userInfo, contactInfo, emailInfo, addressInfo, separator].join("\n"));
}

/*
Output:
User Jack is 26 years old.
Contact information:
        e-mail: jack@bigmir.net
        address: {"city":"Torino","street":"Green"}
----------------------------------------------------
User Amy is 19 years old.
Contact information:
        e-mail: sunshineamy@gmail.com
        address: {"city":"Miami","street":"Roosevelt"}
-------------------------------------------------------
User Taras is 40 years old.
Contact information:
        e-mail: tarasmsy@i.ua
        address: "unknown"
--------------------------------------------------------

 */