import moment from "moment";
//https://github.com/derekprior/momentjs-rails/blob/main/vendor/assets/javascripts/moment/zh-tw.js

const useMoment = (createdAt) => {
  moment.updateLocale("zh-tw", {
    longDateFormat: {
      LL: "M月D日",
      LLL: "YYYY年M月D日 HH:mm",
    },
  });
  const date = new Date(createdAt);
  const timestamp = date.getTime();
  const fromNow = Number(moment(timestamp).fromNow().replace("hour ago", ""));
  let outcome = moment(timestamp).format("LL");
  if (fromNow < 24) {
    outcome = outcome + "小時";
  }
  return outcome;
};

export default useMoment;
