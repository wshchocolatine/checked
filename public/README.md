# Checked

## Introduction

Checked! is a service who keeps your passwords safe. You can check it [here](/). 

## Security

#### Quick introduction to encryption and hashing

To get started and to make you understand, we are going to explain 
you the difference between hashing and ciphering (also called 
encryption). These functions are really different but they have 
the same goal who is : "avoid that a stranger can understand some text".

The hashing is used to transform a basic string of characters (ex → `hello`) into an unrecognisable string (`$2y$10$CpYTnh.dsVLC0kplPM.83JCUPUpY5MhxiMO7yIvYMIf/DxK3SxYS`).  You can't "unhash" something. It's really used for stock password into databases.

Cipher is different. It's making like hashing (transforms a basic string of characters into an uncrognisable string) but the main difference is that you can "decrypt" this string. It's used for crypted messenger (like whatsapp for example). You will perhaps know encryption with "Cesar Cipher" (it's when when you shift each letter of your message by three letters in the alphabet) or maybe with the Engima Machine (it was used by Germans during WWII) to cipher their messages.

What you have to understand, is that an hashed value is like a lost value. For example, passwords. When you login to your account, the system is going to take the password that you entered, hash it and compare it to the hashed password who is stocked in the database but never, you can know what is the "unhashed" value while you can know what is the decrypted value.

#### How are we doing ?

First, we are going to talk about your checked! password. This password is hashed and stock into DB (database). The library we use to hash the password when you register and to compare passwords when you login is named Argon2. You can check it [here](https://www.npmjs.com/package/phc-argon2)

Then, for the passwords you are entering in checked!, we use ciphering and more precisely asymetric encryption. It's a genre of encryption where there is two key : e public and one private who are specifics to each people. The public one is used to cipher the password while the private is used to decipher your password. As it's name suggests, your private key is private and there is only you who can access to it. 

But the main problem for us was to stock the private key. Indeed if it's private, we can't just stock it in a DB. It will be stupid. So we found a solution to resolve this problem, it's to cipher the private key with the password.

#### Suggestions 

We have just one suggestion to keep your passwords safe. Just ONE. Choose a strong password for checked!. Indeed, it's your password who is ciphering the private key and it's your private key who is deciphering your passwords who are stocked in the DB. If a hacker succeed to get your private key, he gets all your passwords and the safety of the private key depends on the safety of your pasword. 

---

## Engagements

#### Ethical

We will never disclose your private data. Btw if you read our security article, you will know that we have only access to your email, public key and username. Nothing more because as we said, your password is hashed, for the private key we can only decipher it with your password and for the passwords you save, for decipher them, we need to have the private key. If we resume (← means "depends") : password ← private key ← your passwords saved.

There will never be some ads here. Everybody hate ads and we also do. If we are doing this project, it's not to earn money but to support people. Keeping passwords is a big deal in this new world where each piece of private data is sold and we wanted to act.

To prove what we said, we have decided to put our code opensource. It means that you can go watch all of the code here.

#### Who are we ?

We are two french youngs (send us a message if our english is not good) people who are 15 years old. Not gonna lie, we are doing this project for later and for jobs but also because we really believe in a better Internet. We hate selfish people and we decided to create something for everybody. Love opensource <3.

---

## Sources

#### Packages

React ([https://reactjs.org/](https://fr.reactjs.org/))

Scss ([https://sass-lang.com/](https://sass-lang.com/))

Bcrypt ([https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt))

Adonis ([https://adonisjs.com/](https://adonisjs.com/))

Crypto ([https://nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html))

CryptoJS ([https://cryptojs.gitbook.io/docs/](https://cryptojs.gitbook.io/docs/))

MongoDB ([https://www.npmjs.com/package/mongodb](https://www.npmjs.com/package/mongodb))

