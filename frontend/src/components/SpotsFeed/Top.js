

export const Top = ({data}) => {
    return (
        <div className='feedTop'>
            {data.length?(
                <>
                    <h2>{`${data.length}+ ${data.type} available for rent`}</h2>
                    {/* <h2>{data.type}</h2> */}
                </>
            ):null
        }
        </div>
    )
}
