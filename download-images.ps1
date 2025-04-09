# Tạo thư mục nếu chưa tồn tại
$directories = @(
    "public/assets/images/posts",
    "public/assets/images/about",
    "public/assets/images/team",
    "public/assets/images/featured",
    "public/assets/images/hero"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Tải xuống hình ảnh cho bài viết
$imageUrls = @{
    "public/assets/images/posts/kyoto.jpg" = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
    "public/assets/images/posts/kyoto-thumb.jpg" = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/posts/ha-giang.jpg" = "https://images.unsplash.com/photo-1570366583862-f91883984fde?q=80&w=1000&auto=format&fit=crop"
    "public/assets/images/posts/ha-giang-thumb.jpg" = "https://images.unsplash.com/photo-1570366583862-f91883984fde?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/posts/bangkok-food.jpg" = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
    "public/assets/images/posts/bangkok-food-thumb.jpg" = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/posts/fansipan.jpg" = "https://images.unsplash.com/photo-1540679388153-cabc47b39439?q=80&w=1000&auto=format&fit=crop"
    "public/assets/images/posts/fansipan-thumb.jpg" = "https://images.unsplash.com/photo-1540679388153-cabc47b39439?q=80&w=500&auto=format&fit=crop"
    
    # Hình ảnh cho trang About
    "public/assets/images/about/about.jpg" = "https://images.unsplash.com/photo-1647283183910-314da6e3616e?q=80&w=1000&auto=format&fit=crop"
    
    # Hình ảnh cho team
    "public/assets/images/team/team1.jpg" = "https://images.unsplash.com/photo-1600670942298-b10325b17dea?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/team/team2.jpg" = "https://images.unsplash.com/photo-1546728151-7124a03bd1db?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/team/team3.jpg" = "https://images.unsplash.com/photo-1591014703304-cd79baa5c695?q=80&w=500&auto=format&fit=crop"
    
    # Hình ảnh cho featured
    "public/assets/images/featured/featured1.jpg" = "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/featured/featured2.jpg" = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=500&auto=format&fit=crop"
    "public/assets/images/featured/featured3.jpg" = "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=500&auto=format&fit=crop"
    
    # Hình ảnh cho hero
    "public/assets/images/hero/hero-bg.jpg" = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
}

foreach ($path in $imageUrls.Keys) {
    $url = $imageUrls[$path]
    Write-Host "Downloading $url to $path"
    Invoke-WebRequest -Uri $url -OutFile $path
}

Write-Host "All images downloaded successfully!"
