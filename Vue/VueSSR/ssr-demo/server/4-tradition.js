const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send(`
        <html>
            <div>
                <div id="app">
                    <h1>test</h1>
                    <p class="demo">123test</p>
                </div>
            </body>
        </html> 
    `);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('启动成功');
});
