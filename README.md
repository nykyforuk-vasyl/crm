🧾 CRM for Vendors
A functional CRM system designed to optimize supplier information management, built with Next.js (App Router), TypeScript, Tailwind CSS, React Query, and other modern technologies.

🧭 Main Sections
🏠 Home Page

📊 Dashboard

🏢 Companies

➕ Promotions / New Offers

📦 Tech Stack
Next.js (App Router)

React

TypeScript

Tailwind CSS

React Query – async data fetching and caching

MockAPI (or your backend) – fake REST API for testing

Vercel – hosting and deployment

✅ Features
Create, edit, and delete companies

Assign promotions to companies

Upload company avatars (not persisted on the server)

Filter companies by category, country, and status

Dashboard with summary cards, analytics, and map

Clean and responsive UI

⚙️ Getting Started
Clone the repository:
git clone https://github.com/yourusername/your-crm-repo.git
cd your-crm-repo

Install dependencies:
npm install
Create a .env.local file and add your environment variables (e.g., MockAPI project token):

NEXT_PUBLIC_PROJECT_TOKEN=your-mockapi-project-id

Run the development server:
npm run dev

📁 Folder Structure
src/
├── app/
│ ├── dashboard/ # Dashboard pages
│ ├── companies/ # Companies pages
│ ├── components/ # Shared components
│ ├── layout.tsx # Main layout
├── lib/ # API logic (fetchers)
├── styles/ # Tailwind CSS configuration

👨‍💻 Author
Nykyforuk Vasyl
https://github.com/nykyforuk-vasyl

---

🧾 CRM для продавців
Функціональна CRM-система для керування інформацією про постачальників, побудована з використанням Next.js (App Router), TypeScript, Tailwind CSS, React Query та інших сучасних технологій.

🧭 Основні розділи
🏠 Головна сторінка

📊 Панель керування (Dashboard)

🏢 Компанії

➕ Нові акції / Промо

📦 Технології
Next.js (App Router)

React

TypeScript

Tailwind CSS

React Query — асинхронне отримання даних

MockAPI (або інший бекенд) — для тестових даних

Vercel — хостинг і деплой

✅ Функціонал
Створення, редагування та видалення компаній

Призначення акцій компаніям

Завантаження аватарок компаній (не зберігаються на сервері)

Фільтрація компаній за категорією, країною, статусом

Панель керування з підсумками, аналітикою та картою

Адаптивний та чистий UI

⚙️ Як почати
Клонувати репозиторій:
git clone https://github.com/yourusername/your-crm-repo.git
cd your-crm-repo

Встановити залежності:
npm install
Створити .env.local файл та додати змінні оточення (наприклад, токен MockAPI):

NEXT_PUBLIC_PROJECT_TOKEN=your-mockapi-project-id

Запустити проект у режимі розробки:
npm run dev

📁 Структура папок
src/
├── app/
│ ├── dashboard/ # Панель керування
│ ├── companies/ # Сторінки компаній
│ ├── components/ # Загальні компоненти
│ ├── layout.tsx # Головний лейаут
├── lib/ # Логіка API (fetchers)
├── styles/ # Налаштування Tailwind CSS

👨‍💻 Автор
Никифорук Василь
https://github.com/nykyforuk-vasyl
