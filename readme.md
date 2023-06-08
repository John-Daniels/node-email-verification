# Node Authentication with a mailing service

- [x] Authentication
- [x] Email verification service

## setup

#### install

```bash
npm install
```

#### Wanna start it up

```bash
npm start
```

> or

```bash
npm run dev
```

> Pls make sure you fill this out in a .env file

```bash
MONGO_URI=mongodb://127.0.0.1:27017/node-email-verification
JWT_SECRET=EMILOKAN@johnkoder.dev
CLIENT_URI=http://localhost:3000/
CLIENT_REQUEST_TOKEN_PATH=http://localhost:3000/auth/verify?token=
MAIL_USERNAME=youremail@gmail.com
MAIL_PASSWORD=youremail-app-password
```

### Note

> For CLIENT_REQUEST_TOKEN_PATH

pls follow the pattern `http://localhost:3000/auth/verify?token=`.

replace `http://localhost:3000` with your cleint uri

> and also make user the params for verification are correct

### Documentation

Get the endpoints @ this postman link
([node-email-verification-endpoints](https://www.postman.com/frixxapp/workspace/my-public-apis/collection/22268402-25956222-1089-4c9f-85f6-72f92911ad0f?action=share&creator=22268402))

> `made by Johnkoder`
