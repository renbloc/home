import React from 'react'

import Landing from './components/landing';
import Info from './components/info';
import Vilse from './components/vilse';
import Vem from './components/vem';
import Vem_R from './components/vem_reverse';
import Waste from './components/waste';
import Fragor from './components/fragor';

import first_image from '../../files/drawing.png';

export default function Index() {
    return (
        <React.Fragment>
            <div style={{ 
                backgroundImage: `url(${first_image})`, 
                height: 750, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right', }}>
                <Landing />
            </div>
            <div>
                <Info />
            </div>
            <div>
                <Vilse />
            </div>
            <div>
                <Vem />
            </div>
            <div>
                <Fragor />
            </div>
        </React.Fragment>
    )
}
