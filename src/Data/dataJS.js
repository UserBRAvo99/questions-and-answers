const dataJS = [
  {
    question: "Типи даних в в JavaScript?",
    answer:
      "numbers, string, booleans, objects, undefined, null, (BigInt, Symbol - from developer mozilla)",
  },
  {
    question: "Що таке NaN?",
    answer:
      "NaN - Not a Number - спеціальне значення в JavaScript, яка вказує що вираз або операція яку виконали не є числом. Може виникнути у різних ситуаціях. Наприклад, віднімання нечислового значення від числа, ділення нуля на нуль, або спроба взяти квадратний корінь з від'ємного числа.  Щоб перевірити, чи змінна містить NaN, можна використовувати функцію isNaN()",
  },
  {
    question: "В чому різниця між null та undefined?",
    answer:
      "null - вказує на відсутність значення або об'єкта (наприклад якщо в prompt() нічого не ввести і натиснути ОК - значення змінної буде null ). undefined - вказує на відсутність значення, тобто ніщо. Якщо оголисити змінну , але не вказати їй жодного, то ми отримуємо undefined, також функції можуть повернути undefined",
  },
  {
    question: "Чим відрізняється строга рівність від не строгої (=== і ==)?",
    answer:
      "=== - оператор строгої рівності, тобто все дорівнює собі. Перед оцінкою нічого не перетворюється. == - нестрога рівність, виконують претворення типів порівнювальних значень(тому якщо порівняти число 1 з рядком 1 або null == undefined, отримаємо true , що може призвести до помилки при обробки значень в деяких випадках)",
  },
  {
    question: "Логічні оператори !, &&, ||. Як працюють? ",
    answer:
      "! - оператор NOT - це унарний оператор, який виконує операцію над одним операндом з правої сторони. && - AND - приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до false, і правий - в інших випадках. || - OR - приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.",
  },
  {
    question: "Що таке use strict і для чого він потрібен?",
    answer:
      "use strict - строгий режим, запообігає створенню змінних в глобальному режимі(змінні з однаковою назвою не конфліктують в різних файлах), забороняє використовувати this в глобальному контексті(інакше він буде звертатися до window). Краще завжди писати код в строгому режимі.",
  },
  {
    question: "Чому результатом порівняння двох схожих обєктів буде false?",
    answer:
      "Тому що , хоч вони можуть бути і ідентичними, та вони мають різні посилання на адресу пам'яті. Тому вони не можуть бути рівними",
  },
  {
    question: "Як перевірити ідентичність 2х обєктів?",
    answer:
      "Можна скористатись JSON.stringify() і зробити глибоке порівняння, та треба пам'ятати, що цей підхід має свої обмеження, і він не враховує всі аспекти об'єктів, такі як функції або спеціальні властивості, які не серіалізуються до JSON. Можна перебрати ключ і значення в циклі за допомогою Object.entries(obj). Також можна скористатися бібліотекою  Lodash isEqual() наприклад _.isEqual(obj1, obj2)",
  },
  {
    question: "Як зробити копію обєкта?",
    answer:
      "Можна створити копію за допомогою оператора spread (тобто розпилити старий об'єкт в новий, це створить незалежну копію),або за допомогою Object.assign({}, початковийОб'єкт) і JSON.parse(JSON.stringify(початковийОб'єкт))",
  },
  {
    question: "Чим відрізняються змінні var, let и const?",
    answer:
      "var, let и const - основні способи оголошення змінної. var - має функціональну область видимості, піддаються подняттю (hoisting), можуть бути повторно оголошені в одному і тому ж блоку коду. let - мають блочну область видимості (block scope),піддаються подняттю, можна отримати доступ до них до їхнього оголошення. const - мають блочну область видимості, значення не можна переназначити після першого присвоєння, не піддаються подняттю. Краще використовувати let або const, вони надають більший контроль над змінними.",
  },
  {
    question: "Як дізнатись, чи являються дані масивом?",
    answer: "Array.isArray() - вбудована функція, яка повертає true або false.",
  },
  {
    question: "Які перебираючі методи масивів ви знаєте?",
    answer:
      ".map((element, index, array) => {}). students.flatMap(arr => arr.key) - схожий на map, але застосовується коли треба розгладити багатовимірний масив. .filter((element, index, array) => {}), .find((element, index, array) => {}), .findIndex((element, index, array) => {}), every(), some(), reduce((previousValue, element, index, array) => {}, initialValue), деструктуризуючі методи(бажано робити копію масиву, для того щоб не змінити оригінал, це хороша практика) - sort(),",
  },
  {
    question: "Як обєднати масиви?",
    answer: "Це можна зробити за допомогою concat() або spreаd оператора",
  },
  {
    question: "Як дізнатись, чи знаходиться елемент в масиві?",
    answer:
      "Це можна зробити за допомогою includes() і some() - повернуть boolean, find() - повернуть значення або перебрати масив в циклі і порівняти значення на кожній ітерації",
  },
  {
    question:
      "Чи можна використовувати цикл for in для масивів? Які недоліки такого методу?",
    answer:
      "for in - створений для перебирання об'єктів,який перебирає ключі об'єкта object. Не гарантує порядок перебору елементів масиву, може також перебирати властивості, які не є числовими ключами масиву, наприклад, методи об'єкта Array або будь-які додаткові властивості, які можуть бути додані до масиву.",
  },
  {
    question: "Що таке підняття (hoisting)?",
    answer:
      "Це механізм який дозволяє об'явленій змінній або функції піднімати/спливати їхні оголошення вгору, але треба пам'ятати що підніматись може оголошення, не ініціалізація значень змінних.",
  },
  {
    question:
      "Яким буде значення змінної var при зверненні до неї до її обявлення?",
    answer: "Якщо звернутися до var то буде undefined",
  },
  {
    question:
      "Що буде, якщо звернутись до змінних let/const до початку їх обявлення?",
    answer:
      "Інтерпритатор видасть помилку не можна звернутися до ініцилізації ",
  },
  {
    question: "Що таке область видимості (Scope)? Яка вона буває?",
    answer:
      "Область видимості (scope) - механізм, який визначає доступність змінних у коді, що виконується. Ланцюжок областей видимості (scope chain) - області видимості утворюють ієрархію, за якою дочірні області мають доступ до змінних з батьківських областей, але не навпаки. Змінні, оголошені на найвищому рівні, тобто за межами будь-яких конструкцій на зразок if, while, for і функцій, знаходяться в глобальній області видимості і доступні всюди після їх оголошення. Змінні, оголошені всередині інструкцій if, for, функцій та інших блоків коду, взятих у фігурні дужки {}, знаходяться в блоковій області видимості і доступні тільки всередині цього блоку коду або у блоках, вкладених в нього.",
  },
  {
    question: "Різниця між Function Declaration та Function Expression?",
    answer:
      "(function expression) - звичайне оголошення змінної, значенням якої буде функція. (function declaration) - оголошення функції можна викликати до місця її створення в коді. Різниця в тому, що функціональний вираз не можна викликати до місця його створення, тільки після нього, тому що це буквально оголошення const змінної.",
  },
  {
    question: "Що таке callback функції?",
    answer:
      "Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.",
  },
  {
    question: "Чим стрілкова функція відрізняється від звичайних функцій?",
    answer:
      "Стрілкова функція не має this, не може спливати до її оголошення, має коротший синтаксичний запис, не можна використовувати arguments, не має prototype.",
  },
  {
    question: "Чи є аналог arguments для стрілкових функцій?",
    answer:
      "rest parameters - можна використати параметр залишку, який доступний у стрілковій функції та дає схожий ефект(тобто збирає всі аргументи в масив, ...args і потім можна звернутись до args)",
  },
  {
    question: "Як визвати функцію із затримкою в 5 секунд?",
    answer:
      "Можна скористатися setTimeOut(), перпшим параметром вказати функцію, а другим час затримки (в мілісекундах)",
  },
  {
    question: "Що таке лексичне оточення (Lexical Environment)?",
    answer:
      "Це місце, де (або звідки) ми маємо доступ до змінних або функцій. JS має 4 типи областей видимості: глобальна, функціональна, блокова (ES6) та область видимості eval.",
  },
  {
    question: "Що являється глобальним лексичним оточенням?",
    answer: "У несуворому режимі це window. У суворому - undefined.",
  },
  {
    question: "Що таке замикання (Closures)? Для чого воно використовується?",
    answer:
      "Це здатність функції під час створення запам'ятовувати посилання на змінні, функції та параметри, що знаходяться в поточному лексичному оточенні, а також у лексичному оточенні батьківської функції й так до глобального лексичного оточення. Замикання передбачає саме зовнішні змінні, а не саму функцію.",
  },
  {
    question: "Що таке IIFE?",
    answer:
      "Immediately Invoked Function Expression - це функція, яка викликається або виконується одразу після створення або оголошення. (function() {...})",
  },
  {
    question: "Основні принципи ООП?",
    answer:
      "Інкапсуляція, абстакція, наслідування, поліфоризм. Інкапсуляція (Encapsulation):Інкапсуляція означає обгортання даних та методів, які з ними працюють, у один об'єкт. Це дозволяє приховати деталі реалізації та надати іншим частинам програми доступ лише до необхідних методів та властивостей об'єкта. Інкапсуляція сприяє зменшенню залежностей між компонентами програми і полегшує зміну внутрішньої реалізації без змін в інших частинах коду. Спадкування (Inheritance): Спадкування дозволяє створювати нові класи на основі існуючих, успадковуючи їх властивості та методи. Це спрощує повторне використання коду та створення ієрархії класів, де більш конкретні класи можуть успадковувати властивості та методи від більш загальних класів. Успадкування дозволяє створювати абстракції та загальні шаблони для об'єктів. Поліморфізм (Polymorphism): Поліморфізм включає можливість об'єктів реагувати на однакові методи по-різному, в залежності від їхнього типу або класу. Це дозволяє створювати загальні інтерфейси та використовувати їх для обробки об'єктів різних типів. Поліморфізм підвищує гнучкість та розширюваність коду. Абстракція (Abstraction): Абстракція включає в себе визначення загальних характеристик об'єкта і ігнорування конкретних деталей. Вона дозволяє створювати моделі об'єктів, які представляють лише важливу інформацію та функції. Абстракція допомагає спростити складність системи та зосередитися на головних аспектах.",
  },
  {
    question: "Що таке this?",
    answer:
      "Це посилання на контекст виклику функції. Контекстом є об'єкт, який в цей момент виконує або викликає функцію. Для стрілочної функції — це об'єкт у якому вона створена, а у звичайній функції — яким вона викликана. Контекстом може бути: 1 - this в об'єкті — вказує на сам об'єкт 2 - this в класі — вказує на екземпляр класу 3 - глобальним контекстом є window (або undefined в режимі use strict)",
  },
  {
    question: "Як можна змінити контекст виклику функції?",
    answer:
      "Є 3 методи: call, apply, bind. call та apply викликають функцію із заданим контекстом. bind повертає нову функцію із вже назавжди прив'язаним контекстом. foo.call(obj, arg1, arg2, ...), foo.apply(obj, [arg1, arg2, ...]) ",
  },
  {
    question: "Чи можна змінити контекст функції, яку повернув метод bind?",
    answer: "Ні, bind прив'язує контекст назавжди.",
  },
  {
    question: "Чи можна змінити контекст стрілкової функції?",
    answer: "Не можна, так як в стрілочної функції немає this.",
  },
  {
    question: "Що таке прототип обєкту?",
    answer: "Прототип - це резервне сховище властивостей і методів об'єкта",
  },
  {
    question: "Як працює прототипне наслідування в JS?",
    answer:
      "В основі прототипного наслідування лежить концепція прототипів, яка дозволяє об'єктам успадковувати властивості та методи від інших об'єктів, що є їхніми прототипами. Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj",
  },
  {
    question: "Як створити обєкт в якому не буде прототипу?",
    answer:
      "Можна створити об'єкт без прямого прототипу, вказавши його прототипом null. Це означає, що ваш об'єкт не успадковуватиме жодних властивостей або методів від жодного іншого об'єкта. Object.create(null)",
  },
  {
    question:
      "Як перевірити, чи являється властивість обєкта його особистою властивістю або це властивість прототипу?",
    answer:
      "Метод obj.hasOwnProperty(prop), який повертає true, якщо властивість prop належить об'єкту obj, а не його прототипу, інакше - false",
  },
  {
    question:
      "Чи можна заборонити змінювати властивість прототипу? Як це зробити?",
    answer:
      "Метод Object.freeze() робить об'єкт та його прототип незмінними. Це означає, що ніякі властивості об'єкта, включаючи прототип, не можна буде змінити. Метод Object.seal() не тільки блокує додавання нових властивостей, але також робить існуючі властивості об'єкта нещатливими. Це також застосовується до прототипу.",
  },
  {
    question: "Чим відрізняється функція конструктор і клас?",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];
export default dataJS;
