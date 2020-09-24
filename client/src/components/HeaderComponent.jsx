import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
            this.state={

            }
    }

    render() {
        return (
            <div style={{marginBottom:50}}>
                <header>
                    <nav className="navbar bavbar-expand-md navbar-dark bg-dark">                    
                        <div><a href="https://javaguides.net" className="navbar-brand">Student Management App</a></div>
                        <div><img className="rounded-circle"src="/images/logo .png" width="50" height="50" alt="" loading="lazy"/></div>
                    </nav>
                </header>
            </div>
        );
    }
}



export default HeaderComponent;