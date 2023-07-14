    import { useEffect } from "react"

const ChildFC = () => {

    useEffect(() => {
        console.log('Child useEffect (MOUNTING) is Called')
        return (() => {
            console.log('Child useEffect (UNMOUNTING) is called...')
        })
    }, []);



    return (
        <div>
            <h1>HELLO FROM CHILD FC</h1>
        </div>
    )
}

export default ChildFC;