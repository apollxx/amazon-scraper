document.addEventListener('DOMContentLoaded', () => {
    const keywordInput = document.getElementById('keywordInput');
    const scrapeButton = document.getElementById('scrapeButton');
    const resultsContainer = document.getElementById('results');
  
    scrapeButton.addEventListener('click', async () => {
      const keyword = keywordInput.value.trim();
      if (!keyword) {
        alert('Please enter a keyword');
        return;
      }
  
      try {
        const response = await fetch("http://localhost:3000/api/scrape?keyword=" + keyword);
        const data = await response.json();
        displayResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data');
      }
    });
  
    function displayResults(products) {
      resultsContainer.innerHTML = '';
      products.forEach(product => {
        const div = document.createElement('div');
        div.className = "product-box"
        div.innerHTML = `
          <h3>${product.title}</h3>
          <p>Rating: ${product.rating}</p>
          <p>Reviews: ${product.reviews}</p>
          <img src="${product.image}" alt="${product.title}">
        `;
        resultsContainer.appendChild(div);
      });
    }
  });