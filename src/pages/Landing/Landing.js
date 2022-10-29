import React from 'react'
import './Landing.css'
import illustration from '../../assets/undraw_snap_the_moment_re_88cu.svg'
import lotus from '../../assets/cropped-lotus.svg';
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom';


const Landing = (props) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <>
            <Header
                logo={lotus}
                show={true}
            />
            <div id="landing">
                <div id="left">
                    <h2>
                        MEMORIES CAPTURED IN A MOMENT
                    </h2>
                    <p>
                        Enjoy repeated small clips of beautiful sceneries from past excursions and reminisce in their tranquility.
                    </p>
                    <button onClick={handleClick}>
                        Revisit them
                    </button>
                </div>
                <div id="right">
                    <img src={illustration} alt="illustration" />

                </div>
            </div>
        </>
    )
}

export default Landing
