# movies-explorer-api

Бэкенд для дипломной работы для приложения по поиску фильмов.

GET /users/me - возвращает информацию о пользователе 
PATCH /users/me - обновляет информацию о пользователе 
GET /movies - возвращает сохранённые фильмы
POST /movies - создаёт фильм с переданными в теле полями
DELETE /movies/movieId - удаляет сохранённый фильм по _id

POST /signin - проверяет переданные в теле поля (email и password) и возвращает JWT
POST /signup - создаёт пользователя с переданными в теле полями

Бэкенд https://api.find-films.students.nomoredomains.icu
public IP : https://178.154.250.247/
