## Этап 0 — Подход

* Делай максимально просто
* Один файл — нормально
* Гугли всё, что не знаешь
 
Не нужно сейчас:

* Express / NestJS
* базы данных
* авторизация
* сложная архитектура

---

## Этап 1 — Базовый HTTP-сервер

### Задачи

* создать проект (npm init)
* установить TypeScript
* создать `tsconfig.json`
* написать сервер через `http.createServer`
* запустить на `localhost:3000`

### Результат

```
GET /
→ "API works"
```

### Подсказки (что гуглить)

* node http server typescript example
* createServer node http typescript

---

## Этап 2 — Понять req / res

Тебе нужно научиться:

* читать `req.method`
* читать `req.url`
* отправлять ответ через `res.end`
* ставить статус: `res.statusCode`
* ставить headers: `res.setHeader`

### Мини-задача

Сделай:

```
GET /ping → { "ok": true }
```

---

## Этап 3 — Модель Habit

Опиши тип:

```
{
  id: string
  title: string
  completed: boolean
  createdAt: Date
}
```

Создай хранилище:

```
const habits: Habit[] = []
```

---

## Этап 4 — Роутинг вручную

Ты будешь сам писать роутинг через условия:

* `req.method`
* `req.url`

### Пример логики (идея, не код):

* если GET и url === '/habits'
* если POST и url === '/habits'
* если PATCH и url начинается с '/habits/'
* если DELETE и url начинается с '/habits/'

### Подсказки

* node js routing without express

---

## Этап 5 — CRUD API

### 1. Получить все привычки

```
GET /habits
```

* вернуть массив

---

### 2. Создать привычку

```
POST /habits
```

Тебе нужно научиться:

* читать body вручную (chunks)
* собрать строку
* сделать `JSON.parse`

Создать объект:

* id (можно Date.now().toString())
* title
* completed = false
* createdAt = new Date()

---

### 3. Обновить привычку

```
PATCH /habits/:id
```

Тебе нужно:

* вытащить id из URL
* найти элемент в массиве
* поменять `completed`

---

### 4. Удалить привычку

```
DELETE /habits/:id
```

* найти по id
* удалить из массива

---

## Этап 6 — Парсинг URL

Научись доставать id из пути:

Пример:

```
/habits/123
```

Подсказки:

* new URL(req.url, `http://${req.headers.host}`)
* pathname
* split('/')

---

## Этап 7 — Чтение body вручную

Тебе нужно понять механизм:

* `req.on('data', chunk)`
* `req.on('end', ...)`
* собрать строку
* `JSON.parse`

### Подсказки

* node js read request body http module
* parse json body node http

---

## Этап 8 — Отправка JSON

Каждый ответ должен:

```
res.setHeader('Content-Type', 'application/json')
res.statusCode = 200
res.end(JSON.stringify(data))
```

---

## Этап 9 — Тестирование

Используй:

* Postman
* Thunder Client

Проверь:

* создаётся ли привычка
* возвращается ли список
* обновляется ли
* удаляется ли

---

## Этап 10 — Базовая валидация

Проверь:

* есть ли title
* строка ли это
* не пустая ли строка

Если ошибка:

```
statusCode = 400
```

---

## Финальный результат

Ты понимаешь:

* как работает HTTP-сервер
* как читать запрос
* как парсить body
* как писать роутинг
* как возвращать JSON