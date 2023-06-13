import { useState } from 'react';

import cross from '../../../../../assets/img/content/cross.png'

import './join-team-form.scss'
import { Link } from 'react-router-dom';

const JoinTeamForm = () => {
    const [fileName, setFileName] = useState('');

    //по натисканю на кнопку додавання файлу викликає випадок click у <input type="file"/>
    const handleClick = () => {
      document.getElementById('input_file').click();
    };

    //додає у поле назву файлу
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name);
      }
    };

    return ( 
        <section className='team-form'>
            <div className='team-form__wrapper'>
                <Link to='/aboutUs-join-team' className='form__cross' src={cross} alt="" />
                <div className='form__content'>
                    <h3 className='header3'>join the team</h3>
                    <p className='body'>Unity Developer</p>
                </div>
                <form className='form__input'>
                    <input className='form__input-line' type="text" placeholder="Full Name"/>
                    <input className='form__input-line' type="email" placeholder="Email" name="" id="" />
                    <input className='form__input-line' type="text" placeholder="Portfolio link"/>
                    <label className='form__input-wrapper'>
                        <input className='form__input-line' disabled value={fileName} type="text" placeholder='Please Attach your CV File...' name="" id="" />
                        <input className='form__input-file' onChange={handleFileChange} type="file" name="" id="input_file" />
                        <button className='button__green-white' onClick={handleClick}  type="button">select file</button>
                    </label>
                    <input className='form__input-message' type="text" placeholder="Message"/>
                    <button className='form__input-button button-form' type="submit">Submit</button>
                </form>
            </div>
        </section>
     );
}
 
export default JoinTeamForm;