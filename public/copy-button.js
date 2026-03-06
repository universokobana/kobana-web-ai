document.getElementById('copyButton').addEventListener('click', async function () {
  var preText = document.querySelector('pre').textContent;
  var button = this;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(preText);
      button.textContent = button.dataset.copied;
    } else {
      var textArea = document.createElement('textarea');
      textArea.value = preText;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        button.textContent = button.dataset.copied;
      } catch (err) {
        button.textContent = button.dataset.failed;
      }

      textArea.remove();
    }
  } catch (err) {
    button.textContent = button.dataset.failed;
  }

  setTimeout(function () {
    button.textContent = button.dataset.label;
  }, 2000);
});
