/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (let i = 0; start <= end; i++) {
        if (start % 2 == 0) {
            sum += start;
            start += 1;
        } else {
            start += 1;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;

    while (true) {
        a = a / 2;
        if (a < 0.1) {
            count += 1;
            break;
        } else {
            count += 1;
        }
    }
    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let messageArray = message.split('');
    let length = 0;

    do {
        length += 3;
        messageArray[length - 1] = '_';
    } while (length <= messageArray.length - 3);

    message = messageArray.join('');
    return message;
}
