function customEncode(input) {
      const encodingMap = {
        'a': 'x',
        'b': 'y',
        'c': 'z',
        'd': 'a',
        'e': 'b',
        'f': 'c',
        'g': 'd',
        'h': 'e',
        'i': 'f',
        'j': 'g',
        'k': 'h',
        'l': 'i',
        'm': 'j',
        'n': 'k',
        'o': 'l',
        'p': 'm',
        'q': 'n',
        'r': 'o',
        's': 'p',
        't': 'q',
        'u': 'r',
        'v': 's',
        'w': 't',
        'x': 'u',
        'y': 'v',
        'z': 'w',
        ' ': '',
      };
     return input.split('').map(char => encodingMap[char] || char).join('');
}


var sound1 = new Audio('thala.mp3');
  function showCheckButton() {
      const relatedVideo = document.getElementById('img');
      const resultDiv = document.getElementById('result');
      const myVideo = document.getElementById('myVideo');
      const wordInput = document.getElementById('wordInput');
      const checkButton = document.getElementById('checkButton');
      const copyLinkBox = document.getElementById('copyLinkBox');
      checkButton.style.display = wordInput.value.length > 0 ? 'inline-block' : 'none';
      copyLinkBox.style.display = 'none';
      resultDiv.style.display = 'none';
      myVideo.style.display = 'none';
      relatedVideo.style.display = 'none';
      if (wordInput.value.length === 0) {
        myVideo.pause();
        sound1.pause();
        sound1.currentTime = 0; // Reset audio to the beginning
      }
  }
  function isNumeric(value) {
      return /^-?\d*\.?\d+$/.test(value);
  }
  function encodeShareLink(word) {
      const encodedWord = customEncode(word);
      return encodeURIComponent(encodedWord);
  }
  function customDecode(input) {
      const decodingMap = Object.fromEntries(Object.entries(encodingMap).map(([key, value]) => [value, key]));
      return input.split('').map(char => decodingMap[char] || char).join('');
  }
  function evaluateExpression(expression) {
    try {
      // Use eval to safely evaluate mathematical expressions
      return eval(expression);
    } catch (error) {
      console.error('Error during expression evaluation:', error);
      return null;
    }
  }

  function checkAddition(input) {
    const numbers = input.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
      return sum === 7;
    }
    return false;
  }

  function checkSubtraction(input) {
    const numbers = input.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const difference = numbers.reduce((acc, num) => acc - parseFloat(num), 0);
      return difference === 7;
    }
    return false;
  }

  function checkReminderSeven(input) {
    const numbers = input.match(/-?\d+/g);
    if (numbers) {
      return numbers.some(num => parseInt(num) % 7 === 0);
    }
    return false;
  }
    function checkWord() {
      const tinput = document.getElementById('wordInput').value;
      const sanitizedInput = tinput.replace(/[+\-*/]/g, '').replace(/\s/g, ''); // Remove arithmetic operators and spaces
      const input = sanitizedInput.replace(/^\s+|\s+$/g, '');
      const resultDiv = document.getElementById('result');
      const myVideo = document.getElementById('myVideo');
      const relatedVideo = document.getElementById('img');
      const copyLinkBox = document.getElementById('copyLinkBox');
      const shareLink = document.getElementById('shareLink');
      
      sound1.pause();
      sound1.currentTime = 0;
      
      if (input.length === 7 || input === '7' || (isNumeric(input) && parseFloat(input) === 7) || input === '07' || input === '16' || input === '25' || input === '34' || input === '43' || input === '52' || input === '61' || input === '70' ) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = input.split('').join('+') + "= 7 Thala For a Reason";
        myVideo.style.display = 'block';
        myVideo.play();
        relatedVideo.style.display = 'none';
        copyLinkBox.style.display = 'inline-block';
        shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
        shareLink.textContent = shareLink.href;
      }else {
        const evaluatedResult = evaluateExpression(input);
        if (evaluatedResult === 7 ) {
          resultDiv.style.display = 'block';
          resultDiv.textContent = input.split('').join('+') + "= 7 Thala For a Reason";
          myVideo.style.display = 'block';
          myVideo.play();
          relatedVideo.style.display = 'none';
          copyLinkBox.style.display = 'inline-block';
          shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
          shareLink.textContent = shareLink.href;
        }
        else if (checkAddition(input)){
          resultDiv.style.display = 'block';
          resultDiv.textContent = input.split('').join('+') + "= 7 Thala For a Reason";
          myVideo.style.display = 'block';
          myVideo.play();
          relatedVideo.style.display = 'none';
          copyLinkBox.style.display = 'inline-block';
          shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
          shareLink.textContent = shareLink.href;
        }
        else if (checkSubtraction(input)){
          resultDiv.style.display = 'block';
          resultDiv.textContent = input.split('').join('-') + "= 7 Thala For a Reason";
          myVideo.style.display = 'block';
          myVideo.play();
          relatedVideo.style.display = 'none';
          copyLinkBox.style.display = 'inline-block';
          shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
          shareLink.textContent = shareLink.href;
        }
        else if (checkReminderSeven(input)){
          resultDiv.style.display = 'block';
          resultDiv.textContent = input.split('').join('%') + "= 7 Thala For a Reason";
          myVideo.style.display = 'block';
          myVideo.play();
          relatedVideo.style.display = 'none';
          copyLinkBox.style.display = 'inline-block';
          shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
          shareLink.textContent = shareLink.href;
        }
        else if (input.toLowerCase() === 'thala' || input.toLowerCase() === 'msd' || input.toLowerCase() === 'ms dhoni' || input.toLowerCase() === 'dhoni' || input.toLowerCase() === 'msd7' || input.toLowerCase() === 'seven' ){
          resultDiv.style.display = 'block';
          resultDiv.textContent = input + " Thala For a Reason";
          myVideo.style.display = 'block';
          myVideo.play();
          relatedVideo.style.display = 'none';
          copyLinkBox.style.display = 'inline-block';
          shareLink.href = `thala.html?word=${encodeShareLink(input)}`;
          shareLink.textContent = shareLink.href;
        }else {
          sound1.play()
          resultDiv.style.display = 'block';
          const relatedMessage = `${input.split('').join('+')} ≠ 7 Thala is not a Reason`;
          resultDiv.textContent = relatedMessage;
          myVideo.style.display = 'none';
          relatedVideo.style.display = 'block';
          copyLinkBox.style.display = 'none';
          shareLink.textContent = '';
        }
      }
    }
  
    function copyToClipboard() {
      const shareLink = document.getElementById('shareLink');
      const textarea = document.createElement('textarea');
      textarea.value = shareLink.href;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copyButton.textContent = 'Copied!';
      setTimeout(function () {
        copyButton.textContent = 'Copy Link';
      }, 3000);
    }