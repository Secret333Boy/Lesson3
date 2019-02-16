 var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repellendus eveniet omnis consequatur sed quae tempora ratione maiores ea itaque delectus rem neque laudantium, reprehenderit, aspernatur nihil id quod? Tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error eaque neque laborum consectetur impedit quas aspernatur quo harum sequi accusantium voluptatum ex molestias. Minus fugit ut hic quisquam accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error eaque neque laborum consectetur impedit quas aspernatur quo harum sequi accusantium voluptatum ex molestias. Minus fugit ut hic quisquam accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error eaque neque laborum consectetur impedit quas aspernatur quo harum sequi accusantium voluptatum ex molestias. Minus fugit ut hic quisquam accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error eaque neque laborum consectetur impedit quas aspernatur quo harum sequi accusantium voluptatum ex molestias. Minus fugit ut hic quisquam accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error eaque neque laborum consectetur impedit quas aspernatur quo harum sequi accusantium voluptatum ex molestias. Minus fugit ut hic quisquam accusamus!";

// var count = 0, searchString = "em", lowerString = string.toLowerCase(), indexes = [];
// for (var i = 0; i < lowerString.length; i++) {
// 	if (`${lowerString[i]}${lowerString[i+1]}` == searchString) {
// 		count++;
// 		indexes.push(lowerString.indexOf("em", i));
// 	}
// }
// console.log(count);
// console.log(indexes);


var str1, str2, str3, length, str_length;
length = string.length;
str_length = length/3;
str1 = string.substr(0, str_length);
str2 = string.substring(str_length, str_length*2);
str3 = string.substring(str_length*2, length);
console.log(`${str1.length}\n\n${str2.length}\n\n${str3.length}`);