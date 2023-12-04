export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  } else {
    let result = '';
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result += `${value.slice(startString.length)}-`;
      }
    });
    return result.slice(0, -1);
  }
}