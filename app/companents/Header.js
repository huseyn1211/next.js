"use client";
import React, { useState } from 'react';
import '../../styles/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setOpen(false);
    }
  };

  const [isFirstFormVisible, setIsFirstFormVisible] = useState(true);
  const [isSecondFormVisible, setIsSecondFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    gender: '',
    username: '',
    email: '',
    password: '',
    country: '',
    city: '',
    birthdate: '',
    purpose: '',
    errors: {},
  });

  const handleSecondFormSubmit = () => {
    const errors = {};
    if (!formData.country) errors.country = 'Ölkə seçin';
    if (!formData.city) errors.city = 'Şəhər seçin';
    if (!formData.birthdate) errors.birthdate = 'Doğum tarixi daxil edin';
    if (!formData.purpose) errors.purpose = 'Məqsəd seçin';

    setFormData(prev => ({ ...prev, errors }));

    if (Object.keys(errors).length === 0) {
      console.log('İkinci form data:', formData);
      router.push('/newPage');
    }
  };


  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Nick daxil edin';
    if (!formData.email) errors.email = 'Email daxil edin';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email düzgün deyil';
    if (!formData.password) errors.password = 'Şifrə daxil edin';
    else if (formData.password.length < 6) errors.password = 'Şifrə ən azı 6 simvol olmalıdır';
    if (!formData.gender) errors.gender = 'Cins seçin';

    setFormData(prev => ({ ...prev, errors }));

    if (Object.keys(errors).length === 0) {
      console.log('Form data:', formData);
      handleSwitchForm(); // yalnız burda çağırılır, səhv yoxdursa
    }
  };

  const handleBack = () => {
    setIsSecondFormVisible(false);
    setTimeout(() => setIsFirstFormVisible(true), 100);
  };
  const handleSwitchForm = () => {
    setIsFirstFormVisible(false);
    setTimeout(() => setIsSecondFormVisible(true), 100);
  };



  return (
    <div className='div-main'>
      <div className='parent-div-width'>
        <div className='parent-div'>
          <a href='https://www.gonuldensevenler.com/' target='blank'>
            <img className='header-img' src='/gonulden sevenler.jpg' alt='logo' />
          </a>
          <div className='child-div'>
            <div className='header-english'>
              <FontAwesomeIcon className='icon-america' icon={faEarthAmericas} />
              <div>English</div>
              <FontAwesomeIcon className='icon-down' icon={faCaretDown} />
            </div>
            <button className='header-login' onClick={() => setOpen(true)}> LOGIN</button>

            {open && (
              <div className='modal-overlay' onClick={handleOverlayClick}>
                <div className="modal">
                  <div className="modal-content">
                    <div className='modal-img-parent'><img src='gs-dark.png' alt='modal logo' /></div>
                    <div className='modal-p-parent'>
                      <div className='modal-gonul'>Gönülden Sevenler,</div>
                      <div className='modal-help'> is there to help you find your life partner.</div>
                    </div>
                    <div className='modal-input-parent'>
                      <input className='modal-input' type='email' placeholder='Email' />
                      <input className='modal-input' type='password' placeholder='Password' />
                      <div className='modal-login'> LOGIN</div>
                    </div>
                    <a className='modal-forget'> I forgot my password</a>
                    <div>
                      <div className='modal-download'> DOWNLOAD THE APPLICATION!</div>
                      <div className='nav-img'>
                        <img className='nav-img-child' src='astore.png' alt='apple' />
                        <img className='nav-img-child' src='gplay.png' alt='google play' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='parent-second'>
        <div className='div-width-parent'>
          <div className={`second-form ${isSecondFormVisible ? 'active' : 'exit-left'}`}>
            <button className='back-button'
              onClick={handleBack} >
              <FaArrowLeft size={20} color="white" /> BACK
            </button>
            <select className='select-country' name="country" onChange={(e) => handleInputChange(e, 'country')}>
              <option value="">Ölkə Seçin</option>
              <option value="Azerbaijan">Azərbaycan</option>
              <option value="Turkey">Türkiyə</option>
            </select>
            {formData.errors.country && <p className="error">{formData.errors.country}</p>}
            <select className='select-country' name="city" value={formData.city}
              onChange={(e) => handleInputChange(e, 'city')}>
              <option value="">Şəhər Seçin</option>
              <option value="Baki">Bakı</option>
              <option value="Sumqayit">Sumqayıt</option>
              <option value="Berde">Bərdə</option>
              <option value="Ali-bayramli">Əli-Bayramlı</option>
            </select>
            {formData.errors.city && <p className="error">{formData.errors.city}</p>}
            <div style={{ display: 'flex', gap: '50px' }}>
              <input
                className='input-date'
                type='date'
                value={formData.birthdate}
                onChange={(e) => handleInputChange(e, 'birthdate')}
              />
              {formData.errors.birthdate && <p className="error">{formData.errors.birthdate}</p>}
            </div>
            <select className='select-city' name="purpose" value={formData.purpose}
              onChange={(e) => handleInputChange(e, 'purpose')}>
              <option value="">Məqsəd</option>
              <option value="Tanisliq">Tanışlıq</option>
              <option value="Evlilik">Evlilik</option>
              <option value="Dost axtarisi">Dost axtarışı</option>
              <option value="Ciddi Munasibet">Ciddi Münasibət</option>
            </select>
            {formData.errors.purpose && <p className="error">{formData.errors.purpose}</p>}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className='second-memershib' onClick={handleSecondFormSubmit}>COMPLETE MEMBERSHIP</button>
            </div>
          </div>

          <div className={`div-width ${isFirstFormVisible ? 'active' : 'exit-left'}`}>
            <div className='users-div'>
              <div className='green-circle'></div> ONLINE USERS : <b>924</b>
            </div>
            <div className='input-parent'>
              <div className='input-child-div'>
                <label htmlFor="male"><b>MALE</b></label>
                <input type='radio' id='male' name='gender' value='male'
                  checked={formData.gender === 'male'}
                  onChange={(e) => handleInputChange(e, 'gender')} />
              </div>
              <div className='input-child-div'>
                <label htmlFor="female"><b>WOMAN</b></label>
                <input type='radio' id='female' name='gender' value='female'
                  checked={formData.gender === 'female'}
                  onChange={(e) => handleInputChange(e, 'gender')} />
              </div>
            </div>
            <div className='input-nick-parent'>
              <input className='input-nick' type='text' placeholder='Nick'
                onChange={(e) => handleInputChange(e, 'username')} />
              {formData.errors.username && <p className="error">{formData.errors.username}</p>}

              <input className='input-nick' type='email' placeholder='E-mail Address'
                onChange={(e) => handleInputChange(e, 'email')} />
              {formData.errors.email && <p className="error">{formData.errors.email}</p>}

              <input className='input-nick' type='password' placeholder='Password'
                onChange={(e) => handleInputChange(e, 'password')} />
              {formData.errors.password && <p className="error">{formData.errors.password}</p>}
            </div>
            <button className='header-sign' onClick={handleSubmit}>
              SIGN UP NOW
            </button>

          </div>
        </div>
        <div className='div-right-header'>
          <h1 className='div-islamic'><b>Islamic Matrimonial Site</b></h1>
          <p className='div-rightDiv-p'><b>We are not like other dating apps. </b></p>
          <p className='div-rightDiv-p2'>Bringing together millions of members seeking a serious relationship,</p>
          <p className='div-rightDiv-p2'><b>Gönülden Sevenler</b> witnesses the happiness of more than 1,000 couples every day.</p>
          <p className='div-rightDiv-p2'><b>You could be next! Join us now! </b></p>
        </div>
      </div>

      <div className='parent-even'>
        <button className='header-login-even' onClick={() => setOpen(true)}> LOGIN</button>
        <div className='header-sign-even'> SIGN UP NOW</div>
      </div>

      <div className='img-parent-div'>
        <a href='https://apps.apple.com/tr/app/g%C3%B6n%C3%BClden-sevenler-evlilik/id997270377' target='blank' className='img-div-store'>
          <img style={{ cursor: 'pointer' }} src='gplay.png' alt='Google Play' />
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.gonuldensevenler.evlilik' target='blank' className='img-div-store'>
          <img style={{ cursor: 'pointer' }} src='astore.png' alt='App Store' />
        </a>
      </div>

      <div className='box3-div'>
        <div className='box-parent'>
          <div className='box-container'>
            <div className='img-header-icons'><img src='/peopleIcon.png' alt='people' /></div>
            <div>
              <p>19 years</p>
              <p><b>5.104.590</b></p>
              <p>Members</p>
            </div>
          </div>
          <div className='box-container'>
            <div className='img-header-icons'><img src='/ringIcon.png' alt='ring' /></div>
            <div>
              <p>19 years</p>
              <p><b>5.104.590</b></p>
              <p>Members</p>
            </div>
          </div>
          <div className='box-container'>
            <div className='img-header-icons'><img src='/phoneIcon.png' alt='phone' /></div>
            <div>
              <p>19 years</p>
              <p><b>5.104.590</b></p>
              <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
