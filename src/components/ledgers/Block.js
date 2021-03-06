import React, { Component } from 'react';
import './Block.scss';
import BlockPopup from './BlockPopup';

class Block extends Component {
    constructor(){
        super();
        this.state={
            visible:false,
            block: []
        }
    }

    onBlockClick(block) {
        this.setState({
            visible:true
        })
    }

    cancelOut() {
        this.setState({
            visible:false
        })
    }

    render() {
        let text = "{...}";
        let blockNumber = this.props.block[0].blockNumber;
        return(
                <div>
                    <BlockPopup visible={this.state.visible}
                                cancel={this.cancelOut.bind(this)}
                                blockInfo={this.props.block}
                                addresses={this.props.addresses}
                                kaleidoInfo={this.props.kaleidoInfo}/>
                    <button className="block" onClick={this.onBlockClick.bind(this, this.props.block)}>
                        <h3 className="block-number-text">{blockNumber}</h3>
                        <h2 className="block-text">{text}</h2>
                    </button>
                </div>
        )
    }
}

export default Block;