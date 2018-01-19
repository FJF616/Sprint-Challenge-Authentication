<!-- Answers to the Short Answer Essay Questions go here 
1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
1. What does bcrypt do in order to prevent attacks?
1. What are the three parts of the JSON Web Token?
-->
1. Middleware is software which provides services to the functions within an app beyond those available from the operating system.  it is commonly referred to as software glue.
Sessions are records that go in a database which are created through user interaction with a server. Bcrypt is a password hashing function in javascript. JWT or JSON web token is a compact URL-safe means of representing claims to be transferred between two parties that can be signed using a secret or public/private key.

2. In order to prevent attacks, bcrypt incorporates a random salt.

3. The three parts to a JSON Web Token are  Header, Payload, Signature