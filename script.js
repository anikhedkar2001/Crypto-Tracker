document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const coinType = document.getElementById('xyz').value;
    
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinType}&vs_currencies=inr`)
        .then(response => {
            const price = response.data[coinType].inr;
            const table = document.getElementById('tableResult');
            table.innerHTML = `
                <tr>
                    <th>Coin Type</th>
                    <th>Price (INR)</th>
                </tr>
                <tr>
                    <td>${coinType.charAt(0).toUpperCase() + coinType.slice(1)}</td>
                    <td>₹${price}</td>
                </tr>
            `;
        })
        .catch(error => {
            console.error('Error fetching the price:', error);
            const table = document.getElementById('tableResult');
            table.innerHTML = `
                <tr>
                    <th>Error</th>
                </tr>
                <tr>
                    <td>Failed to fetch the price. Please try again later.</td>
                </tr>
            `;
        });
});
