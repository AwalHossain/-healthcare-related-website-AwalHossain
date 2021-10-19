import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center py-5 px-5">Read Out Daily blog about your health</h2>
           <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="carde">
                    <img src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/blog-image-9.jpg?lossy=1&strip=1&webp=1" class="carde-img-top" alt="..." />
                    <div class="carde-body">
                        <h5 class="carde-title">Build an Athletic Body With In Eight Weeks Time</h5>
                        <p class="carde-text">How all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete.</p>
                        <button className=" btn-primary">Read</button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="carde">
                    <img src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/blog-image-10.jpg?lossy=1&strip=1&webp=1" class="carde-img-top" alt="..." />
                    <div class="carde-body">
                        <h5 class="carde-title">Happy Senior Training With Our Award Winning Trainee</h5>
                        <p class="carde-text">How all this mistaken idea of denouncing pleasure and praising pain was born and will give you a completer.</p>
                        <button className=" btn-primary">Read</button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="carde">
                    <img src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/blog-image-6.jpg?lossy=1&strip=1&webp=1" class="carde-img-top" alt="..." />
                    <div class="carde-body">
                        <h5 class="carde-title">What is a “Healthy” Food? The Answer</h5>
                        <p class="carde-text">Perspiciatis unde omnis iste natus sed error voluptatem accusantium uts doloremque laudantium, totrem explicabo.</p>
                        <button className=" btn-primary">Read</button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="carde">
                    <img src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/blog-image-7.jpg?lossy=1&strip=1&webp=1" alt="..." />
                    <div class="carde-body">
                        <h5 class="carde-title">Stop Getting Annoyed If You Want Better Health</h5>
                        <p class="carde-text">At Integrative Nutrition, we teach the concept of Primary Food which is everything that nourishes your life perspiciatis.</p>
                        <button className=" btn-primary">Read</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Blog;