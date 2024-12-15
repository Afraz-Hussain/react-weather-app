
export default  function Search({search,setsearch,handelsearch}){

return(
<div>
    <h2>this is search bar</h2>
    <input
    type='text'
    placeholder='Enter City Name'
    name='search'
value={search}
onChange={(e)=>setsearch(e.target.value)} 
    />
    <button onClick={handelsearch}>search</button>
</div>

)


}