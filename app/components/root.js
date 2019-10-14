import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from "./Home"
import CandyList from "./CandyList"
import SingleCandy from "./SingleCandy"


const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
        <Link to= "/" style={{ textDecoration: 'none' , color: "white", padding: "0px 10px 0px 20px" }}>Home</Link>
        <Link to= "/candies" style={{ textDecoration: 'none', color: "white" }} >Candies  </Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/candies" component={CandyList} />
        <Route path="/candies/:id" component={SingleCandy} />
      </main>
    </div>
    </Router>
  )
}

export default Root
