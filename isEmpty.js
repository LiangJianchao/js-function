//判断字符串是否为空
function isEmpty(obj) {
    if (null != obj) {
      if ('undefined' == obj) {
        return true
      } else if ('null' == obj) {
        return true
      } else if (Array.isArray(obj) && obj.length === 0) {
        return true
      } else if ('' == (obj + '').trim()) {
        return true
        // } else if (isNaN(obj)) {
        //   return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
