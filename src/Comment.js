import React, {Component } from 'react'

export default class Commenet extends Component {
    render(){
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}
