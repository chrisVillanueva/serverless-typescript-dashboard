import * as React from 'react';
import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";
import App from './App';
import './index.css';

export default (
    <SinglePageApp
        stackName="fs-dashboard"
        buildPath='build'
        region='us-east-1'>
        <Environment
            name="dev"
            domain=""
            certArn="arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************"
        />
        <Route
            path='/'
            name='Home'
            render={() => App()}
        />
    </SinglePageApp>
);
