import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cartState = useSelector((state) => state.cart.cart);  //state.name in store.name in redux file
  console.log("cartstate",cartState)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflix/home">
                Netflix Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflix/shows">
                Netflix Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflix/movies">
                Netflix Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                Form Demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                Form Demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                Form Demo 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">
                Form Demo 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo6">
                Form Demo 6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo7">
                Form Demo 7
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                Api Demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                Api Demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                Api Demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo4">
                Api Demo 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo5">
                Api Demo 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo6">
                Api Demo 6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo8">
                Api Demo 8
              </Link>
            </li>
           {/*  <li class="nav-item">
              <Link class="nav-link" to="/apidemo9">
                Api Demo 9
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/omdb">
                Omdb
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/useeffect">
              useeffect
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">
              product
              </Link>
            </li>
            <li class="nav-item">
              {cartState?.length}
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/increasebal">
                  Bank
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/data">
                  Data
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/data1">
                  Data1
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
};