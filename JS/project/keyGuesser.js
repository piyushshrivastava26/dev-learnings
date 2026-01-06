const insertedKey = document.querySelector('#insert')

window.addEventListener('keydown', function (e) {
  insertedKey.innerHTML = `
    <div id = "keyData">
      <table border = 1>
        <tr>
          <th>key</th>
          <th>keyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === "" ? "space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `
})
