import OnboardingPage from "./pages/onBoarding";
import LoginPage from "./pages/login";

require("babel-core/register");
import { Block, renderDOM, registerComponent }  from './core';

import './styles/style.css';

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new LoginPage());
});