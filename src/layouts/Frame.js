import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import 'styles/app.scss';

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[0] || 'index',
  };
}, { push: routeActions.push })
class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
    routeActions: PropTypes.func,
  };

  handleNavRoute(route, e) {
    e.preventDefault();

    const { push } = this.props;

    push(route);
  }

  render() {
    const { page, children } = this.props;

    return (
      <div className="container">
        <header>
          <div className="header-wrapper">
            <h1 className="logo">
              <a href="/" className="nav-logo" onClick={this.handleNavRoute.bind(this, '/')}>&lt;Recharts /&gt;</a>
            </h1>
            <nav>
              <ul className="nav" id="nav">
                <li>
                  <a href="/guide" className={'nav-link ' + (page === 'guide' ? 'active' : '')}
                    onClick={this.handleNavRoute.bind(this, '/guide')}>Guide</a>
                </li>
                <li>
                  <a href="/api" className={'nav-link ' + (page === 'api' ? 'active' : '')}
                    onClick={this.handleNavRoute.bind(this, '/api')}>API</a>
                </li>
                <li>
                  <a href="/examples" className={'nav-link ' + (page === 'examples' ? 'active' : '')}
                    onClick={this.handleNavRoute.bind(this, '/examples')}>Examples</a>
                </li>
                <li>
                  <a href="/blog" className={'nav-link ' + (page === 'blog' ? 'active' : '')}
                    onClick={this.handleNavRoute.bind(this, '/blog')}>Blog</a>
                </li>
                <li>
                  <a href="https://github.com/recharts/recharts"
                    target="_blank"
                    className="nav-github">Github</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        { children }
        <footer>
          <p>Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
          <p>Copyright (c) 2016 Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default Frame;
