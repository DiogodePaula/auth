import React from 'react';
import Auth from './components/apiintegration/auth';
import User from './components/apiintegration/user';
import Company from './components/apiintegration/company';
export default function () {
    return (
        <div>
            <Auth />
            <User />
            <Company />

        </div>
    );
}

