export default function ShopHeader({headtext}){
    return(
        <div className="shopheader">
            <div className="shophead">
                <h1>{headtext}</h1>
                <p>Home &gt; {headtext}</p>
            </div>
        </div>
        
    );
}