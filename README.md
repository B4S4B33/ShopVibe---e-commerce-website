# ShopVibe

A ecommerce storefront built with vanilla HTML, CSS, and JavaScript, served by an Express.js backend. Designed for deployment on Render.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero banner, categories, trending, best sellers, new arrivals, staff picks, testimonials, newsletter |
| Shop | `shop.html` | Product grid with category filtering (`?cat=clothing`) and sort (price, name) |
| Product | `product.html?id=N` | Product detail with images, sizes, quantity picker, add to cart |
| Cart | `cart.html` | Cart items, promo code input, order summary, proceed to checkout |
| Checkout | `checkout.html` | Shipping address, payment form, order summary, confirmation screen |
| Sign In | `signin.html` | Dummy sign-in (stores name/email in localStorage, no auth) |
| Admin | `admin.html` | Dashboard with stats, recent orders table, product list |

## Getting Started

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`.

## Project Structure

```
ecom/
  server.js          # Express static server
  package.json
  public/
    index.html       # Home page
    shop.html        # Shop listing
    product.html     # Product detail
    cart.html        # Shopping cart
    checkout.html    # Checkout form
    signin.html      # Sign in
    admin.html       # Admin dashboard
    style.css        # All styles
    script.js        # All client-side logic and data
```

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Backend:** Express.js (static file serving)
- **Data:** Client-side JS arrays (no database)
- **Images:** Unsplash URLs
- **Storage:** localStorage for cart, sign-in state, and preferences


## Features

- 32 products across 4 categories (clothing, electronics, home, accessories)
- Responsive design (mobile + desktop)
- Cart with localStorage persistence
- Checkout with order confirmation
- Admin dashboard with stats, orders, and product management (dummy data)
- No database, no authentication, no external APIs
