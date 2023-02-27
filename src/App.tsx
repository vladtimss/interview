import { useEffect } from "react";
import "./styles.css";
// import Wrap from "./wrap/wrap";

export default function App() {
  useEffect(() => {}, []);

  // return (
  //   <div>
  //     <Wrap />
  //   </div>
  // );

  return <div></div>;
}

/**
 * https://jsonplaceholder.typicode.com/posts?_limit=5
 *
 * 1) Типизировать сущность Post
 * 2) Получить 5 постов и отобразить пользователю названия постов c 
 * временной задержкой в 1,5 сек
 * 3) Написать свою реализацию Array.prototype.reduce, 
 * вида currentReduce(array, callback, initialValue), 
 * которую использовать для подсчета
 *    общего кол-ва строк во всех body у пяти полученных постов.
 *    Отобразить пользавателю поверх всех постов полученный результат от reduce
 * 4) Написать функцию RLE, через которую прогнать 
 * title у всех постов - также вывести результаты пользователю
 *
 *    Дана строка, состоящая из букв A-Z:
 *    "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
 *    Нужно написать функцию rle, которая на выходе даст строку вида:
 *    "A4B3C2XYZD4E3F3A6B28"
 *    И сгенерирует любую ошибку, если на вход пришла невалидная строка.
 *    Пояснения:
 *    Если символ встречается 1 раз, он остается без изменений
 *    Если символ повторяется более 1 раза, к нему добавляется 
 * количество повторений
 * 
 * fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
 */
