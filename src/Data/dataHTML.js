const dataHTML = [
  {
    question:
      "Що таке DOCTYPE і для чого він потрібен? Що буде, якщо його не вказати?",
    answer:
      "DOCTYPE <!DOCTYPE> - повинен бути першим елементом в html-документі, йде перед тегом <html>. В першу чергу це декларація, а не тег. Тобто інструкція для веб-браузера про те, як інтерпритувати поточну HTML сторінку. Оскільки HTML існує в декількох версіях, крім того, є XHTML (EXtensible HyperText Markup Language, розширена мова розмітки гіпертексту), схожа на HTML, але розрізняється з ним по синтаксису. І щоб браузер правильно інтерпретував вашу сторінку необхідно завжди вказувати, тому що в старіших версіях HTML може перейти в режим сумісності, де він намагатиметься інтерпретувати HTML на основі певних стандартів, які можуть варіюватися залежно від браузера та його версії. Це може призвести до непередбачуваного відображення вашого веб-документа, оскільки різні браузери можуть інтерпретувати код по-різному.. Та якщо не вказати <!DOCTYPE> в HTML5 то браузер все одно буде інтерпретувати документ, в такому випадку, браузер буде використовувати стандартні правила та режим відображеня для HTML5. Але бажано завжди вказувати <!DOCTYPE>. ",
  },
  { question: "Для чого потрібні мета-теги?", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
];

export default dataHTML;
