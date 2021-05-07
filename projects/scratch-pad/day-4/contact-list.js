// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {id: id,
    nameFirst: nameFirst,
    nameLast: nameLast};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
          //use .push method to push contact object into array  
            contacts.push(contact);
        },
        findContact: function(fullName) {
         //use for loop to iterate through contacts array
         for (let i = 0; i < contacts.length; i++) {
        // condional statement to have fullName strictly equal to contacts first and last name. use pracket notation to access loop iteration and then dot notation to access key values (string)
             if (fullName === `${contacts[i].nameFirst} ${contacts[i].nameLast}`) {
         // return contacts[i] if found (contact object)         
                  return contacts[i];
            } 
         } 
         // return undefined if not found (**must be outside of loop)
        return undefined;
        },
        removeContact: function(contact) {
            //for loop to access indexes of 
            for (let i = 0; i < contacts.length; i++) {
               //conditional to compare function parameter (contact object) to contact object in array
                if (contact === contacts[i]) {
                  //.splice method to remove that contact object (start - contacts[i], remove 1)
                    contacts.splice(contacts[i], 1);
                   }
            
            
        }
},
        printAllContactNames: function() {
            
            // create string literal for names list 
            let allNames = "";
            // for loop to access every index in contacts array
            for (let i = 0; i < contacts.length; i++) {
              // condition if saying perform code up until last index 
                if (i < contacts.length - 1) {
               //string interpolation to concat first and last name to allNames with new line (\n)
               allNames += `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`
            }   
                //string interpolation to concat first and last name to allNames WITHOUT new line (\n)
                else  {
                allNames += `${contacts[i].nameFirst} ${contacts[i].nameLast}`
            }
         }
         //return allNames string OUTSIDE OF LOOP
            return allNames;
    }
}
       



}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}