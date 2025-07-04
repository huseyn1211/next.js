// import React from 'react'
"use client"
import {Container}  from '@mui/material';
import Quick from '../../atomic/atom/pageAtom/Quick';
import FooterHome  from './FooterHome';
import MainMenu from '../../atomic/atom/organism/MainMenu'
import '../../../styles/search.css'
import Link from 'next/link';
import React, { useState } from 'react';
import IconRight from '../../atomic/atom/molecules/IconRight.jsx'
import { mockData } from '../data/MockData.jsx'
import Buttons from '../../atomic/atom/Buttons'



const Search = () => {
  const [selected, setSelected] = useState(null);
  const handleChange = (value) => {
  setSelected(value === selected ? null : value);
};
  return (
    <Container>
        <Container> <MainMenu/></Container>
        <Container>
          <div className='gray-div'>

          <Link href='#'> <a className='link-div'>Refer 3 friends and get your FREE 'Prepare For Marriage Toolkit'! Click Here To Find Out More!</a> </Link>
          <div className='parent-div-child'>
            <div className='child-left'>
              <div className="search-form">
  
   <div className="input-flex">
      <label className={`hover-label ${selected && selected !== 'pure' ? 'faded' : ''}`}>
        <input
          type="checkbox"
          checked={selected === 'pure'}
          onChange={() => handleChange('pure')}
        />
        Those who are my pure matches
      </label>

      <label className={`hover-label ${selected && selected !== 'looking' ? 'faded' : ''}`}>
        <input
          type="checkbox"
          checked={selected === 'looking'}
          onChange={() => handleChange('looking')}
        />
        Who I'm looking for
      </label>

      <label className={`hover-label ${selected && selected !== 'me' ? 'faded' : ''}`}>
        <input
          type="checkbox"
          checked={selected === 'me'}
          onChange={() => handleChange('me')}
        />
        Who's looking for me
      </label>
    </div>

  <hr />
 <div className='input-flex'>
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

  <div className='input-flex'>
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
  <div>
    <label htmlFor="relocate">Are You Willing To Relocate</label>
    <select id="relocate" name="relocate">
      <option>don't mind</option>
      <option>yes</option>
      <option>no</option>
    </select>
  </div>

  <div className="search-buttons" style={{ marginTop: '20px' }}>
    <button type="submit">Advanced Search</button>
    <button type="reset" style={{ marginLeft: '10px' }}>Clear Search</button>
  </div>
</div>
      
    <div className='div-mock-parent'>
      
      {mockData.map(user => (
        <div
          key={user.id}
          style={{
            display: 'flex',
            gap: 15,
            alignItems: 'center',
            padding: 15,
            border: '1px solid #ccc',
            borderRadius: 8,
            justifyContent: 'space-between',
          }}
        >
          <img
            src='avatar.jpg'  
            alt="User avatar"
            style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ flex: 1, marginLeft: 10 }}>
            <h3>{user.name}</h3>
            <p><strong>Tags:</strong> {user.tags}</p>
            <p><strong>Age:</strong> {user.age} years</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Available:</strong> {user.available ? 'Yes' : 'No'}</p>
            <p><strong>Response Rate:</strong> {user.responseRate}</p>
          </div>
          <Buttons className='button-search'
          
          >
           Online
          </Buttons>

          
          <div style={{ marginLeft: 15 }}>
            <IconRight />
          </div>
        </div>
      ))}
    </div>
            </div>
            <div className='child-right'><Quick/></div>
          </div>
          </div>
          <div><FooterHome/></div>
        </Container>
        
      
    </Container>
  )
}

export default Search
