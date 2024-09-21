//Create variable name (favActorFirstName) & store your fav Actor name.
let favActorFirstName = 'Coco';

//Create variable name (favActorLastName) & store the last name of (FA).
let favActorLastName = 'Martin';

//Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
let fullName = favActorFirstName + ' ' + favActorLastName;

//Create variable name (uppercase) & CAPITALIZE your fav actor name.
let uppercase = fullName.toUpperCase();

//Create a variable name (message) & store `My favorite Actor Is (favActorName) & say
// something about your fav actor` name should be in UPPERCASE.
let message = `My favorite actor is ${uppercase}`;

//Now append this message to the (message variable) `his best show is Batang Quiapo`.
message += '. His best show is Batang Quiapo.';

//Finally log all variables to the console using code runner in vscode.
console.log('Favorite Actor First Name:', favActorFirstName);
console.log('Favorite Actor Last Name:', favActorLastName);
console.log('Full Name:', fullName);
console.log('Uppercase Name:', uppercase);
console.log('Message:', message);