const dateName = new Date();

const date = () => {
  var year = dateName.getFullYear();
  var month = dateName.getMonth() + 1;
  var day = dateName.getDate();

  console.log (year + "年" + month + "月" + day + "日");
}

date();