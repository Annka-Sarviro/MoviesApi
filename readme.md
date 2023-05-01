## GoIT Node.js Course Homework

### Dependencies:

---

| bcryptjs | cors | cross-env | dotenv | express | jimp | joi | jsonwebtoken | mongoose | http-errors |
| -------- | ---- | --------- | ------ | ------- | ---- | --- | ------------ | -------- | ----------- |

---

### Branches:

---

- 'dev' -- it contains last version of app;
- 'main' -- deploy to heroku
-

### API:

---

**Use api on routes:**

--https://petly-be.herokuapp.com

```
/================ Реєстрація/логанізація юзера =================/
POST /auth/signup - реєстрація користувача (потребує  password, email, - обов'язкові, name )
POST /auth/login - логінізація користувача (потребує email, password)
GET /auth/logout - логаут
GET /auth/current - віддає данні користувача при вже наявному токені (потребує email)

/======== Данні про фільми ================/

GET /movies - віддає фільми, додані користувачем
PATCH /user/avatar - оновлення аватара юзера, наявність токену);
PATCH /user/:properties - оновлює одне поле з інформацією про юзера(одне з name, email, birthday, city, phone), окрім аватара,
      properties - поле яке треба оновити, потребує передачу даних для оновлення


