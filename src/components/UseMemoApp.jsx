import {memo, useMemo} from "react";

function UseMemoApp() {
    const memoizedValue = useMemo(() =>
        setTimeout(() => {
            console.log('useMemo')
        }, 1000), []
    )
    return (
        <>
            useMemo {memoizedValue}
        </>
    )
}

export default memo(UseMemoApp)