const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
  }

/* Tests */
delay(1000).then(value => console.log(`Done with ${value}`));
