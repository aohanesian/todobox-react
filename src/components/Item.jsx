import React from 'react';

function Item(props) {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button onClick={props.onRemove(props.id)} type="button" className="btn btn-primary btn-sm">
                            -
                        </button>
                    </div>
                    <div className="col">{props.text}</div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Item;