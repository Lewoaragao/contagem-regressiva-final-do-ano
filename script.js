function countdown() {
    let now = new Date();
    let year = now.getFullYear();
    let end = new Date(year, 11, 31, 23, 59, 59); // Último dia do ano atual
    let timeLeft = end - now;
  
    if (timeLeft <= 0) {
      displayNewYearMessage(year);
      return;
    }
  
    let months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById('months').textContent = padZero(months);
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
  
    document.getElementById('lastDayYear').textContent = end.toLocaleDateString('pt-BR');
  }
  
  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  function displayNewYearMessage(year) {
    let countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'none';
  
    let newYearMessageElement = document.getElementById('newYearMessage');
    newYearMessageElement.textContent = 'Feliz Ano Novo ' + year + '!';
    newYearMessageElement.style.display = 'block';
  
    setTimeout(function() {
      countdownElement.style.display = 'block';
      newYearMessageElement.style.display = 'none';
    }, 60000); // Voltar ao contador após 1 minuto (60000 milissegundos)
  }
  
  setInterval(countdown, 1000);
  