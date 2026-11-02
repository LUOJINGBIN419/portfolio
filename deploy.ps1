$ErrorActionPreference = "Continue"
$tok = $env:GH_TOKEN
$git = "C:\Users\renep\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe"
$root = "c:\Users\renep\CodeBuddy\20261102105545\portfolio"
$h = @{
  Authorization = "token $tok"
  Accept        = "application/vnd.github+json"
  "User-Agent"  = "ps-deploy"
}

$owner = (Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $h).login
"USER: $owner"

# 建仓（已存在则复用）
try {
  $body = @{ name = "portfolio"; description = "LUO JINGBIN Portfolio"; private = $false; auto_init = $false } | ConvertTo-Json
  $null = Invoke-RestMethod -Method Post -Uri "https://api.github.com/user/repos" -Headers $h -Body $body
  "REPO_CREATED"
} catch {
  if ($_.Exception.Message -match "already exists") { "REPO_EXISTS" } else { "REPO_FAIL: " + $_.Exception.Message }
}

# 推送
Set-Location $root
& $git remote remove origin 2>&1 | Out-Null
& $git remote add origin "https://x-access-token:$tok@github.com/$owner/portfolio.git" 2>&1 | Out-Null
& $git branch -M main 2>&1 | Out-Null
"PUSH_START"
& $git push -u origin main 2>&1 | Select-Object -Last 6
"PUSH_EXIT: $LASTEXITCODE"

# 开启 Pages（GitHub Actions 源）
try {
  $p = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/portfolio/pages" -Headers $h -Body (@{ build_type = "workflow" } | ConvertTo-Json)
  "PAGES: " + $p.status + " | " + $p.html_url
} catch { "PAGES_FAIL: " + $_.Exception.Message }

# 推送完成后移除含令牌的远程地址，改用干净地址
& $git remote set-url origin "https://github.com/$owner/portfolio.git" 2>&1 | Out-Null
"REMOTE_CLEANED"
"ALLDONE"
