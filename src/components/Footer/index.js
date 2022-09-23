import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="container footerBottom">
    <footer class="py-3 my-4 mt-auto">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="/users" class="nav-link px-2 text-muted">Users</a></li>
        </ul>
        <p class="text-center text-muted">&copy; 2022 Rivera Exam</p>
    </footer>
    </div>
  );
};

export default Footer;
