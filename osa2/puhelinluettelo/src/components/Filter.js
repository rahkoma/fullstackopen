const Filter = ({newFilter, handleFilter}) =>
    <form>
        <div>filter shown with
            <input
                value={newFilter}
                onChange={handleFilter}
            />
        </div>   
    </form>

export default Filter