'use strict'

import React, {Component} from 'react'

import '../../sass/_shortPw.scss'


class ShortSDK extends Component {

    constructor(obj) {
        super(obj)
        this.state = {
            value: '',
            length: ''
        }
    }

    _input(obj) {
        this.setState({
            length: obj.target.value.length
        })

        this.props.callBack(obj.target.value, obj.target.value.length)
    }

    componentDidMount() {
        var current = document.getElementById('Jpassword')
        var input = document.getElementById('Jinput')

        var elm = {
            on: function (el, type, fn) {
                el.addEventListener ? el.addEventListener(type, fn, false) : el.attachEvent ? el.attachEvent("on" + type, fn) : el["on" + type] = fn
            },
            event: function (e) {
                return e || window.event
            }
        }

        elm.on(current, 'click', function (e) {
            e = elm.event(e)
            input.focus()
        })

        elm.on(input, 'focus', function (e) {
            e = elm.event(e)
        })

        elm.on(input, 'blur', function (e) {
            e = elm.event(e)
        })

        elm.on(input, 'keyup', function (e) {
            e = elm.event(e)
        })

    }


    render() {
        let props = this.props
        let limit = props.limit || 0
        let pd = []
        let length = this.state.length


        for (var i = 0; i < limit; i++) {
            pd.push(
                <div className="current" data-index={i} key={i}>
                    <b className={length < i + 1 ? "pwd" : "pwd ed"}></b>
                    <span><b className="flash">|</b></span>
                </div>
            )
        }

        return (
            <div id="Jpassword" className="password-main-mod">
                <div className="password-mod">
                    {pd}
                </div>
                <input onChange={this._input.bind(this)} maxLength="6" id="Jinput" className="password" type='tel'
                       name="passwd"/>
            </div>
        )
    }
}

export default ShortSDK
