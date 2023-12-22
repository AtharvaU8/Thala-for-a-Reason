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
      return /^\d+$/.test(value) || /^\d*\.\d+$/.test(value);
    }
    function checkWord() {
      const input = document.getElementById('wordInput').value.replace(/\s/g, '');
      const resultDiv = document.getElementById('result');
      const myVideo = document.getElementById('myVideo');
      const relatedVideo = document.getElementById('img');
      const copyLinkBox = document.getElementById('copyLinkBox');
      const shareLink = document.getElementById('shareLink');
      
      sound1.pause();
      sound1.currentTime = 0;
      
      if (input.length === 7 || input === '7' || (isNumeric(input) && parseFloat(input) === 7) || input === '07' || input === '16' || input === '25' || input === '34' || input === '43' || input === '52' || input === '61' || input === '70') {
        resultDiv.style.display = 'block';
        resultDiv.textContent = input.split('').join('+') + "= 7 Thala For a Reason";
        myVideo.style.display = 'block';
        myVideo.play();
        relatedVideo.style.display = 'none';
        copyLinkBox.style.display = 'inline-block';
        shareLink.href = `thala.html?word=${input}`;
        shareLink.textContent = shareLink.href;
      } 
      else if (input.toLowerCase() === 'thala' || input.toLowerCase() === 'msd' || input.toLowerCase() === 'ms dhoni' || input.toLowerCase() === 'dhoni' || input.toLowerCase() === 'msd7' || input.toLowerCase() === 'seven' ){
        resultDiv.style.display = 'block';
        resultDiv.textContent = input + " Thala For a Reason";
        myVideo.style.display = 'block';
        myVideo.play();
        relatedVideo.style.display = 'none';
        copyLinkBox.style.display = 'inline-block';
        shareLink.href = `thala.html?word=${input}`;
        shareLink.textContent = shareLink.href;
      }
      else {
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