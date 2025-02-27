# Documentation
I have a technical problems with Supabase RDBMS...

### RU
Данный проект можно считать full-stack проектом, т.к. он написан на следующих технологиях:
Forntend: NEXTjs, React JSX (на TypeScript ещё не переведён), Zustand (как менеджер состояния так и библиотека для создания хуков), SCSS, тесты написаны на Jest, HTML5.
Backend: Supabase (как полная замена привычного бэкенда), PostgresSQL, SQL.

Дизайн был составлен мной лично, проанализировав изначально сайты конкурентов и выявив слабые и сильные стороны конкурентов [figma](https://www.figma.com/design/KcjZvGldUKFh6UooDA88j5/gameDev---game-WIKI?m=auto&t=MpUvPZtIkXbQNMmK-6) (на макете наглядный пример, как сейчас выглядит сайт)

Использовал PostgreSQL платформу Supabase (аналог Firebase). Часть кода с проекта:
![Снимок экрана 2025-02-27 124014](https://github.com/user-attachments/assets/9ace5611-cd72-42b2-8c7f-c6a7e66b7df6)

Готовая таблица на основе SQL кода:
![Снимок экрана 2025-02-27 124205](https://github.com/user-attachments/assets/0e458ea9-32e7-4ee3-8165-3fa3894f46a4)

SQL основа:
```sql
DROP TABLE IF EXISTS public."all_heroes";


CREATE TABLE
  public."all_heroes" (
   id bigint generated always as identity not null,
    name text null,
    avatar text null,
    class_description text null,
    class_icon text null,
    short_description text null,
    hero_bg text null,
    constraint "All heroes_pkey" primary key (id)
  ) tablespace pg_default;

INSERT INTO
  public."all_heroes" (
    name,
    avatar,
    class_description,
    class_icon,
    short_description,
    hero_bg
  )
VALUES
  (
    'Its title',
    'https://i.imgur.com/jEZ1ds2.png',
    'description ....',
    'https://i.imgur.com/4cSsCNR.png',
    'One of the world`s most notorious hackers, Sombra uses information to manipulate those in power.',
    'https://i.imgur.com/tFZ6vVM.jpeg'
  );

-- включение RLS безопасности, чтобы пользователь не мог управлять всеми данными таблицы
ALTER TABLE public."all_heroes" ENABLE ROW LEVEL SECURITY;

-- Создание политики RLS и SELECT
CREATE POLICY "All users can view all_heroes" ON public."all_heroes" FOR
SELECT
  USING (true);

-- Создание политики для всех операций (INSERT, UPDATE, DELETE)
CREATE POLICY "No one can modall_heroes" ON public."all_heroes" FOR ALL USING (false);

-- отображение данных с учётом вышенаписанных правил
SELECT
  *
FROM
  public."all_heroes";
```
