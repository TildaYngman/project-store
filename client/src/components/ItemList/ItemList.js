import { renderItemList } from "../../renderingItems";


function ItemList(props) {
    console.log(props)

    let rows = renderItemList(props);

    return (
        <div id="item-list">
            {rows}
        </div>
    );
}

export default ItemList;