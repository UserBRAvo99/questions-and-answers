const dataHTML = [
  {
    question:
      "Що таке DOCTYPE і для чого він потрібен? Що буде, якщо його не вказати?",
    answer:
      "DOCTYPE <!DOCTYPE> - повинен бути першим елементом в html-документі, йде перед тегом <html>. В першу чергу це декларація, а не тег. Тобто інструкція для веб-браузера про те, як інтерпритувати поточну HTML сторінку. Оскільки HTML існує в декількох версіях, крім того, є XHTML (EXtensible HyperText Markup Language, розширена мова розмітки гіпертексту), схожа на HTML, але розрізняється з ним по синтаксису. І щоб браузер правильно інтерпретував вашу сторінку необхідно завжди вказувати, тому що в старіших версіях HTML може перейти в режим сумісності, де він намагатиметься інтерпретувати HTML на основі певних стандартів, які можуть варіюватися залежно від браузера та його версії. Це може призвести до непередбачуваного відображення вашого веб-документа, оскільки різні браузери можуть інтерпретувати код по-різному.. Та якщо не вказати <!DOCTYPE> в HTML5 то браузер все одно буде інтерпретувати документ, в такому випадку, браузер буде використовувати стандартні правила та режим відображеня для HTML5. Але бажано завжди вказувати <!DOCTYPE>. ",
  },
  {
    question: "Для чого потрібні мета-теги?",
    answer:
      "Мета-теги використовуються для зберігання інформації, призначеної для браузера і пошукових систем: встановлення кодування елемента, передача інформації пошуковим системам і багато іншого. Мета тегів може бути кілька, тому що , залежно від використання атрибутів, вони несуть різну інформацію. Необхідно вказувати кодування сторінки для того, щоб браузер коректно відобразив текст. Якщо цього не зробити, або задати не вірне кодування, замість символів браузер може відобразити ієрогліфи - <meta charset=utf-8 /> - найпоширеніше кодування. Короткий опис змісту допомагає пошуковим системам краще проіндексувати сторінку - <meta name='description' content='Вивчення основ HTML5'/>. ",
  },
  {
    question: "Чим відрізняється блочний елемент від строчного?",
    answer:
      "Блоковий елемент (block-level element) - займає повністю весь рядок, незалежно від обсягу його контенту, тому кілька блокових елементів візуально йдуть один за одним. Рядковий елемент (inline element) - займає місце по своєму вмісту, тому кілька малих елементів можуть розташуватися на одному рядку. Якщо в рядку не вистачає місця для вміщення рядкового елемента, він переносить на новий рядок.",
  },
  {
    question:
      "Чому деякі символи можуть відображатись на сторінці у виді квадратів?",
    answer:
      "Зазвичай це вказує на проблему з кодуванням символів або використанням непідтримуваних символів. Наприклад неправильне кодування символів, помилка UTF-8. Чи несумісність зі шрифтом. Також можливе використання спеціальних символів, такі як  <, >, &,  і їх треба екранувати за допомогою сутностей HTML  (наприклад, &lt;, &gt;, &amp; відповідно).",
  },
  {
    question: "Що таке семантична верстка? Які семантичні теги знаєте?",
    answer:
      "Семантична розмітка - підхід до створення HTML-розмітки ґрунтується на використанні тегів за їх призначенням відповідно до специфікації і які відповідають типу контенту, що розмічується.Тобто семантична розмітка означає, що теги не вибираються на підставі того, як вони відображаються в браузері - вони вибираються на підставі типу та структури контенту, який розмічується. Наприклад - <h1> <header> <nav> <main> <img> <p> <a><footer> . Також симантичні теги допомагають при читанні сторінок. Ще приклад: <figure> <figcaption> ",
  },
  {
    question: "Які типи заголовків існують в HTML?",
    answer:
      "Заголовки в  HTML - це група тегів <h1> <h2> <h3> <h4> <h5> <h6> - визначає текстові золовки смислових розділів різного рівня, які вказують на важливість секції контенту, розташованого після них. Це інструмент структурування текстового контенту. Тег <h1> прийнято використовувати одни раз на сторінці, як основний заголовок. Решта заголовків можуть використовуватися скільки завгодно разів, та головне дотримуватись ієрархії. Пошукові системи звертають особливу увагу на заголовки, тому коректне використання цієї групи тегів вкрай важливе. Не визначайте рівень заголовка за розміром тексту на макеті. Не весь великий текст - заголовки. Заголовок - це те, що за змістом озаглавлює секцію контенту.",
  },
  {
    question:
      "Що називається потоком документа в HTML? Чи можна його змінювати?",
    answer:
      "Потік - це вертикальний і горизонтальний порядок послідовного відображення елементів на сторінці. Вертикально потік йде зверху вниз, і , за замовчуванням, елементи відображаються на сторінці в тому порядку, в якому вони вказані в HTML-документі. Горизонтально потік йде зліва направо. Потік можна змінювати за допомогою CSS і JS",
  },
  {
    question:
      "Які існують способи підключення JavaScript до html-сторінки? В чому між ними різниця?",
    answer:
      "Існує декілька способів підключення JavaScript. Перший варіант - створюємо файл з розширенням js і поміщаємо його у підпапку js(не обв'язково, та є хорошою практикою), потім вказуємо шлях скрипту в атрибуті src тега script. Підключати треба в кінці тега body після всього контенту. Це важливо, для того щоб спочатку відрендеревся контент та розмітка, а потім почав працювати скрипт. Другий варіан - JavaScript можна підключити в head, та треба пам'ятати що спочатку інтерпритатор прочитає скрипт і тільки потім перейде до розмітки. Можна застосувати async , та для зручності бажано використовувати перший варіант ",
  },
  {
    question: "Які існують способи додавання CSS на сторінку?",
    answer:
      "CSS (Cascading Style Sheets, каскадні таблиці стилів) - це мова для опису і зміни зовнішнього вигляду елементів. HTML використовується для визначення структури і семантики документу, а CSS - для його оформлення і позиціонування, Стилі можна підключити: вбудовані стилі (inline styles), вбудована таблиця стилів (embedded stylesheet), зовнішня таблиця стилів(external stylesheet). Вбудовані стилі - задаються тегу безпосередньо в атрибут style - їх складно перевизначити або використати повторно, застосовуються в рідких випадках - <p style='color:blue; font-size:24px;'>Цей текст буде синім.</p>. Вбудована таблиця стилів -  CSS-правила додаються всередину тегу <style> в шапці документа. Їх неможливо використовувати повторно на інших сторінках і складно масштабувати і підтримувати. Зовнішня таблиця стилів - Зовнішній CSS-код легко масштабувати, підтримувати і використовувати повторно на інших сторінках, тому це стандарт підключення стилів. У проекті створюється окремий файл стилів з розширенням .css і підключається в HTML-документі. Підключається CSS-код в head <link rel='stylesheet' href='./css/styles.css' />",
  },
  {
    question: "Різниця між reset.css и normalize.css?",
    answer:
      "Використовувати можна обидва варіанти. reset.css - cкидує стилі елементів, тобто накладаю однорідний стиль для всіх елементів. normalize.css - зберігає корисні стилі браузерів по замовчуванню(тобто узгоджує вигляд між різними браузерами), також може виправляти деякі баги на мобільних та десктопних присторях. ",
  },
  {
    question: "Що таке critical CSS?",
    answer:
      "Це техніка оптимізації завантаження сторінки. Суть такого підходу полягає в тому, що стилі які потребуються для першого рендерінгу, таким чином зменшується час завантаження частини сторінки. Це може бути важливо для першого враження користувача. При такому підході можна користуватись інлайновими стилями(стилі прописуюься одразу в тегові) та вбудованої таблиці стилів(стилі прописуються в head в тегові style type='text/css')",
  },
  {
    question: "Що таке специфічність селекторів в CSS?",
    answer:
      "Специфічність - це спосіб, за допомогою якого браузери визначають, які CSS-властивості найбільше відповідають елементу і як наслідок, будуть застосовані. Тобто якщо є два або більше суперечливих(конфліктуючих) правил CSS, що вказують на один і той самий елемент, браузер слідує деяким правилам. Кожен селектор має своє місце в ієрархії специфічності. Вбудовані стилі мають найбільшу специфічність, ID поступають вбудованим , але переважають інші. На третьому місці будуть класи, атрибути та псевдокласи.Селектор класу переважає будь-яку кількість селекторів елементів. При рівній специфічності - враховується останнє правило. ",
  },
  {
    question: "В чому різниця між псевдокласом та всевдоелементом в CSS?",
    answer:
      "Псевдокласи використовуються для вибору елементів у певному стані або з певними характеристиками, такими як перший, останній, наведений, активний тощо. Псевдоелементи використовуються для стилізації певних частин елементів, які не є окремими HTML-елементами. можна використати для для створення стилів для першого абзацу внутрішнього тексту або вставки вмісту перед або після певного елемента",
  },
  {
    question: "Що таке блочна модель CSS?",
    answer:
      "Блочна модель - це блочний елемент, прямокутний контейнер, незалежно від того, як він візувльно представлений на сторінці. В елемента є область вмісту і необов'язкові поля, відступи та межі(рамка). Content, padding, border, margin.",
  },
  {
    question: "Яку роль виконує box-sizing?",
    answer:
      "Визнає як браузер обчислює обсяг елемента, включаючи його ширину та висоту, а також відступи та границі. Два основних значення: content-box - величина елемента обчислюється на основі висоти контенту в межах границі, розміри падінгів та гнраниць додаються до вказаної ширини та висоти елемента. border-box - величина елемента обчислюється на основі вмісту та включає падінги і границі. Тобто розміри падінгів і границь врахвуються в межах вказаної ширини та висоти елемента. Найчастіше використовується box-sizing: border-box",
  },
  {
    question: "Які є види позиціонування елементів на сторінці?",
    answer:
      "Relative Positioning (Відносне позиціонування): При відносному позиціонуванні, елемент зсувається відносно свого звичайного місця в потоці документа, але залишає відображення простору для нього на своєму оригінальному місці. Це дозволяє використовувати властивості top, right, bottom і left для зміщення елемента відносно його звичайного положення.Absolute Positioning (Абсолютне позиціонування): При абсолютному позиціонуванні, елемент вилучається з потоку документа, і його позиція визначається відносно батьківського елемента, якщо батьківський елемент також має встановлене позиціонування, або відносно вікна перегляду.Fixed Positioning (Фіксоване позиціонування): Елемент з фіксованим позиціонуванням розташовується відносно вікна перегляду і не змінює своє положення при прокручуванні сторінки. Sticky Positioning (Липке позиціонування): Липке позиціонування комбінує властивості відносного і фіксованого позиціонування. Елемент спочатку розташовується відносно вікна, але при прокручуванні сторінки він прилипає до батьківського контейнера або певного позначеного місця.Static Positioning (Статичне позиціонування): Це значення за замовчуванням для позиціонування елементів. Елементи розміщуються в звичайному порядку потоку документа.",
  },
  {
    question: "Що робить властивість z-index?",
    answer:
      "Позиційовані елементи випадають із потоку і для них приміняється z-index, який визначає(контролює) глибину позиціонованих елементів на сторінці по осі z - від очей корристувача і до екрану(перепендикулярно до площини екрану). Має позитивні і негативні значення",
  },
  {
    question: "В чому різниця між px, em, rem?",
    answer:
      "Одиниці вимірювання(розміру) шрифтів в CSS. PX - абсолютна одиниця вимірювання EM - відносна одиниця вимірювання, яка залежить відносно шрифту батьківського елемента. REM - відносна одиниця вимірювання відносно шрифту кореневого елементу(сприяє більш адаптивному розміру шрифта).",
  },
  {
    question:
      "Що таке гумова, адаптивна та відзивчива верстка? В чому між ними різниця?",
    answer:
      "Гумова верстка - це підхід до веб розробки, при якому веб-сайт створюється з виорнистанням відсоткових значень для визначення ширини елементів і сторінки щоб адаптуватися до різних розмірів екранів. Адаптивна верстка - має кілька точок перерізу(breakpoints - медіа запити), на яких змінюється структура і вигляд сторінки, щоб оптимально відображати на різних присторях. Відзивчива(респонсивна) верстка - більш сучасний і складніший підхід , який використовуе медіа запити та інші техніки (комбінація гумової і адаптивної) для адаптації сайту до різних пристроїв і розмірів екрану. (рекомендований підхід на сьогоднішній день)",
  },
  {
    question: "В чому різниця між visibility:hidden и display:none?",
    answer:
      "visibility:hidden - приховує елемент, але залишає його в потоці та простір на сторінці, табто елемент не буде видимий для користувачаю. display:none - приховує елемент та забирає його з потоку",
  },
  {
    question: "Що таке repaint и reflow?",
    answer:
      "repaint(перемальовує) - процес відбуваеться коли елемент на сторінці змінює свій вигляд без змін розмітки або розташування. Структура сторінки не змінюється, змінитися може колір, відступи або інші стилі елементів. reflow (перераховує) - процес відбувається при зміні розміру,положення або структури елемента наторінці(видалення або додавання, зміна розташування або невидимість).",
  },
  {
    question: "Яка різниця між відносною та абсолютною адресою?",
    answer:
      "Абсолютна адреса - це повна адреса, яка вказує точно на конкретний об'єкт або місцезнаходження без врахування контексту, тобто включає всю інформацію необхідну для знаходження ресурсу в мережі - https://www.example.com/images/pic.jpg . Відносна адреса - вказує на об'єкт або місце знаходження відносно поточного контексту або об'єкту - ..//images/pic.jpg ",
  },
  {
    question: "Різниця між тегом та елементом?",
    answer:
      "Різниця в тому що тег - це маркер у синтаксисі розмітки  <p>, <div>, <a>, <img>, <br> . А елемент це відкриваючий і закриваючий тег(або не парний тег), також враховуються атрибути та інформація яка міститься всередені(вкладенисть елементів,текст)",
  },
  {
    question: "Коли ви використовуєте <button> , а коли <a>?",
    answer:
      "<button> - використовується для відправки форм, взаємодією з кормтувачем при натисканні(js) або ж динамічних змін. <a> - зазвичай використовується для гіперпосилань, переходу на інші сторінки, навігації по веб-сторінці",
  },
  {
    question: "Для чого потрібен атрибут type у кнопки?",
    answer:
      "Якщо це стосується кнопки, то type - визначає тип дії яку виконує кнопка(submit, reset, button), за замовчуванням type=button. ",
  },
  {
    question: "Різниця між checkbox та radio?",
    answer:
      "checkbox та radio - це типи input. checkbox - надає можливість обрати декілька варіантів відповіді, а з radio - можна вибрати лише один варіант з декількох.",
  },
  {
    question: "Що таке наслідування стилів в CSS? І що таке каскадність в CSS?",
    answer:
      "Наслідування стилів - це передача певних стилів від батьківського елементу до дочірнього. Каскадність - описує спосіб вирішення конфлікту між різними стилями, які застосовуються до одного елемента. Які саме стилі будуть в приоритеті, можна розрахувати за допомогою специфічності ",
  },
  {
    question:
      "В чому різниця між контентними і оформлюючими/декоративними зображеннями?",
    answer:
      "Контентні зображення допомагать донести повідомлення сторінки до користувача( це можуть бути фотографії, ілюстрації, графіки, тощо), повинні мати атрибут alt - з коротким описом зображення(для скрін рідерів). Оформлюючі/декоративні зображення - не впливають на контент сторінки і несуть переважно функцію полібшення дизайну(фон, риски, декоративні ефекти)",
  },
  {
    question:
      "Чому у <img> та <input> не  має псевдоелементіов ::before, ::after?",
    answer:
      "<img> та <input> - не мають вмісту, тобто не містять внутрішніх елементів тексту або коду, які можна було б модифікувати або задати стилі за допомогою псевдоелементів",
  },
  {
    question: "Що таке flex-контейнер та flex-елемент?",
    answer:
      "flex-контейнер - це контейнер, який містить один чи більше дочірніх елементів і визначає контекст для розташування цих елементів вздовж однієї або двох гнучких вісей. flex-елемент - це елемент який знаходиться всередині flex-контейнера.",
  },
  {
    question: "Що таке flex-вісь?",
    answer:
      "У Flexbox є дві вісі (термін гнучка вісь) Z і Y, тобто горизональна(зазвичай зазамовчуванням) і вертикальна. Визначається головна вісь flex-direction(row або row-reverse, column або column-reverse) - це буде головна вісь, а додоткова вісь розташована перпендикулярно до головної ",
  },
  {
    question: "Які переваги svg перед png або jpeg?",
    answer:
      "SVG - векторна графіка, браузер зазвичай швидше з нею працює, тому що сам її рендирить, не піксилізується при різних розмірах екрана та ретіні (зазвичай використовують для іконок та невеличких зображеннях). Має зазвичай менший обсяг файлу, підтримує анімацію та взаємодію за допомогою JavaScript і CSS. PNG, JPEG - це растова графіка, тобто має обмещення відносно оригінала, може піксилізуватися при не пропорційному збільшення розміру екрана(девайса) або ретіни. Звісно це можна виправити за допомогою атрибуту srcset.",
  },
];

export default dataHTML;
