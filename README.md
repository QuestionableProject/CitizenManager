# #EU

A website written for a test task

### How does it work?

As a result, a workable Web application written in Javascript (without using TypeScript) should be obtained.

-----
### Used libraries:
`React` `ag-grid-react` `REDUXjs` `cors` `dotenv` `express` `pg` `pg-hstor` `sequelize`

-----
### How to start?
Select the `.env.example` on ``.env`` and enter all available data.

Write to the console:
/client
- npm i
- npm start
/server
- npm i
- npm run dev
  
After launching, go to --> http://localhost:3000

-----
### What task?

The purpose of the assignment is to find out the skills and capabilities of the applicant to create Web applications consisting of a NodeJS server, a React client part and a Postgres DBMS.
As a result, a workable Web application written in Javascript (without using TypeScript) should be obtained.
Those performing the task should keep in mind that the code will be carefully reviewed for the quality of writing, the structures used, the components and tools used.
If the resulting Web application contains errors, unsafe code (without exception handling), unnecessary (redundant) constructions, or the task is not done correctly (not completely), then such a result will not be accepted.

Task

1. Create a database in a Postgres DBMS with two tables. The tables are linked by the foreign key field. Each table must have a key field and other fields such as NUMERIC, VARCHAR, DATE, INTEGER. The names of the databases and tables can be chosen arbitrarily and filled with arbitrary data. To create a database and fill it with initial data, write it in SQL as a script and place it in a separate init-db.sql file in the root folder of the project.

2. Create a backend using NodeJS. Connect to the database created in paragraph 1 using pg-promise tools (https://github.com/vitaly-t/pg-promise ) or sequalize (https://sequelize.org /).

2.1. If sequelize is used, write part of the functions (methods) for working with data in SQL (use the seq.query() method).
When implementing partial data loading (pagination, infinite loading) use SQL language limit and offset operators. 

2.2. Write routers according to the architectural style of the REST API. Implement basic operations: create, receive, modify, and delete.

2.3. The server part should include folders: models (/models), controllers (/controllers), routers (/routes). 
All entities should be broken down according to this structure. For example, for the book entity, this will be 3 files: 
- A router that describes routes according to the REST API architectural style (examples: GET /api/books, POST /api/books/:id);
- The controller that is called from the router. It can contain various data checks and further invocation of model methods;
- A model that implements the methods of working with the database.

3. Create a client part using React. 
The appearance should be designed as a Dashboard with a side menu of several arbitrary items. In the first paragraph, place 2 Ag-Grid tables (https://www.ag-grid.com /), in which to output data from tables created in paragraph 1 using the server from paragraph 2.
Above the linked table, place working buttons: Add entry, Edit, Delete. When adding/changing a record, take into account the relationship with the main table in the field with the foreign key.

3.1. In the main table, apply loading using infinite loading (use the AgGrid Infinite Row Model). It is necessary to implement partial loading of records from the server (use SQL language limit and offset operators).

3.2. When designing the Dashboard, use the template of one of the modern examples from the Creative Tim website of the React FREE section (https://www.creative-tim.com/templates/react ), or any other similar in appearance and structure (beautifully designed, with a style taken from it) It is allowed to take a ready-made one and change it for a test task.

4. Upload to GitHub:
- the source texts of the Web application (without the node_modules folder). The client and server parts must be located in the same repository in separate folders in the root of the project (/client and /server);
- installation and startup instructions (in the file Readme.md located at the root of the project).

<br/>
<br/>


# #RU

Веб-сайт, написанный для тестового задания.

### Как он работает?
В результате выполнения должно быть получено работоспособное Web-приложение написанное на Javascript (без использования TypeScript).

-----
### Используемые библиотеки:
`React` `ag-grid-react` `REDUXjs` `cors` `dotenv` `express` `pg` `pg-hstor` `sequelize`

-----
### Как запустить?
Измените `.env.example` на `.env` и введите все доступные данные.

Пропишите в консоль:
/client
- npm i
- npm start
/server
- npm i
- npm run dev
  
В браузере откройте --> http://localhost:3000

-----
### Какое задание?

Цель задания – выяснить навыки и возможности создания соискателем Web-приложений состоящих из сервера NodeJS, клиентской части на React и СУБД Postgres.
В результате выполнения должно быть получено работоспособное Web-приложение написанное на Javascript (без использования TypeScript).
Выполняющим задание нужно иметь в виду, что код будет внимательно рассмотрен на качество написания, используемые конструкции, использованные компоненты и средства.
Если в полученном Web-приложении будут ошибки, не безопасный код (без обработки исключений), лишние (избыточные) конструкции или задание будет сделано не верно (не полностью), то такой результат не будет принят.

Задание

1. Создать базу данных в СУБД Postgres с двумя таблицами. Таблицы связать по полю foreign key. Каждая таблица должна иметь поле-ключ и другие поля типа NUMERIC, VARCHAR, DATE, INTEGER. Имена БД и таблиц выбрать произвольно и заполнить произвольными данными. Создание БД и ёё заполнение начальными данными написать на языке SQL в виде скрипта и поместить его в отдельный файл init-db.sql в корневую папку проекта.

2.Создать серверную часть с использованием NodeJS. Подключиться к созданной в п.1 БД с помощью средств pg-promise (https://github.com/vitaly-t/pg-promise) или sequalize (https://sequelize.org/). 

2.1. В случае использования sequelize написать часть функций (методов) работы с данными на языке SQL (использовать метод seq.query() ). 
При реализации частичной подгрузки данных (пагинации, infinite loading) использовать операторы языка SQL limit и offset. 

2.2. Роутеры написать по архитектурному стилю REST API. Реализовать базовые операции: создание, получение, изменение и удаление.

2.3. Серверная часть должна включать папки: модели (/models), контроллеры (/controllers), роутеры (/routes). 
Все сущности должны быть разбиты по данной структуре. Например, для сущности Книга(book) – это будет 3 файла: 
- Роутер, где описаны маршруты по архитектурному стилю REST API (примеры: GET /api/books, POST /api/books/:id);
- Контроллер, который вызван из роутера. В нем могут быть различные проверки данных и дальнейший вызов методов модели;
- Модель, которая реализует методы работы с БД.

3. Создать клиентскую часть с использованием React. 
Внешний вид оформить в виде Dashboard c боковым меню из нескольких произвольных пунктов. В первом пункте поместить 2 таблицы Ag-Grid (https://www.ag-grid.com/), в которые вывести данные из таблиц созданных в п.1 с помощью сервера из п.2. 
Над связанной таблицей поместить работающие кнопки: Добавить запись, Изменить, Удалить. При добавлении/изменении записи учитывать связь с главной таблицей в поле с foreign key.
 3.1. В главной таблице применить загрузку с помощью infinite loading (использовать AgGrid Infinite Row Model). Обязательно реализовать частичную подгрузку записей с сервера (использовать операторы языка SQL limit и offset).
 3.2. При оформлении Dashboard использовать шаблон одного из современных примеров c сайта Creative Tim раздела React FREE (https://www.creative-tim.com/templates/react), либо любой другой аналогичный по виду и структуре (красиво сверстанный, со стилем взятым из него) Разрешается взять готовый и поменять под тестовое задание.

4. Выложить на GitHub:
- исходные тексты Web-приложения (без папки node_modules). Клиентская и серверная части должны находиться в одном репозитории в отдельных папках в корне проекта (/client и /server);
- инструкцию по установке и запуску (в файле Readme.md расположенном в корне проекта).
 
