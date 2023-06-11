import { addDropListOpen } from '../../helpers/open/addDropListOpen'

import vector from "../../assets/img/content/aboutUs-pages/drop-down-list-Vector.svg";

import "./drop-down-list.scss";

const DropDownList = () => {
  return (
    <section className="dropDownList">
      <h2 className="header2">Current openings</h2>
      <ul className="dropDownList__list">
        <li className="dropDownList__list-item">
          <div className="dropDownList__card">
            <div className="dropDownList__card-wrapper_content" onClick={addDropListOpen}>
              <img className="dropDownList__card-img" src={vector} alt="" />
              <h3 className="header3 dropDownList__card-name">Unity Developer 1</h3>
            </div>
            <button className="dropDownList__card-button button-green">Apply</button>
          </div>
          
            <ul className="dropDownList__attachments-list openClass">
                <li className="dropDownList__attachments-list_item">
                    <h3  className='dropDownList__attachments-category'>Requirements:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Exp className='body dropDownList__attachments-text'erience as a Technical Artist;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with C#/Unity programming;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Proficient in Autodesk Maya, 3DS Max, Photoshop, Substance, etс.;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Confident knowledge of Unity graphics pipeline;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Development 2D and 3D games;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with mobile/web;</p></li>    
                        <li className="dropDownList__content-item"><p className='body'>Experience with shader development in game engines;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with Profiling/Debugging and Optimization by CPU, GPU, memory and build size.</p></li>
                    </ul>
                </li>
                <li className="dropDownList__attachments-list_item">
                    <h3 className="dropDownList__attachments-category">Preferences:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Experience with consoles NSwitch/Xbox/PS4;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with shader languages HLSL/GLSL;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with unit, behaviour, integration testing;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with Jenkins/TeamCity;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Worked on/created large frameworks and projects.</p></li>
                    </ul>
                </li>
                <li className="dropDownList__attachments-list_item">
                    <h3 className="dropDownList__attachments-category">Responsibilities:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Work with artists and engineers to create and implement art and technical solutions;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Support artists and engineers in the use of the 3D art pipeline and tool-chains;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Provide hands-on support to artists and engineers in regard to asset performance and validation;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Solve challenging technical issues in the 3D asset pipeline;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Collaborate with engineers and testers to diagnose and resolve in-game problems;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Collaborate with partner studios to share technology, workflows and best practices;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Able to work and communicate effectively in a fast-paced environment where goals and requirements may constantly be changing;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Committed to learning and sharing with the team to help achieve overall goals.</p></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li className="dropDownList__list-item">
          <div className="dropDownList__card">
            <div className="dropDownList__card-wrapper_content" onClick={addDropListOpen}>
              <img className="dropDownList__card-img" src={vector} alt="" />
              <h3 className="header3 dropDownList__card-name">Unity Developer 2</h3>
            </div>
            <button className="dropDownList__card-button button-green">Apply</button>
          </div>
          
            <ul className="dropDownList__attachments-list openClass">
                <li className="dropDownList__attachments-list_item">
                    <h3  className='dropDownList__attachments-category'>Requirements:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Exp className='body dropDownList__attachments-text'erience as a Technical Artist;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with C#/Unity programming;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Proficient in Autodesk Maya, 3DS Max, Photoshop, Substance, etс.;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Confident knowledge of Unity graphics pipeline;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Development 2D and 3D games;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with mobile/web;</p></li>    
                        <li className="dropDownList__content-item"><p className='body'>Experience with shader development in game engines;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with Profiling/Debugging and Optimization by CPU, GPU, memory and build size.</p></li>
                    </ul>
                </li>
                <li className="dropDownList__attachments-list_item">
                    <h3 className="dropDownList__attachments-category">Preferences:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Experience with consoles NSwitch/Xbox/PS4;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with shader languages HLSL/GLSL;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with unit, behaviour, integration testing;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Experience with Jenkins/TeamCity;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Worked on/created large frameworks and projects.</p></li>
                    </ul>
                </li>
                <li className="dropDownList__attachments-list_item">
                    <h3 className="dropDownList__attachments-category">Responsibilities:</h3>
                    <ul className="dropDownList__content">
                        <li className="dropDownList__content-item"><p className='body'>Work with artists and engineers to create and implement art and technical solutions;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Support artists and engineers in the use of the 3D art pipeline and tool-chains;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Provide hands-on support to artists and engineers in regard to asset performance and validation;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Solve challenging technical issues in the 3D asset pipeline;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Collaborate with engineers and testers to diagnose and resolve in-game problems;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Collaborate with partner studios to share technology, workflows and best practices;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Able to work and communicate effectively in a fast-paced environment where goals and requirements may constantly be changing;</p></li>
                        <li className="dropDownList__content-item"><p className='body'>Committed to learning and sharing with the team to help achieve overall goals.</p></li>
                    </ul>
                </li>
            </ul>
        </li>
      </ul>
    </section>
  );
};

export default DropDownList;
