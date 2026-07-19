const PRODUCTS = [
  { id: 1, name: "Classic Cotton Tee", price: 29, oldPrice: 39, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", category: "clothing", tag: "Best Seller", desc: "A simple, well-fitting tee made from soft cotton. Available in multiple colors. Pairs well with anything in your closet.", sizes: ["S", "M", "L", "XL"] },
  { id: 2, name: "Wireless Earbuds Pro", price: 79, oldPrice: null, img: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop", category: "electronics", tag: "New", desc: "Clear sound, comfortable fit, and 8-hour battery life. These earbuds handle calls and music without the wire hassle.", sizes: null },
  { id: 3, name: "Minimal Desk Lamp", price: 45, oldPrice: 55, img: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop", category: "home", tag: "Sale", desc: "Clean lines, warm light, and a small footprint. Enough brightness to work by without lighting up the whole room.", sizes: null },
  { id: 4, name: "Leather Watch", price: 120, oldPrice: null, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", category: "accessories", tag: null, desc: "Genuine leather strap, simple face, Japanese movement. The kind of watch you put on and forget about.", sizes: null },
  { id: 5, name: "Linen Button Down", price: 58, oldPrice: null, img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop", category: "clothing", tag: null, desc: "Breathable linen for warm days. Relaxed fit that looks good tucked or untucked.", sizes: ["S", "M", "L", "XL"] },
  { id: 6, name: "Portable Charger 10K", price: 35, oldPrice: 42, img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", category: "electronics", tag: "Sale", desc: "Slim enough for your pocket, powerful enough to charge your phone twice. USB-C and Lightning included.", sizes: null },
  { id: 7, name: "Ceramic Planter Set", price: 32, oldPrice: null, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop", category: "home", tag: null, desc: "Three sizes of matte-finish planters. Drainage holes included. Your plants will thank you.", sizes: null },
  { id: 8, name: "Canvas Tote Bag", price: 24, oldPrice: null, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop", category: "accessories", tag: "Popular", desc: "Sturdy canvas, reinforced handles, inner pocket. Use it for groceries, the beach, or daily carry.", sizes: null },
  { id: 9, name: "Merino Wool Sweater", price: 89, oldPrice: 110, img: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a08?w=400&h=400&fit=crop", category: "clothing", tag: "Sale", desc: "Soft merino wool that regulates temperature. Warm in winter, breathable in spring. Worth the price.", sizes: ["S", "M", "L", "XL"] },
  { id: 10, name: "Bluetooth Speaker Mini", price: 49, oldPrice: null, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", category: "electronics", tag: null, desc: "Surprisingly loud for its size. Water-resistant, 10-hour battery, and pairs in seconds.", sizes: null },
  { id: 11, name: "Scented Candle Set", price: 28, oldPrice: null, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop", category: "home", tag: "Gift Pick", desc: "Three hand-poured candles: cedar, lavender, and vanilla. 30-hour burn time each.", sizes: null },
  { id: 12, name: "Polarized Sunglasses", price: 65, oldPrice: null, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", category: "accessories", tag: null, desc: "Lightweight frames with UV400 protection. Polarized lenses that cut glare without distorting color.", sizes: null },
  { id: 13, name: "Running Sneakers", price: 95, oldPrice: 120, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", category: "clothing", tag: "Sale", desc: "Lightweight, responsive cushioning for everyday runs. Breathable mesh upper keeps your feet cool.", sizes: ["8", "9", "10", "11", "12"] },
  { id: 14, name: "Noise Cancelling Headphones", price: 189, oldPrice: null, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", category: "electronics", tag: "Popular", desc: "Block out the world. 30-hour battery, plush ear cups, and foldable design for travel.", sizes: null },
  { id: 15, name: "Stoneware Mug Set", price: 38, oldPrice: null, img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop", category: "home", tag: null, desc: "Set of 4 handcrafted mugs. Microwave and dishwasher safe. Holds 12oz each.", sizes: null },
  { id: 16, name: "Leather Wallet", price: 48, oldPrice: null, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", category: "accessories", tag: null, desc: "Slim bifold with RFID blocking. Genuine leather that ages beautifully over time.", sizes: null },
  { id: 17, name: "Denim Jacket", price: 78, oldPrice: 98, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop", category: "clothing", tag: "Sale", desc: "Classic trucker fit. Medium wash with a slightly lived-in feel. Works year-round.", sizes: ["S", "M", "L", "XL"] },
  { id: 18, name: "Mechanical Keyboard", price: 110, oldPrice: null, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop", category: "electronics", tag: "New", desc: "Tactile switches, RGB backlit keys, and a solid aluminum frame. USB-C wired connection.", sizes: null },
  { id: 19, name: "Woven Throw Blanket", price: 55, oldPrice: null, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", category: "home", tag: null, desc: "Soft cotton blend throw for the couch or bed. Fringed edges, machine washable.", sizes: null },
  { id: 20, name: "Baseball Cap", price: 28, oldPrice: null, img: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop", category: "accessories", tag: null, desc: "Unstructured six-panel cap with adjustable strap. Soft cotton twill.", sizes: null },
  { id: 21, name: "Slim Fit Chinos", price: 55, oldPrice: null, img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop", category: "clothing", tag: null, desc: "Tailored chinos with a bit of stretch. Comfortable enough for all-day wear.", sizes: ["S", "M", "L", "XL"] },
  { id: 22, name: "USB-C Hub 7-in-1", price: 42, oldPrice: 55, img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop", category: "electronics", tag: "Sale", desc: "HDMI, USB-A x3, SD card, microSD, and USB-C passthrough. Plug and play, no drivers needed.", sizes: null },
  { id: 23, name: "Woven Storage Baskets", price: 36, oldPrice: null, img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop", category: "home", tag: null, desc: "Set of 3 nesting baskets. Handwoven seagrass. Great for shelves, closets, or bathroom storage.", sizes: null },
  { id: 24, name: "Titanium Bracelet", price: 72, oldPrice: null, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", category: "accessories", tag: "New", desc: "Lightweight titanium link bracelet. Scratch-resistant with a polished matte finish.", sizes: null },
  { id: 25, name: "Oversized Hoodie", price: 68, oldPrice: 85, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", category: "clothing", tag: "Sale", desc: "Relaxed oversized fit. French terry cotton, kangaroo pocket, and a cozy fleece interior.", sizes: ["S", "M", "L", "XL"] },
  { id: 26, name: "Webcam 1080p", price: 59, oldPrice: null, img: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop", category: "electronics", tag: null, desc: "1080p at 30fps, built-in mic, auto-focus, and a privacy shutter. Clips onto any monitor.", sizes: null },
  { id: 27, name: "Tabletop Fire Pit", price: 44, oldPrice: null, img: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?w=400&h=400&fit=crop", category: "home", tag: "Gift Pick", desc: "Bio-ethanol tabletop fire pit. Smokeless flame for patios, dinners, or ambiance. 2-hour burn per fill.", sizes: null },
  { id: 28, name: "Minimalist Backpack", price: 75, oldPrice: null, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", category: "accessories", tag: "Popular", desc: "Water-resistant nylon, padded laptop sleeve, and hidden back pocket. Clean design, no dangling zips.", sizes: null },
  { id: 29, name: "Striped Polo Shirt", price: 45, oldPrice: null, img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop", category: "clothing", tag: null, desc: "Breathable cotton polo with tonal stripes. Classic collar, two-button placket.", sizes: ["S", "M", "L", "XL"] },
  { id: 30, name: "Wireless Mouse", price: 32, oldPrice: null, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop", category: "electronics", tag: null, desc: "Ergonomic shape, silent clicks, USB-C receiver. 18-month battery life on a single AA.", sizes: null },
  { id: 31, name: "Linen Napkin Set", price: 22, oldPrice: null, img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", category: "home", tag: null, desc: "Set of 6 stonewashed linen napkins. Pre-shrunk, softens with every wash.", sizes: null },
  { id: 32, name: "Aviator Sunglasses", price: 58, oldPrice: null, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", category: "accessories", tag: null, desc: "Classic aviator silhouette with polarized lenses. Lightweight steel frame with spring hinges.", sizes: null }
];

const ADMIN_ORDERS = [
  { id: "SV-847291", customer: "Sarah Mitchell", email: "sarah@email.com", date: "2026-07-18", total: 167.94, status: "delivered", items: 3 },
  { id: "SV-847290", customer: "James Chen", email: "james@email.com", date: "2026-07-18", total: 79.00, status: "shipped", items: 1 },
  { id: "SV-847289", customer: "Emma Wilson", email: "emma@email.com", date: "2026-07-17", total: 212.00, status: "processing", items: 4 },
  { id: "SV-847288", customer: "Michael Brown", email: "mike@email.com", date: "2026-07-17", total: 45.00, status: "delivered", items: 1 },
  { id: "SV-847287", customer: "Lisa Park", email: "lisa@email.com", date: "2026-07-16", total: 143.00, status: "delivered", items: 2 },
  { id: "SV-847286", customer: "David Kumar", email: "david@email.com", date: "2026-07-16", total: 65.00, status: "shipped", items: 1 },
  { id: "SV-847285", customer: "Rachel Green", email: "rachel@email.com", date: "2026-07-15", total: 312.94, status: "delivered", items: 5 },
  { id: "SV-847284", customer: "Tom Harris", email: "tom@email.com", date: "2026-07-15", total: 89.00, status: "pending", items: 1 }
];

const TESTIMONIALS = [
  { name: "Alex R.", title: "Verified Buyer", text: "The cotton tee is honestly the best I've owned. Fits perfectly, washes great, and hasn't shrunk after 10 washes.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
  { name: "Morgan S.", title: "Repeat Customer", text: "Ordered the desk lamp and the candle set. Both arrived quickly and look even better in person than in the photos.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" },
  { name: "Jordan K.", title: "First Purchase", text: "Was skeptical ordering online but the leather watch exceeded my expectations. Great quality for the price.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" }
];

function getCart() {
  try { return JSON.parse(localStorage.getItem("cart")) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  var el = document.getElementById("cartCount");
  if (el) el.textContent = getCart().length;
}

function addToCart(productId, size) {
  var cart = getCart();
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  var existing = cart.find(function(item) {
    return item.id === productId && item.size === (size || null);
  });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      size: size || null,
      qty: 1
    });
  }
  saveCart(cart);
  showToast(product.name + " added to cart");
}

function removeFromCart(index) {
  var cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function showToast(message) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function() { toast.classList.remove("show"); }, 2000);
}

function renderProductCard(product) {
  return '<div class="product-card" onclick="location.href=\'product.html?id=' + product.id + '\'">' +
    '<div class="product-img"><img src="' + product.img + '" alt="' + product.name + '" loading="lazy"></div>' +
    '<div class="product-info">' +
      '<h3>' + product.name + '</h3>' +
      '<div>' +
        '<span class="price">$' + product.price + '</span>' +
        (product.oldPrice ? '<span class="old-price">$' + product.oldPrice + '</span>' : '') +
      '</div>' +
      (product.tag ? '<span class="tag">' + product.tag + '</span>' : '') +
    '</div>' +
  '</div>';
}

function renderTrending() {
  var grid = document.getElementById("trendingGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(function(p) { return p.tag; }).slice(0, 8).map(renderProductCard).join("");
}

function renderNewArrivals() {
  var grid = document.getElementById("newArrivalsGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(20, 32).map(renderProductCard).join("");
}

function renderBestSellers() {
  var grid = document.getElementById("bestSellersGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(function(p) { return p.tag === "Popular" || p.tag === "Best Seller"; }).concat(PRODUCTS.slice(12, 16)).slice(0, 8).map(renderProductCard).join("");
}

function renderStaffPicks() {
  var grid = document.getElementById("staffPicksGrid");
  if (!grid) return;
  grid.innerHTML = [PRODUCTS[3], PRODUCTS[13], PRODUCTS[26], PRODUCTS[27]].map(renderProductCard).join("");
}

function renderTestimonials() {
  var grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(function(t) {
    return '<div class="testimonial-card">' +
      '<div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
      '<p>' + t.text + '</p>' +
      '<div class="author">' +
        '<img class="author-avatar" src="' + t.avatar + '" alt="' + t.name + '">' +
        '<div><div class="author-name">' + t.name + '</div><div class="author-title">' + t.title + '</div></div>' +
      '</div>' +
    '</div>';
  }).join("");
}

function renderShopGrid() {
  var grid = document.getElementById("shopGrid");
  if (!grid) return;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get("cat");
  var filtered = cat ? PRODUCTS.filter(function(p) { return p.category === cat; }) : PRODUCTS.slice();
  window._filteredProducts = filtered;
  displayProducts(filtered);
}

function displayProducts(products) {
  var grid = document.getElementById("shopGrid");
  var count = document.getElementById("resultCount");
  if (grid) grid.innerHTML = products.map(renderProductCard).join("");
  if (count) count.textContent = products.length + " products";
}

function sortProducts() {
  var val = document.getElementById("sortSelect").value;
  var products = (window._filteredProducts || PRODUCTS).slice();
  if (val === "low") products.sort(function(a, b) { return a.price - b.price; });
  else if (val === "high") products.sort(function(a, b) { return b.price - a.price; });
  else if (val === "name") products.sort(function(a, b) { return a.name.localeCompare(b.name); });
  displayProducts(products);
}

function renderProductDetail() {
  var container = document.getElementById("productDetail");
  var breadcrumb = document.getElementById("breadcrumb");
  if (!container) return;
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"));
  var product = PRODUCTS.find(function(p) { return p.id === id; });
  if (!product) {
    container.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:60px 0;">Product not found. <a href="shop.html">Back to shop</a></p>';
    return;
  }
  document.title = product.name + " — ShopVibe";
  if (breadcrumb) {
    breadcrumb.innerHTML = '<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / ' + product.name;
  }
  var sizesHtml = "";
  if (product.sizes) {
    sizesHtml = '<div class="size-options" id="sizeOptions">' +
      product.sizes.map(function(s, i) {
        return '<button class="size-btn' + (i === 0 ? ' active' : '') + '" onclick="selectSize(this)">' + s + '</button>';
      }).join("") +
    '</div>';
  }
  container.innerHTML =
    '<div class="detail-images">' +
      '<div class="main-image"><img src="' + product.img + '" alt="' + product.name + '"></div>' +
      '<div class="thumb-row">' +
        '<div class="thumb active"><img src="' + product.img + '" alt="' + product.name + '"></div>' +
        '<div class="thumb"><img src="' + product.img + '" alt="' + product.name + '"></div>' +
        '<div class="thumb"><img src="' + product.img + '" alt="' + product.name + '"></div>' +
      '</div>' +
    '</div>' +
    '<div class="detail-info">' +
      '<h1>' + product.name + '</h1>' +
      '<div class="rating"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.8 (124 reviews)</div>' +
      '<div class="detail-price">$' + product.price +
        (product.oldPrice ? '<span class="old">$' + product.oldPrice + '</span>' : '') +
      '</div>' +
      '<p class="desc">' + product.desc + '</p>' +
      sizesHtml +
      '<div class="qty-row">' +
        '<label>Quantity</label>' +
        '<div class="qty-control">' +
          '<button onclick="changeQty(-1)">-</button>' +
          '<input type="number" id="qtyInput" value="1" min="1" max="10">' +
          '<button onclick="changeQty(1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="add-to-cart-btn" onclick="addFromDetail(' + product.id + ')">Add to Cart</button>' +
      '<button class="wishlist-btn">Add to Wishlist</button>' +
    '</div>';
}

function selectSize(btn) {
  var all = document.querySelectorAll("#sizeOptions .size-btn");
  all.forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
}

function changeQty(delta) {
  var input = document.getElementById("qtyInput");
  if (!input) return;
  var val = parseInt(input.value) + delta;
  if (val >= 1 && val <= 10) input.value = val;
}

function addFromDetail(productId) {
  var qtyInput = document.getElementById("qtyInput");
  var qty = qtyInput ? parseInt(qtyInput.value) : 1;
  var sizeBtn = document.querySelector("#sizeOptions .size-btn.active");
  var size = sizeBtn ? sizeBtn.textContent : null;
  for (var i = 0; i < qty; i++) {
    addToCart(productId, size);
  }
}

function renderCart() {
  var container = document.getElementById("cartContent");
  if (!container) return;
  var cart = getCart();
  if (cart.length === 0) {
    container.innerHTML =
      '<div class="empty-cart">' +
        '<h2>Your cart is empty</h2>' +
        '<p>Looks like you haven\'t added anything yet.</p>' +
        '<a href="shop.html" class="btn btn-dark">Start Shopping</a>' +
      '</div>';
    return;
  }
  var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
  var shipping = subtotal > 50 ? 0 : 5.99;
  var total = subtotal + shipping;
  var itemsHtml = cart.map(function(item, index) {
    return '<div class="cart-item">' +
      '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>' +
      '<div class="cart-item-details">' +
        '<h3>' + item.name + '</h3>' +
        (item.size ? '<div class="variant">Size: ' + item.size + '</div>' : '') +
        '<div class="item-price">$' + (item.price * item.qty).toFixed(2) + '</div>' +
      '</div>' +
      '<div class="cart-item-actions">' +
        '<span style="font-size:14px; color:#888;">Qty: ' + item.qty + '</span>' +
        '<button class="remove-btn" onclick="removeFromCart(' + index + ')">Remove</button>' +
      '</div>' +
    '</div>';
  }).join("");
  container.innerHTML =
    '<div class="cart-page">' +
      '<div class="cart-items">' + itemsHtml + '</div>' +
      '<div class="cart-summary">' +
        '<h2>Order Summary</h2>' +
        '<div class="summary-row"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
        '<div class="summary-row"><span>Shipping</span><span>' + (shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)) + '</span></div>' +
        '<div class="summary-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>' +
        '<button class="checkout-btn" onclick="location.href=\'checkout.html\'">Proceed to Checkout</button>' +
        '<div class="promo-row">' +
          '<input type="text" placeholder="Promo code">' +
          '<button onclick="showToast(\'Invalid promo code\')">Apply</button>' +
        '</div>' +
      '</div>' +
    '</div>';
}

function handleSignIn(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  localStorage.setItem("user", JSON.stringify({ email: email, name: email.split("@")[0] }));
  showToast("Signed in as " + email.split("@")[0]);
  var greeting = document.querySelector(".nav-icons a[href='signin.html']");
  if (greeting) {
    greeting.textContent = email.split("@")[0];
    greeting.href = "#";
  }
  setTimeout(function() { window.location.href = "index.html"; }, 1000);
}

function renderCheckout() {
  var container = document.getElementById("checkoutContent");
  if (!container) return;
  var cart = getCart();
  if (cart.length === 0) {
    container.innerHTML =
      '<div class="empty-cart">' +
        '<h2>Your cart is empty</h2>' +
        '<p>Add some items before checking out.</p>' +
        '<a href="shop.html" class="btn btn-dark">Start Shopping</a>' +
      '</div>';
    return;
  }
  var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
  var shipping = subtotal > 50 ? 0 : 5.99;
  var tax = subtotal * 0.08;
  var total = subtotal + shipping + tax;
  var orderItemsHtml = cart.map(function(item) {
    return '<div class="order-item">' +
      '<div class="order-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>' +
      '<div class="order-item-info">' +
        '<h4>' + item.name + '</h4>' +
        (item.size ? '<div class="item-variant">Size: ' + item.size + '</div>' : '') +
        '<div class="item-qty">Qty: ' + item.qty + '</div>' +
      '</div>' +
      '<div class="order-item-price">$' + (item.price * item.qty).toFixed(2) + '</div>' +
    '</div>';
  }).join("");
  var savedEmail = "";
  try {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) savedEmail = user.email;
  } catch(e) {}
  container.innerHTML =
    '<div class="checkout-page">' +
      '<form class="checkout-form" id="checkoutForm" onsubmit="handleCheckout(event)">' +
        '<div class="form-section">' +
          '<h2>Contact Information</h2>' +
          '<div class="form-row full">' +
            '<div class="form-group">' +
              '<label>Email</label>' +
              '<input type="email" id="coEmail" value="' + savedEmail + '" placeholder="you@example.com" required>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="form-section">' +
          '<h2>Shipping Address</h2>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>First Name</label><input type="text" id="coFirst" placeholder="John" required></div>' +
            '<div class="form-group"><label>Last Name</label><input type="text" id="coLast" placeholder="Doe" required></div>' +
          '</div>' +
          '<div class="form-row full">' +
            '<div class="form-group"><label>Address</label><input type="text" id="coAddress" placeholder="123 Main Street" required></div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>City</label><input type="text" id="coCity" placeholder="New York" required></div>' +
            '<div class="form-group"><label>State</label><input type="text" id="coState" placeholder="NY" required></div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>ZIP Code</label><input type="text" id="coZip" placeholder="10001" required></div>' +
            '<div class="form-group"><label>Phone</label><input type="tel" id="coPhone" placeholder="(555) 123-4567"></div>' +
          '</div>' +
        '</div>' +
        '<div class="form-section">' +
          '<h2>Payment</h2>' +
          '<div class="form-row full">' +
            '<div class="form-group"><label>Card Number</label><input type="text" id="coCard" placeholder="1234 5678 9012 3456" maxlength="19" required></div>' +
          '</div>' +
          '<div class="card-row">' +
            '<div class="form-group"><label>Expiry</label><input type="text" id="coExpiry" placeholder="MM/YY" maxlength="5" required></div>' +
            '<div class="form-group"><label>CVV</label><input type="text" id="coCvv" placeholder="123" maxlength="4" required></div>' +
            '<div class="form-group"><label>Zip</label><input type="text" id="coCardZip" placeholder="10001" maxlength="5" required></div>' +
          '</div>' +
          '<div class="form-row full">' +
            '<div class="form-group"><label>Name on Card</label><input type="text" id="coCardName" placeholder="John Doe" required></div>' +
          '</div>' +
        '</div>' +
        '<button type="submit" class="place-order-btn">Place Order — $' + total.toFixed(2) + '</button>' +
        '<div class="secure-badge">&#128274; Secure checkout. Your data stays in your browser.</div>' +
      '</form>' +
      '<div class="cart-summary">' +
        '<h2>Order Summary</h2>' +
        '<div class="order-items">' + orderItemsHtml + '</div>' +
        '<div class="summary-row"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
        '<div class="summary-row"><span>Shipping</span><span>' + (shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)) + '</span></div>' +
        '<div class="summary-row"><span>Tax (8%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
        '<div class="summary-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>' +
      '</div>' +
    '</div>';
}

function handleCheckout(e) {
  e.preventDefault();
  var cart = getCart();
  if (cart.length === 0) return;
  var orderId = "SV-" + Math.floor(100000 + Math.random() * 900000);
  var email = document.getElementById("coEmail").value;
  localStorage.removeItem("cart");
  var container = document.getElementById("checkoutContent");
  container.innerHTML =
    '<div class="order-confirm">' +
      '<div class="checkmark">&#10003;</div>' +
      '<h1>Order Confirmed</h1>' +
      '<p>Thanks for your purchase! We\'ll send a confirmation to <strong>' + email + '</strong></p>' +
      '<div class="order-number">Order ' + orderId + '</div>' +
      '<a href="shop.html" class="btn btn-dark">Continue Shopping</a>' +
    '</div>';
  updateCartCount();
  window.scrollTo(0, 0);
}

function renderAdmin() {
  var statsEl = document.getElementById("adminStats");
  var ordersEl = document.getElementById("adminOrders");
  var productsEl = document.getElementById("adminProducts");
  if (!statsEl) return;

  var totalRevenue = ADMIN_ORDERS.reduce(function(s, o) { return s + o.total; }, 0);
  var totalOrders = ADMIN_ORDERS.length;
  var deliveredCount = ADMIN_ORDERS.filter(function(o) { return o.status === "delivered"; }).length;

  statsEl.innerHTML =
    '<div class="stat-card"><div class="stat-label">Total Revenue</div><div class="stat-value">$' + totalRevenue.toFixed(2) + '</div><div class="stat-change">+12.5% from last week</div></div>' +
    '<div class="stat-card"><div class="stat-label">Orders</div><div class="stat-value">' + totalOrders + '</div><div class="stat-change">+3 today</div></div>' +
    '<div class="stat-card"><div class="stat-label">Products</div><div class="stat-value">' + PRODUCTS.length + '</div><div class="stat-change">4 categories</div></div>' +
    '<div class="stat-card"><div class="stat-label">Delivered</div><div class="stat-value">' + deliveredCount + '</div><div class="stat-change">' + Math.round(deliveredCount/totalOrders*100) + '% completion rate</div></div>';

  if (ordersEl) {
    var rows = ADMIN_ORDERS.map(function(o) {
      return '<tr>' +
        '<td class="order-id">' + o.id + '</td>' +
        '<td>' + o.customer + '</td>' +
        '<td>' + o.date + '</td>' +
        '<td>$' + o.total.toFixed(2) + '</td>' +
        '<td>' + o.items + ' items</td>' +
        '<td><span class="status status-' + o.status + '">' + o.status.charAt(0).toUpperCase() + o.status.slice(1) + '</span></td>' +
      '</tr>';
    }).join("");
    ordersEl.innerHTML = rows;
  }

  if (productsEl) {
    var prows = PRODUCTS.map(function(p) {
      return '<tr>' +
        '<td><div class="admin-product-row"><div class="admin-product-img"><img src="' + p.img + '" alt="' + p.name + '"></div><div><div class="admin-product-name">' + p.name + '</div><div class="admin-product-cat">' + p.category + '</div></div></div></td>' +
        '<td>$' + p.price + '</td>' +
        '<td>' + (p.oldPrice ? '<span style="color:#999; text-decoration:line-through;">$' + p.oldPrice + '</span>' : '—') + '</td>' +
        '<td>' + (p.tag || '—') + '</td>' +
        '<td><span style="color:#22c55e;">Active</span></td>' +
      '</tr>';
    }).join("");
    productsEl.innerHTML = prows;
  }
}

(function() {
  var userEl = document.querySelector(".nav-icons a[href='signin.html']");
  try {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name && userEl) {
      userEl.textContent = user.name;
      userEl.href = "#";
    }
  } catch(e) {}
})();