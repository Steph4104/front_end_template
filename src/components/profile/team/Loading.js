import React from 'react';

import { Card, CardTitle, CardBody } from 'reactstrap';

const style = {
    card: {
        width: '100%',
        border: 'none',
        boxShadow: 'none',
    },
    fakeAvatar: {
        height: '100px',
        width: '100px',
        margin: 'auto',
    },
    fakeBodyTitle: {
        height: '18px',
        width: '65px',
        marginBottom: '3px',
    },
    fakeInfo: {
        height: '16px',
        width: '150px',
    }
};


class Loading extends React.Component {
    render() {
        return (
            <Card style={style.card}>
                <CardBody>
                    <CardTitle>
                        <div className="loading-state fake-head mb-3"></div>
                    </CardTitle>
                    <span className="sr-only">Loading ...</span>
                    <div className="loading-state mt-3" style={style.fakeBodyTitle}></div>
                    <div className="loading-state" style={style.fakeInfo}></div>
                    <div className="loading-state mt-3" style={style.fakeBodyTitle}></div>
                    <div className="loading-state" style={style.fakeInfo}></div>
                </CardBody>
            </Card>
        );
    }
}

export default Loading;