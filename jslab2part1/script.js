"use strict";
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        console.log(this.contacts);
    } 
    // delete(name) {
    //     this.contacts.splice(1, name);
    //     console.log(index);
    // }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
}
const book = new AddressBook();
// book.add(new Contact("Snoopy", "dog@email.com", "123", "my dog"));
// book.add(new Contact("Jerry", "jerry@email.com", "321", "my mouse"));
// book.add(new Contact("Puss", "puss@email.com", "000", "my cat"));
book.print();

while (true) {
const choice = prompt("Would you like to add, delete, print or quit?");
if (choice === "add") {
   const name = prompt("Enter name: ");
   const email = prompt("Enter email: ");
   const phone = prompt("Enter phone: ");
   const relation = prompt("Enter relation: ");
   book.add(new Contact(name, email, phone, relation))
} else if (choice === "print") {
    book.print();
} else if (choice === "delete") {
    const del = prompt ("Which index?");
    book.deleteAt(del);
} else if (choice === "quit") {
    console.log("Cya later nerd");
    break;
    }
}