# Tạo thư mục nếu chưa tồn tại
$directories = @(
    "public/assets/images/posts"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Tải xuống hình ảnh Fansipan
$imageUrls = @{
    "public/assets/images/posts/fansipan.jpg" = "https://images.unsplash.com/photo-1694083151781-946334842033?q=80&w=1000&auto=format&fit=crop"
    "public/assets/images/posts/fansipan-thumb.jpg" = "https://images.unsplash.com/photo-1694083151781-946334842033?q=80&w=500&auto=format&fit=crop"
}

foreach ($path in $imageUrls.Keys) {
    $url = $imageUrls[$path]
    Write-Host "Downloading $url to $path"
    Invoke-WebRequest -Uri $url -OutFile $path
}

Write-Host "Fansipan images downloaded successfully!"
