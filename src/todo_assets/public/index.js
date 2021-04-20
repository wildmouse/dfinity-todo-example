import todo from 'ic:canisters/todo';

todo.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
