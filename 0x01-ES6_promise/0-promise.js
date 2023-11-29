export default function getResponseFromAPI() {
  const promise = new Promise(((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('It worked!');
      } else {
        reject(Error('It broke'));
      }
    }, 1000);
  }));

  return promise;
}
