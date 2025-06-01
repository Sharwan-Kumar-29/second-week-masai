function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(duration);
  }, duration);
}

timer(2000, function(duration) {
  console.log(`Timer of ${duration} ms finished`);
});
