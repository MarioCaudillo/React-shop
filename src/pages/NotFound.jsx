import React from 'react';
import Error from '@logos/error.png';
import Header from '@components/Header'
import '@styles/NotFound.scss';
const NotFound  =   ()=>{
    return(
        <div>
            <div>
				<Header />
			</div>
            <h1>404 Error!</h1>
            <p>Sorry, this is not the page you're looking for</p>
            <div className='error'>
                <img src= {Error} alt="404" />
            </div>
        </div>
    );
}

export default NotFound;