import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h2>О нас</h2>
                {[,...Array(20)].map((k, v) =>
                    <p key={k}>Строка {v}</p>
                )}
            </div>
        );
    }
}
