const API = 'http://localhost:3000';
document.getElementById('login').addEventListener('click', async () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (!username) return alert('Enter username');
  const res = await fetch(API + '/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
  const j = await res.json();

  if (res.ok) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('success-view').style.display = 'block';
    document.querySelector('.header').style.display = 'none';
  } else {
    document.getElementById('result').innerText = j.message || JSON.stringify(j);
    document.getElementById('result').className = 'message error';
  }
});
