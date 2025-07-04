
"use client"
import React, { useState } from "react";

import '../../../styles/marriage.css'
import Container from '@mui/material/Container';
import Quick from '@/app/atomic/atom/pageAtom/Quick';
import MainMenu from '../../atomic/atom/organism/MainMenu'
import Buttons from "../../atomic/atom/Buttons";
import FooterHome from "./FooterHome";

const MyPage = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = (value) => {
    setSelected(value === selected ? null : value);
  };

  return (
    <Container>
     
      <MainMenu />

      <Container className="parent-div-child">
       
        <div className="child-left">
          <h2 className="page-header">Search Form</h2>

          <form className="search-form">
            <div className="input-flex">
              <label className={`hover-label ${selected && selected !== "pure" ? "faded" : ""}`}>
                <input
                  type="checkbox"
                  checked={selected === "pure"}
                  onChange={() => handleChange("pure")}
                />
                Those who are my pure matches
              </label>

              <label className={`hover-label ${selected && selected !== "looking" ? "faded" : ""}`}>
                <input
                  type="checkbox"
                  checked={selected === "looking"}
                  onChange={() => handleChange("looking")}
                />
                Who I'm looking for
              </label>

              <label className={`hover-label ${selected && selected !== "me" ? "faded" : ""}`}>
                <input
                  type="checkbox"
                  checked={selected === "me"}
                  onChange={() => handleChange("me")}
                />
                Who's looking for me
              </label>
            </div>

            <hr />

            <div className="input-flex">
              <label>
                <input type="checkbox" name="online_now" />
                On-line now
              </label>

              <label>
                <input type="checkbox" name="photos_uploaded" />
                Photos uploaded
              </label>

              <label>
                <input type="checkbox" name="not_viewed" />
                Only those I haven't viewed
              </label>
            </div>

            <hr />

            <div className="input-flex age-selects">
              <label htmlFor="age-from">Aged from</label>
              <select id="age-from" name="age_from">
                <option>-- any --</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
              </select>

              <label htmlFor="age-to">to</label>
              <select id="age-to" name="age_to">
                <option>-- any --</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
                <option>45</option>
                <option>50</option>
                <option>55</option>
                <option>60</option>
              </select>
            </div>

            <div className="input-flex relocate-select">
              <label htmlFor="relocate">Are You Willing To Relocate</label>
              <select id="relocate" name="relocate">
                <option>don't mind</option>
                <option>yes</option>
                <option>no</option>
              </select>
            </div>

           
            <hr />

            <div className="input-flex new-fields">
              <label htmlFor="marital-status">Marital Status</label>
              <select id="marital-status" name="marital_status" className="colorful-select marital">
                <option>Any</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>

              <label htmlFor="education">Education Level</label>
              <select id="education" name="education" className="colorful-select education">
                <option>Any</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </div>

            <div className="input-flex new-fields">
              <label htmlFor="religion">Religion</label>
              <select id="religion" name="religion" className="colorful-select religion">
                <option>Any</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Jewish</option>
                <option>Other</option>
              </select>

              <label htmlFor="country">Country</label>
              <select id="country" name="country" className="colorful-select country">
                <option>Any</option>
                <option>USA</option>
                <option>UK</option>
                <option>Azerbaijan</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="search-buttons">
              <Buttons type="submit">Advanced Search</Buttons>
              <Buttons type="reset" className="clear-button">
                Clear Search
              </Buttons>
            </div>
          </form>
        </div>

       
        <div className="child-right">
          <Quick />
        </div>
      </Container>

     
      <FooterHome />
    </Container>
  );
};

export default MyPage;
