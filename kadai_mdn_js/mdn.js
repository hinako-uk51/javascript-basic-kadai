const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth() +1,
  date.getDate() ,
];

const japanDate = ( year + '年' + month + '月' + day +'日' );

console.log(japanDate);