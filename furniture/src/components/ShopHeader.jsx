import filter from '../assets/filter-line/filter.svg'
import reform from '../assets/filter-line/reform.svg'
import list from '../assets/filter-line/list.svg'

export default function ShopHeader(){
    return(
        <div className="shopheader">
            <div className="shophead">
                <h1>Shop</h1>
                <p>Home &gt; Shop</p>
            </div>
            <div className="filter-line">
                <div className="left-elements">
                    <a href=""><img src={filter} alt="filter" /></a>
                    <p>Filter</p>
                    <a href=""><img src={reform} alt="reform" /></a>
                    <a href=""><img src={list} alt="list" /></a>
                    <p>Showing 1-16 of 32 products</p>
                </div>
                <div className="right-elements">
                    <label>Show</label>
                    <input type="text" name="number" id="" placeholder='16' />
                    <label>Sort By</label>
                    <input type="text" name="sort" id="" placeholder='Default'/>
                </div>
            </div>
        </div>
        
    );
}