import {memo, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

function UseMemoApp() {
    const memoizedValue = useMemo(() =>
        setTimeout(() => {
            console.log('useMemo')
        }, 1000), []
    )

    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <button>
                {count}
            </button>
            useMemo {memoizedValue}
        </>
    )
}

export default memo(UseMemoApp)