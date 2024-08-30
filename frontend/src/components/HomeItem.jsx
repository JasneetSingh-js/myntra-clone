import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const HomeItem =({item})=>{
    // console.log(item);
    const dispatch=useDispatch();
    const handleAddToBag=()=>{
        dispatch(bagActions.addToBag(item.id));
    };
return(
    <div className="item-container">
    <img className="item-image" src={item.image} alt="item image"/>
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>
    
     <button type="button" class="btn btn-success btn-add-bag"onClick={handleAddToBag}
     >
        <IoMdAddCircleOutline />Add to bag</button>
     <button type="button" class="btn btn-danger btn-add-bag">
     <MdDeleteForever />Remove </button>
  </div>
)
};
export default HomeItem;