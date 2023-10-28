

export const Confirmation=({onSure})=>{
    return(
        <div>
            <div>Are you sure you want to delete the user</div>
            <button onClick={()=>onSure(true)}>ok</button>
            <button onClick={()=>onSure(false)}>cancel</button>
        </div>
    )
}