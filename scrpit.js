const users = [
  { username: 'admin', password: '1234' },  // Usuario ejemplo
];

const products = [
  { id: 1, name: 'Producto A', price: 100 },
  { id: 2, name: 'Producto B', price: 150 },
  { id: 3, name: 'Producto C', price: 200 },
];

// Mostrar productos disponibles en la pantalla principal
function loadProducts() {
  const productList = document.getElementById('productList');
  const productSelect = document.getElementById('product');
  
  products.forEach(product => {
    const productItem = document.createElement('li');
    productItem.innerHTML = `${product.name} - $${product.price}`;
    productList.appendChild(productItem);

    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Login de usuario
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Ocultar pantalla de login y mostrar pantalla principal
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainScreen').style.display = 'block';
    loadProducts();
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

// Registrar venta
document.getElementById('saleForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const productId = parseInt(document.getElementById('product').value);
  const quantity = document.getElementById('quantity').value;
  const price = products.find(p => p.id === productId).price;
  const paymentMethod = document.getElementById('paymentMethod').value;

  const total = quantity * price;

  const saleItem = document.createElement('li');
  saleItem.innerHTML = `
    Producto: ${products.find(p => p.id === productId).name} <br>
    Cantidad: ${quantity} <br>
    Precio Unitario: $${price} <br>
    Método de Pago: ${paymentMethod} <br>
    <strong>Total: $${total.toFixed(2)}</strong>
  `;

  document.getElementById('salesList').appendChild(saleItem);
  document.getElementById('saleForm').reset();
});

// Cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', function() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'block';
});
