const resultDiv = document.getElementById('result');

async function getData() {
  const key = document.getElementById('key').value;
  const res = await fetch(`/api/data/${key}`);
  const data = await res.json();
  resultDiv.textContent = JSON.stringify(data, null, 2);
}

async function postData() {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;

  const res = await fetch(`/api/data/${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value })
  });

  const data = await res.json();
  resultDiv.textContent = JSON.stringify(data, null, 2);
}

async function showCache() {
  const res = await fetch('/api/cache');
  const data = await res.json();
  resultDiv.textContent = JSON.stringify(data, null, 2);
}
