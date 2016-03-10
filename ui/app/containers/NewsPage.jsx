import React from 'react';

export default class News extends React.Component {
    render() {
        return (
            <div>
                <h2>Новости</h2>
                <article>
                    <header><time>01.01.2016</time></header>
                    <p>Бла-бла-бла</p>
                </article>
                <article>
                    <header><time>02.01.2016</time></header>
                    <p>Бла-бла-бла</p>
                </article>
            </div>
        );
    }
}
