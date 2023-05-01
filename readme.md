## GoIT Node.js Course Homework

### Dependencies:

---

| bcryptjs | cors | cross-env | dotenv | express | jimp | joi | jsonwebtoken | mongoose | http-errors |
| -------- | ---- | --------- | ------ | ------- | ---- | --- | ------------ | -------- | ----------- |

---



### API:

```
/================ Реєстрація/логанізація юзера =================/
POST /auth/signup - реєстрація користувача (потребує  password, email, - обов'язкові, name )
POST /auth/login - логінізація користувача (потребує email, password)
GET /auth/logout - логаут
GET /auth/current - віддає данні користувача при вже наявному токені (потребує email)

/======== Данні про фільми ================/

GET /movies - віддає фільми, додані користувачем(потребує token)
GET /movies/- віддає дані про фільм по id
POST /movies - додає фільм в колекцію користувача (необхідно передати title  - обов'язково, director, date)
PATCH /movies/:id  - оновлення данних про фільм по його id (наявність токену);
DELETE /movies/:id - видаляє фільм з колекції за його id (потребує токен)

