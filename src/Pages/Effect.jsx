import {useEffect, useState} from 'react'

function Effect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // only runs once
    useEffect(() => {
        console.log('i created')

        // only runs when component deleted
        return () => {
            console.log('i died')
        }
    }, [])

    // runs when dependices updated
    useEffect(() => {
        console.log('count or name changed')
    }, [count, name])

  return (
    <>
        <h2>{count}</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={e => setCount(count+1)}>Inc</button>
        <div>

        </div>
    </>
  )
}

export default Effect