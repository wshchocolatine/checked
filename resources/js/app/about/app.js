import React from 'react'
import '../../../scss/src/app/about/about.scss'

export default class About extends React.Component {
    render() {
        return (

        <div className="container">
            <article>
                <h1>About.</h1>
                <blockquote>This page is here to present our project and to answer to your questions. There is three subjects : <a href="#security">security</a>, <a href="#engagements">our engagements</a> and the <a href="#sources">sources</a>.</blockquote>
                <section id="security" className="section">
                    <h1>Security</h1>
                    <h3>Quick introduction to encryption and hashing</h3>
                    <p>To get started and to make you understand, we are going to explain 
                        you the difference between hashing and ciphering (also called 
                        encryption). These functions are really different but they have 
                        the same goal who is : "avoid that a stranger can understand 
                        some text". <br /> <br />
                       The <span className="bold">hashing</span> is used to transform a basic string
                        of characaters (ex -- <span className="md">hello</span>) into an unrecognisable
                        string (<span className="md">$2y$10$CpYTnh.dsVLC0kplPM.83JCUPUpY5MhxiMO7yIvYMIf/DxK3SxYS</span>).
                        You can't "unhash" something. It's used to stock password into databases. <br /> <br />
                       <span className="bold">Cipher</span> is different. It's making like hashing (transforms
                        a basic string into an unrecognisable string) but the main difference is that
                        you can "decrypt" (or "decipher") this string. It's used for crypted messenger (like
                        whatsapp for example). You will perhaps know encryption with "Cesar Cipher" (it's when
                        you shift each letter of your message by three letters in the alphabet) or maybe
                        with the Enigma Machine (it was used by Germans during WWII) to cipher their messages. <br /> <br />
                       What you have to understand, it that an hashed value is like a lost value. For example,
                        password. When you login to your account, the system is going to take the password that
                        you entered, hash it and compare it to the hashed password who is stocked in the
                        database but never, you can know what is the "unhashed" value while you can know what is 
                        the decrypted value.
                    </p>
                    <h3>How are we doing ?</h3>
                    <p>First, we are going to talk about your checked! password. This 
                        password is hashed and stock into DB (database). The library we use to 
                        hash password when you register and to compare passwords when you login
                        is named Argon2. You can check it <a target="_blank" href="https://www.npmjs.com/package/phc-argon2">
                        <span className="underline">here</span></a>. <br /> <br /> <br />
                       Then, for the passwords you are entering in checked!, we use ciphering and more 
                        precisely asymetric encryption. It's a genre of encryption where there is two keys :
                        one public and one private who are specifics to each people. The public one is used 
                        to cipher the passwords while the private is used to decipher them. As it's name suggests,
                        your private key is private and there is only you who can access to it. <br /> <br />
                       But the main problem for us was to stock the private key. Indeed if it's private,
                        we can't just stock it in a DB. It will be stupid. So we found a solution to resolve
                        this problem, it is to cipher the private key with the password. We made a schema to
                        resume :
                    </p>
                    <h3>Suggestions</h3>
                    <p>We just have one suggestion to keep your passwords safe. Just ONE. Choose a strong 
                        password for checked!. Indeed, it's your password who is ciphering the private key and 
                        it's your private key who is deciphering your passwords who are stocked into DB. 
                        If a hacker succeed to get your private key, he gets all of your passwords and the
                        safety of private key depends on the safety of your password.
                    </p>
                </section>
                <section id="engagements" className="section">
                    <h1>Engagements</h1>
                    <h3>Ethical</h3>
                    <p>We will never disclose your private data. Btw if you read our
                        <a href="#security"><span className="underline">security article</span></a>,
                        you will know that we have only access to your email, public key and username. 
                        Nothing more because as we said, your password is hashed, for the private key we 
                        can only decipher it with your password and for the paddwords you save, for decipher
                        them, we need to have to private key. If we resume (- == "depends") : <span className="md">
                        password - private key - your passwords saved </span>. <br /> <br />
                       There will never be some ads here. Everybody hate ads and we also do. If
                        we are doing this project, it's not to earn money but to support people. 
                        Keeping password is a big deal in this new world where each piece of private
                        data is sold and we wanted to act. <br /> <br />
                       To prove what we said, we have decided to put our code open-source. It means that
                        you can go watch all of this code <a href=""><span className="underline">here</span></a>.
                    </p>
                    <h3>Who are we ?</h3>
                    <p>We are two french youngs (send us a message if our english is not
                        good) people who are 15 years old. Not gonna lie, we are doing this
                        project for later and for jobs but also because we really believe
                        in a better Internet. We hate selfish people and we decided to create 
                        something for everybody. Love open-source.
                    </p>
                </section>
                <section id="sources" className="section">
                    <h1>Sources</h1>
                    <h3>Languages</h3>
                    <p>HTML ~ 56% <br />
                       CSS ~ 32% <br />
                       JS ~ 12%*
                    </p>
                    <h3>Packages</h3>
                    <p>Adonis (https://adonisjs.com/) <br /> 
                       Argon2 (https://www.npmjs.com/package/phc-argon2) <br />
                       Crypto (https://nodejs.org/api/crypto.html/) <br />
                       CryptoJS (https://cryptojs.gitbook.io/docs) <br />
                       PostegreSQL (https://www.postgresql.org/) <br />
                       React (https://reactjs.org) <br />
                       Scss (https://sass-lang.com)</p>
                </section>
            </article>
        </div>
        )
    }
}