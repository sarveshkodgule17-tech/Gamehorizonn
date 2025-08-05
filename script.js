fetch("http://localhost:5000/api/message")
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.message;
  });
