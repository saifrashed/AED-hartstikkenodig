/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Courses from "views/Courses.js";
import Article from "views/Article.js";
import Contact from "views/Contact.js";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Index {...props} />}/>
            <Route
                path="/cursussen"
                exact
                render={props => <Courses {...props} />}
            />
            <Route
                path="/artikel"
                exact
                render={props => <Article {...props} />}
            />
            <Route
                path="/contact"
                exact
                render={props => <Contact {...props} />}
            />
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
