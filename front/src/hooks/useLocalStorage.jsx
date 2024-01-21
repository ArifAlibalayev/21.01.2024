import React, { useEffect, useState } from 'react'

function useLocalStorage(key, InitialValue = '') {
    const [localData, setLocalData] = useState(
        localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : InitialValue
    )

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(localData))
    }, [key, localData])
    



  return [localData, setLocalData]
}

export default useLocalStorage