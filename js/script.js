/*1. Найти Кол-во em не зависимо от регистра и их индекса. Кол-во em должно не зависеть от регистра
	1а. Индексы сохранить в массив

2. Разбить строку на 3 равных строки и вывести их в консоль.
Если на 3 не делится, то пусть больший остаток заберет в себя последняя строка


3. Очистить текст от сдвоенных/строенных и так далее пробелов

4. Определить сколько слов в тексте. Слово это набор букв/символов разделенных ОДНИМ пробелом. 
	3а. Сказать сколько слов в тексте начинаются с буквы L
	3б. напечатать самое длинное слово
	3в. Поменять первую и последнюю букву в слове

4. Дана строка содержащая и цифры и буквы. 
	4а. Удалить все цифры
	4б. Удалить все буквы

5. Удалить из строки все сдвоенные буквы в слове*/

/*1*/
// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var count = 0, searchString = "em", lowerString = string.toLowerCase(), indexes = [];
// for (var i = 0; i < lowerString.length; i++) {
// 	if (`${lowerString[i]}${lowerString[i+1]}` == searchString) {
// 		count++;
// 		indexes.push(lowerString.indexOf("em", i));
// 	}
// }
// console.log(count);
// console.log(indexes);

/*2*/
// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var str1, str2, str3, length = string.length, str_length, ost;
// if (length%3 == 0) {
// 	str_length = length/3;
// 	ost = 0;	
// }
// else{
// 	str_length = length/3;
// 	ost = length % 3;
// }
// str1 = string.substr(0, str_length);
// str2 = string.substring(str1.length, str1.length + str_length);
// str3 = string.substring(str2.length, str2.length + str_length + ost);
// console.log(`${str1.length}\n\n${str2.length}\n\n${str3.length}`);

/*3*/
// var string = "Lorem ipsum dolor sit amet,  consectetur   adipisicing  elit. Veniam  quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var count_replace = 0;
// for (var i = 0; i < string.length; i++) {
// 	if (string[i] == " " && string[i+1] == " ") {
// 		count_replace++;
// 		string[i] = ""; //В этом месте не присваивается значение символу
// 	}
// }
// console.log(`${count_replace} symbol(s) were changed\n\n`, string);

/*4*/
// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var count_words = 0, words, L = 0, longest = "";
// words = string.split(" ");
// for (var i = 0; i < words.length; i++) {
// 	if (words[i][0] == "L") {
// 		L++;
// 	}
// 	if (words[i].length > longest.length) {
// 		longest = words[i];
// 	}
// }
// var word = "Lorem", first, last, result;
// first = word[0];
// last = word[word.length-1];
// result = `${last}${word[1]}${word[2]}${word[3]}${first}`
// console.log(`Всего ${words.length} слов(o)\n`, `${L} слов(а) начинается с буквы L\n`,`Самое длинное слово: ${longest}\n`, `Слово ${word} изменено на ${result}`);


/*5*/