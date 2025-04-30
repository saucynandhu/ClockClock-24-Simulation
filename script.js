const digits = [
    { 0: [ { hour: 6, minute: 15 }, { hour: 9, minute: 30 }, { hour: 6, minute: 0 }, { hour: 0, minute: 30 }, { hour: 3, minute: 0 }, { hour: 0, minute: 45 } ] },
    { 1: [ { hour: 7.5, minute: 37.5 }, { hour: 6, minute: 30 }, { hour: 7.5, minute: 37.5 }, { hour: 6, minute: 0 }, { hour: 7.5, minute: 37.5 }, { hour: 0, minute: 0 } ] },
    { 2: [ { hour: 3, minute: 15 }, { hour: 9, minute: 30 }, { hour: 6, minute: 15 }, { hour: 0, minute: 45 }, { hour: 0, minute: 15 }, { hour: 9, minute: 45 } ] },
    { 3: [ { hour: 3, minute: 15 }, { hour: 9, minute: 30 }, { hour: 3, minute: 15 }, { hour: 9, minute: 0 }, { hour: 3, minute: 15 }, { hour: 9, minute: 0 } ] },
    { 4: [ { hour: 6, minute: 30 }, { hour: 6, minute: 30 }, { hour: 0, minute: 15 }, { hour: 6, minute: 0 }, { hour: 7.5, minute: 37.5 }, { hour: 0, minute: 0 } ] },
    { 5: [ { hour: 6, minute: 15 }, { hour: 9, minute: 45 }, { hour: 0, minute: 15 }, { hour: 6, minute: 45 }, { hour: 3, minute: 15 }, { hour: 0, minute: 45 } ] },
    { 6: [ { hour: 6, minute: 15 }, { hour: 9, minute: 45 }, { hour: 6, minute: 0 }, { hour: 6, minute: 45 }, { hour: 0, minute: 15 }, { hour: 0, minute: 45 } ] },
    { 7: [ { hour: 3, minute: 15 }, { hour: 6, minute: 45 }, { hour: 7.5, minute: 37.5 }, { hour: 6, minute: 0 }, { hour: 7.5, minute: 37.5 }, { hour: 0, minute: 0 } ] },
    { 8: [ { hour: 6, minute: 15 }, { hour: 6, minute: 45 }, { hour: 0, minute: 15 }, { hour: 0, minute: 45 }, { hour: 0, minute: 15 }, { hour: 0, minute: 45 } ] },
    { 9: [ { hour: 6, minute: 15 }, { hour: 6, minute: 45 }, { hour: 3, minute: 0 }, { hour: 6, minute: 0 }, { hour: 3, minute: 15 }, { hour: 0, minute: 45 } ] }
  ];
  
  function display_digit(position, nmbr) {
    const digitConfig = digits[nmbr][nmbr];
    digitConfig.forEach((hand, index) => {
      const hourHand = document.getElementById(`h${position}${index + 1}`);
      const minuteHand = document.getElementById(`m${position}${index + 1}`);
      hourHand.style.transform = `rotate(${hand.hour * 30}deg)`;
      minuteHand.style.transform = `rotate(${hand.minute * 6}deg)`;
    });
  }
  
  setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    display_digit(1, hours[0]);
    display_digit(2, hours[1]);
    display_digit(3, minutes[0]);
    display_digit(4, minutes[1]);
  }, 1000);
  
  // Dark mode toggle
  document.querySelector('.fa-moon-o').addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  });