let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity
}
// state 用来存放公用的数据
