let name = 'Alex'.toUpperCase().trim()
let money = 10000
let account = 7777

let answer = prompt('Как вас зовут ?').toUpperCase().trim()

if (answer === name) {
   let parol = +prompt('Номер счёта ?')

   if (parol === account) {
      let cash = +prompt('Сколько обналичить ?')

      if (cash <= money) {
         alert('Вы сняли ' + cash + '$')
         alert('Осталось ' + (money - cash) + '$')
      } else {
         alert('У тебя недостаточно средств , оформи кредит c 24% годовых !')
      }
   } else {
      alert('Не мучай себя  ')
   }
} else {
   alert('Пользователь не найден, ждём вас снова ! ')
}



let name_Two = prompt('Как вас зовут ?').toLowerCase().trim()

if (name_Two[0] === 'a') {
   let age = prompt('Сколько вам лет ?')

   if (age >= 20 && age <= 40) {
      let mnm = +prompt('Сколько у вас денег ? ')

      if (mnm > 100) {
         let p = prompt('Вас сколько ?')

         if (p <= 8) {
            alert('Добро пожаловать !')
         } else {
            alert('Вас много')
         }
      } else {
         alert('Мало денег ')
      }
   } else {
      alert('Твой возраст не подхоит !')
   }

} else {
   alert('Твое имя не подходит !')
}

