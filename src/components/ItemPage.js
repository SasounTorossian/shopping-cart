import React from 'react'

const ItemPage = (props) => {
    const { params } = props.match

    return (
        <div className="ItemPage">
            {console.log(params.item)}
            {params.item}
        </div>
    )
}

export default ItemPage
