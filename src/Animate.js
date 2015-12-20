/**
 * Animate Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let RcAnimate = require('rc-animate');

class Animate extends RcAnimate {

    constructor(props) {
        super(props);
    }

}

Animate.defaultProps = RcAnimate.defaultProps;


// http://facebook.github.io/react/docs/reusable-components.html
Animate.propTypes = RcAnimate.propTypes;

Animate.displayName = "Animate";

module.exports = Animate;