"use strict";

console.group(
  "Не использлвать методы перебора массивов forEach, filter, map, some, every"
);

const numbers = [21, 5, 7, 8, 0, 16, 0, 35, 777];

// Удалили последний элемент массива

numbers.pop();

//Добавили по элементу в начало и конец массива

numbers.push(77);

numbers.unshift(3);

//Размер массива

console.log(numbers.length);

//Вывести элементы с четным индексом

const evenIndex = [];

/**
 * Function returns the elements of an array with an even index
 * @param {Number} index
 * @returns {Number} returns the elements of an array with an even index
 */

function oddIndex(index) {
  for (let i = 0; i < index.length; i++) {
    if (i % 2 === 0) evenIndex.push(index[i]);
  }
  return evenIndex;
}

console.log(oddIndex(numbers));

//Вывести только четные элементы

const evens = [];

/**
 * Function returns only the odd elements of the array.
 * @param {Number} arr
 * @returns return only even elements
 */

function oddNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evens.push(arr[i]);
  }
  return evens;
}

console.log(oddNumber(numbers));

//Вывести индексы нулевых элементов

const indexNullNumbers = [];

/**
 * Function outputs the indexes of zero elements
 * @param {Number} arr
 * @returns {Number} return indexes zero elements
 */

function numberOfZeroElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) indexNullNumbers.push(i);
  }
  return indexNullNumbers;
}

console.log(numberOfZeroElements(numbers));

//Вывести количество нулевых элементов

/**
 * Function displays the number of zero elements in the array
 * @param {Number} arr
 * @returns return the number of zero elements in an array
 */

function zeroNumber(arr) {
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zero++;
  }
  return zero;
}

console.log(zeroNumber(numbers));

console.groupEnd();

console.group("Mетоды перебора массивов forEach, filter, map, some, every");

//Получить новый массив из заданного, который будет содержать только ненулевые числа

const arr1 = [-1, 5, 0, 9, -10];
const nonZeroNumbers = function (item) {
  return item !== 0;
};

console.log(arr1.filter(nonZeroNumbers));

//Получить новый массив из заданного, который будет содержать все элементы исходного, возведенные в квадрат

const squaring = function (item) {
  return item ** 2;
};

console.log(arr1.map(squaring));

//Проверить являются ли все элементы массива четными числами

const evenNumber = function (item) {
  return item % 2 === 0;
};

console.log(arr1.every(evenNumber));

//Проверить являются ли все элементы массива простыми числами

const primeNumber = function (item) {
  for (let i = 2; i < item / 2; i++) {
    if (item % i === 0) return false;
  }
  return item > 1;
};

console.log(arr1.every(primeNumber));

//Проверить если в массиве хоть один отрицательный элемент

const negativeNumber = function (item) {
  return item < 0;
};

console.log(arr1.some(negativeNumber));

//Вывести элементы массива, возведенные в куб

arr1.forEach((item) => {
  console.log(Math.pow(item, 3));
});

console.groupEnd();
