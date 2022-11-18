import React, { useState, useEffect } from "react"
import '../assets/css/style.css';


function HomePageScreen() {

  return (
    <div>
       <section id="header">
        <a href="#"><img src="img/logo.png" class="logo" alt=""></img></a>
        <div>
            <ul id="navbar">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
        </div>
      </section>
      <section id="hero">
        <h4>Trade in offer</h4>
        <h2>Super value deals</h2>

        <h1>On all products</h1>

        <p>Save more with coupons & upto 70% off!</p>

        <button>Shop now</button>

    </section>

    <section id="feature" class="section-p1">
        <div class="fe-box"><img src="img/features/f1.png" alt=""></img>
            <h6>Free Shipping</h6>
        </div>
        <div class="fe-box"><img src="img/features/f2.png" alt=""></img>
            <h6>Online order</h6>
        </div>
        <div class="fe-box"><img src="img/features/f3.png" alt=""></img>
            <h6>Save money</h6>
        </div>
        <div class="fe-box"><img src="img/features/f4.png" alt=""></img>
            <h6>Promotions</h6>
        </div>
        <div class="fe-box"><img src="img/features/f5.png" alt=""></img>
            <h6>Happy sell</h6>
        </div>
        <div class="fe-box"><img src="img/features/f6.png" alt=""></img>
            <h6>F24/7 support</h6>
        </div>

    </section>

    <section id="banner" class="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span> - All t-shirt & Acessories</h2>
        <button class="normal">Explore More</button>
    </section>

    <section id="product1" class="section-p1">
        <h2>Feature Product</h2>
        <p>Summer collection New Mordern Design</p>
        <div class="pro-container">
            <div class="pro">
                <img src="img/products/f1.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f2.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f3.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f4.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f5.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f6.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f7.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
            <div class="pro">
                <img src="img/products/f8.jpg" alt=""></img>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"> <span class="cart"><i class="fa-solid fa-arrow-right fa-cart-shopping"></i></span></a>
            </div>
        </div>
    </section>

    <section id="sm-banner" class="section-p1">
        <div class="banner-box">
            <h4>Crazy deal</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The beest classic dess is on sale at cara</span>
            <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
            <h4>Spring/summer</h4>
            <h2>Upcoming season</h2>
            <span>The beest classic dess is on sale at cara</span>
            <button class="white">Collection</button>
        </div>
    </section>

    <section id="banner3">
        <div class="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection - 50% OFF</h3>
        </div>
        <div class="banner-box banner-box2">
            <h2>NEW FOOTWARE COLLECTION</h2>
            <h3>Winter Collection - 50% OFF</h3>
        </div>
        <div class="banner-box banner-box3">
            <h2>T-SHIRT</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>

    <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up for Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your email"></input>
            <button class="normal">Sign Up</button>
        </div>
    </section>


    <footer class="section-p1">
        <div class="col">
            <img class="logo" src="img/logo.png" alt=""></img>
            <h4>Contact</h4>
            <p> <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p> <strong>Phone:</strong> +090312312</p>
            <p> <strong>Hours</strong>10:00-18:00, Mon-Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Conditions</a>
            <a href="#">Contact us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My order</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="img/pay/app.jpg" alt=""></img>
                <img src="img/pay/play.jpg" alt=""></img>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay/pay.png" alt=""></img>
        </div>

        <div class="copyright">
            <p> &#169; 2022, PBL6 Web Shop </p>
        </div>

    </footer>
    </div>
  );
}

export default HomePageScreen;
