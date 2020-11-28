## Getting Started

1 - Clone the project repository on your machine<br>
```bash
git clone https://github.com/jairoevaristo/API_NodeMailer.git
```
<hr>

2 - Enter the project directory and install the project facilities<br>

``
yarn
`` or ``
npm install
``
<hr>

3 - To start the server just run the command<br>

``
yarn start
``
or
`` 
npm start
``
<hr>
<br>

## Warning

:warning: To use the password recovery service by email, it is necessary to put the credentials in the `example.env` file first, it is recommended to use the service <https://mailtrap.io>, if you want to use another service, change the port in `src/config/nodemailer.ts` and configure the example.env file with your credentials.

## Using directions

**The application runs on http://localhost/api/v1 on port 3001**

- Route that lists the registered users and shows the email of the currently active user, to access this route it is necessary to authenticate. In the request, I received a header `authorization` with a holder and the token. [GET]

```
http://localhost/api/v1/users
```

- Route of registering users, I received an name, email and password in the body of the request. [POST]

```
http://localhost/api/v1/users
```

- Route that performs the user authentication in the application, I received an email and a password in the body of the request, and returns an access token. [POST]

```
http://localhost/api/v1/session
```

- Route responsible for generating a new password and sending it to the user's email, I received in the body of the request only the user's email [POST].


```
http://localhost/api/v1/recover-password
```

<hr>
<br>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
