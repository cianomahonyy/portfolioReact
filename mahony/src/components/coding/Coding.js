import React from 'react';
import Nav from './../home/nav/Nav';
import './Coding.css';

function Coding() {
  return (
    <div className="Coding">

      <Nav />

      <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="house-card">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WLOMuTEIcq8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="coding-header">
                    Python
                    </div>
                    <div class="coding-body">
                        <h5 class="coding-title">House-Price Scrape</h5>
                        <p class="coding-text">
                                I made a script in Python that scraped the main housing website in Ireland (daft.ie)
                                for the county/price/address of every house on the website. I then used the data to 
                                compare housing prices in every county by finding the average house price in each county.
                        </p>
                        <a href="https://github.com/cianomahonyy/houseprice-scraper" class="btn btn-primary btn-design">Github</a>
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="exam-card">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LwbE1d36S7g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    Python
                    <div class="coding-body">
                        <h5 class="coding-title">Exam Paper Bot</h5>
                        <p class="coding-text">
                            This is a bot using Python and Selenium that downloads every exam paper for whichever modules
                            you're studying in UCC that semester. The post got 934 likes and 31,500 views on LinkedIn.
                        </p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6493559034984034304" class="btn btn-primary btn-coding">LinkedIn</a>
                        <a href="https://github.com/cianomahonyy/uccexambot" class="btn btn-primary btn-design">Github</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
                <div class="col-md-4">
                    <div class="exam-card">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fmAouJVByeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="coding-header">
                        Python
                        </div>
                        <div class="coding-body">
                            <h5 class="coding-title">Craigslist Price Scraper</h5>
                            <p class="coding-text">
                                This script scrapes Craiglist for all prices in a particular category and finds the average price.
                            </p>
                            <a href="https://github.com/cianomahonyy/craigslist-pricescraper" class="btn btn-primary btn-design">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>


  );
}

export default Coding;
