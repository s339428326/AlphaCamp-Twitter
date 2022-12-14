import moment from "moment";
//https://github.com/derekprior/momentjs-rails/blob/main/vendor/assets/javascripts/moment/zh-tw.js
//http://momentjs.cn/docs/displaying/fromnow.html

const momentFormat = (createdAt) => {
  moment.updateLocale("zh-tw", {
    longDateFormat: {
      LL: "M月D日",
    },
  });
  const date = new Date(createdAt);
  const currentTime = Date.now();
  const timeDifference = currentTime - date.getTime();

  let outcome = moment(date).format("LL");

  if (timeDifference < 3600000) {
    if (timeDifference < 60000) {
      outcome = "幾秒前";
    } else {
      const minutes = Math.floor(timeDifference / 60000);
      outcome = `${minutes}分鐘前`;
    }
  } else if (timeDifference < 86400000) {
    const hours = Math.floor(timeDifference / 3600000);
    outcome = `${hours}小時前`;
  }
  return outcome;
};

export default momentFormat;
