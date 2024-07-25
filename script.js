document.addEventListener('DOMContentLoaded', function() {
  const labels = document.querySelector('.current-year')
  labels.textContent = new Date().getFullYear()

  const images = document.querySelector('.thing-images')
  for (let i = 0; i < 6; i++) {
    let child = document.createElement('img')
    child.setAttribute('src', `/images/photo_${i + 1}_2024-07-25_20-01-53.jpg`)
    child.setAttribute('width', '200px')
    images.appendChild(child)
  }
})