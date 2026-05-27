# Smart Trip Planner 🗺

Веб-додаток для планування подорожей з маршрутом по днях.  
Реалізований у межах семестрового проекту з курсу **Розробка WEB-додатків (TypeScript)**.

## Стек технологій

| Шар | Технологія |
|-----|-----------|
| Мова | **TypeScript** (строга типізація) |
| Фреймворк | **React 19** + Vite |
| Маршрутизація | **React Router v7** |
| Стилі | **Tailwind CSS v3** |
| Іконки | **Lucide React** |
| Бекенд | Статичний `db.json` (seed) + **localStorage** |
| Деплой | **GitHub Pages** через GitHub Actions |

## Функціонал

- Список подорожей — картки з зображенням, містом, країною, датами, тривалістю
- Створення/редагування подорожі — форма з валідацією
- Маршрут по днях — автоматична генерація днів за датами
- Активності — додавання (назва, опис, категорія, час, тривалість) і видалення
- Видалення подорожі з підтвердженням
- Серверна взаємодія — дані підвантажуються з /data/db.json при першому запуску, далі localStorage
- Адаптивний дизайн — мобільні, планшети, десктопи

## Структура проекту

```
src/
├── models/        # TypeScript-інтерфейси (Trip, DayPlan, Activity, User)
├── services/      # storageService.ts — CRUD через fetch + localStorage
├── components/    # Navbar, TripCard, ActivityCard, AddActivityModal
├── pages/         # HomePage, TripDetailPage, TripFormPage
└── utils/         # helpers.ts — formatDate, tripDurationDays, категорії
```

## Запуск локально

```bash
npm install
npm run dev
```

## Деплой на GitHub Pages

1. Змінити `base` у `vite.config.ts` на `/назва-репозиторію/`
2. Увімкнути GitHub Pages (Settings → Pages → Source: GitHub Actions)
3. Зробити push у гілку main

## Посилання

- Сторінка: https://username.github.io/smart-trip-planner/
- Репозиторій: https://github.com/username/smart-trip-planner
